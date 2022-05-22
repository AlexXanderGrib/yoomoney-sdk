import { Auth, YMAuthError } from "../auth";
import { testHtml } from "./html";
import { createMockServer } from "./server";
import express from "express";

describe(Auth.name, () => {
  test("Instance", () => {
    const auth = new Auth("1213", "https://example.com");

    expect(auth.agent).toBeUndefined();
    expect(auth.clientSecret).toBeUndefined();
    expect(auth.endpoint).toBe("https://yoomoney.ru/oauth");
    testHtml(auth.getAuthForm(["account-info", "incoming-transfers"]), {
      client_id: "1213",
      response_type: "code",
      redirect_uri: "https://example.com",
      scope: "account-info incoming-transfers"
    });

    const url = new URL(auth.getAuthUrl(["account-info", "incoming-transfers"]));

    expect(url.searchParams.get("client_id")).toBe("1213");
    expect(url.searchParams.get("response_type")).toBe("code");
    expect(url.searchParams.get("redirect_uri")).toBe("https://example.com");
    expect(url.searchParams.get("scope")).toBe("account-info incoming-transfers");
  });

  test("Instance name", async () => {
    const server = await createMockServer();
    const auth = new Auth("1213", "https://example.com", "2323232", server.url);

    expect(auth.agent).toBeUndefined();
    expect(auth.clientSecret).toBe("2323232");
    expect(auth.endpoint).toBe(server.url);
    testHtml(auth.getAuthForm(["account-info", "incoming-transfers"], "1"), {
      client_id: "1213",
      response_type: "code",
      redirect_uri: "https://example.com",
      scope: "account-info incoming-transfers",
      instance_name: "1"
    });

    const url = new URL(
      auth.getAuthUrl(["account-info", "incoming-transfers"], "1")
    );

    expect(url.searchParams.get("client_id")).toBe("1213");
    expect(url.searchParams.get("response_type")).toBe("code");
    expect(url.searchParams.get("redirect_uri")).toBe("https://example.com");
    expect(url.searchParams.get("scope")).toBe("account-info incoming-transfers");
    expect(url.searchParams.get("instance_name")).toBe("1");

    enum Code {
      SUCCESS = "1",
      FAIL = "2"
    }

    server.app.post(
      "/token",
      express.urlencoded({ extended: true }),
      (request, response) => {
        if (request.body.code === Code.FAIL) {
          return response.status(500).json({ error: "error" }).end();
        }

        return response.json({ access_token: "123" }).end();
      }
    );

    const token = await auth.exchangeCode2Token(Code.SUCCESS);
    expect(token).toBe("123");

    try {
      await auth.exchangeCode2Token(Code.FAIL);

      expect(false).toBeTruthy();
    } catch (error: any) {
      expect(error).toBeInstanceOf(YMAuthError);
      expect(error.message).toBe("API returned error: error");
    }

    server.close();
  });
});
