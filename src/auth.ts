import { FormBuilder } from "redirect-form-builder";
import { fetch } from "./fetch";

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
 */
export class Auth {
  /**
   *
   * @param {string} clientId ID приложения
   * @param {string} redirectUrl URL-перенаправления
   * @param {string=} clientSecret Секретное Слово
   * @param {string=} endpoint
   */
  constructor(
    public readonly clientId: string,
    public readonly redirectUrl: string,
    public readonly clientSecret?: string,
    public readonly endpoint: string = "https://yoomoney.ru/oauth"
  ) {}

  /**
   * Генерирует html-форму перенаправления пользователя на авторизацию
   *
   * @param {AuthScope[]} scopes
   * @param {string=} instanceName
   * @return {string}
   */
  getAuthForm(scopes: AuthScope[], instanceName?: string): string {
    const builder = new FormBuilder()
      .setURL(`${this.endpoint}/authorize`)
      .setField("client_id", this.clientId)
      .setField("response_type", "code")
      .setField("redirect_uri", this.redirectUrl)
      .setField("scope", scopes.join(" "));

    return (instanceName
      ? builder.setField("instance_name", instanceName)
      : builder
    ).buildHtml();
  }

  /**
   *
   * @param {string} code Временный токен (authorization code), подлежащий обмену на постоянный токен авторизации
   * @return {Promise<string>} Токен авторизации
   */
  async exchangeCode2Token(code: string): Promise<string> {
    const response = await fetch(`${this.endpoint}/token`, {
      code,
      client_id: this.clientId,
      grant_type: "authorization_code",
      redirect_uri: this.redirectUrl,
      client_secret: this.clientSecret
    });

    const json = await response.json();

    if (json.error) throw new YMAuthError(json.error);

    return json.access_token;
  }
}
