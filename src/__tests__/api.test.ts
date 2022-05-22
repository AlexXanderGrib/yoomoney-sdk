import { API, YMApiError } from "../api";
import { config } from "dotenv";
import type { Operation } from "../api.types";

config();

jest.setTimeout(10_000);

describe(API.name, () => {
  describe("Default API", () => {
    const instance = new API(process.env.YOOMONEY_TOKEN || "");

    test("Instance", () => {
      expect(instance.agent).toBeUndefined();
      expect(instance.token).toBe(process.env.YOOMONEY_TOKEN);
      expect(instance.endpoint).toBe("https://yoomoney.ru/api");
    });

    test("Account info", async () => {
      const data = await instance.accountInfo();

      expect(data).toMatchObject({
        account: process.env.YOOMONEY_WALLET,
        currency: "643",
        account_type: "personal",
        identified: true,
        account_status: "identified"
      });
    });

    test("Operation History & Details", async () => {
      const data = await instance.operationHistory();
      const operation = data.operations[0] as Operation;

      expect(typeof operation.amount).toBe("number");
      expect(typeof operation.title).toBe("string");
      expect(typeof operation.operation_id).toBe("string");

      const details = await instance.operationDetails({
        operation_id: operation.operation_id as string
      });

      expect(details).toMatchObject(operation);

      try {
        await instance.operationDetails({
          operation_id: "0"
        });

        expect(false).toBeTruthy();
      } catch (error: any) {
        expect(error).toBeInstanceOf(YMApiError);
        expect(error.message).toBe(
          "API returned error code: illegal_param_operation_id"
        );
        expect(error.code).toBe("illegal_param_operation_id");
      }
    });
  });
});
