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

export class YMAuthError extends Error {
  constructor(public code: string) {
    super(`API returned error: ${code}`);
  }
}

export class Auth {
  constructor(
    public readonly clientId: string,
    public readonly redirectUrl: string,
    public readonly clientSecret?: string,
    public readonly endpoint: string = "https://yoomoney.ru/oauth"
  ) {}

  getAuthForm(scopes: AuthScope[], instanceName?: string) {
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

  async exchangeCode2Token(code: string): Promise<string> {
    const response = await fetch(`${this.endpoint}/token`, {
      code,
      client_id: this.clientId,
      grant_type: "authorization_code",
      redirect_uri: this.redirectUrl,
      client_secret: this.clientSecret,
    });

    const json = await response.json();

    console.log({ json });

    if (json.error) throw new YMAuthError(json.error);

    return json.access_token;
  }
}
