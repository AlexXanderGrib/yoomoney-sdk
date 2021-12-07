import { FormBuilder } from "redirect-form-builder";
import { Agent, fetch } from "./fetch";

type AuthScope =
  | "account-info"
  | "operation-history"
  | "operation-details"
  | "incoming-transfers"
  | "payment"
  | "payment-shop"
  | "payment-p2p"
  | "money-source";

/**
 * Ошибка в процессе авторизации
 * @export
 * @class YMAuthError
 */
export class YMAuthError extends Error {
  /**
   *
   * @param {string} code Код ошибки
   */
  constructor(public code: string) {
    super(`API returned error: ${code}`);
  }
}

/**
 * Реализует всё необходимое для [авторизации через YooMoney](https://yoomoney.ru/docs/wallet/using-api/authorization/basics)
 *
 * @see {@link https://yoomoney.ru/docs/wallet/using-api/authorization/basics|Описание протокола}
 * @export
 * @class Auth
 */
export class Auth {
  /**
   * Creates an instance of Auth.
   * @memberof Auth
   * @param {string} clientId ID приложения
   * @param {string} redirectUrl URL-перенаправления
   * @param {string=} [clientSecret] Секретное Слово
   * @param {string} [endpoint="https://yoomoney.ru/oauth"] По умолчанию `https://yoomoney.ru/oauth`
   * @param {Agent=} [agent] HTTP Agent для использования с Proxy
   */
  constructor(
    public clientId: string,
    public redirectUrl: string,
    public clientSecret?: string,
    public endpoint: string = "https://yoomoney.ru/oauth",
    public agent?: Agent
  ) {}

  /**
   * Генерирует html-форму перенаправления пользователя на авторизацию
   *
   * @memberof Auth
   * @param {AuthScope[]} scopes
   * @param {string=} instanceName
   * @return {string}
   */
  getAuthForm(scopes: AuthScope[], instanceName?: string): string {
    const builder = new FormBuilder(`${this.endpoint}/authorize`, "POST", {
      client_id: this.clientId,
      response_type: "code",
      redirect_uri: this.redirectUrl,
      scope: scopes.join(" ")
    });

    if (instanceName) {
      builder.setField("instance_name", instanceName);
    }

    return builder.buildHtml();
  }

  /**
   * Обменивает временный токен на постоянный токен авторизации
   *
   * @memberof Auth
   * @throws {YMAuthError}
   * @param {string} code Временный токен (authorization code)
   * @return {Promise<string>} Токен авторизации
   */
  async exchangeCode2Token(code: string): Promise<string> {
    const response = await fetch(
      `${this.endpoint}/token`,
      {
        code,
        client_id: this.clientId,
        grant_type: "authorization_code",
        redirect_uri: this.redirectUrl,
        client_secret: this.clientSecret
      },
      {},
      this.agent
    );

    const json = await response.json();

    if (json.error) throw new YMAuthError(json.error);

    return json.access_token;
  }
}
