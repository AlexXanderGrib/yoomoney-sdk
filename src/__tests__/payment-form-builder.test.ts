import { PaymentFormBuilder, PaymentType } from "../payment-form-builder";
import { testHtml } from "./html";

describe(PaymentFormBuilder.name, () => {
  test("Base", () => {
    const builder = new PaymentFormBuilder({
      paymentType: PaymentType.FromCard,
      sum: 10.055_666,
      receiver: "",
      quickPayForm: "small",
      targets: "aboba"
    });

    testHtml(builder.buildHtml(), {
      "quickpay-form": "small",
      paymentType: "AC",
      receiver: "",
      sum: "10.055666",
      targets: "aboba",
      "need-address": false,
      "need-email": false,
      "need-fio": false,
      "need-phone": false,
      "short-dest": undefined,
      comment: undefined,
      formcomment: undefined,
      label: undefined,
      successURL: undefined
    });
  });

  test("Setters", () => {
    const builder = new PaymentFormBuilder();

    testHtml(builder.setAmount("1.056606").buildHtml(), { sum: "1.06" });
    testHtml(builder.setAmount(10.056).buildHtml(), { sum: "10.06" });

    {
      testHtml(builder.buildHtml(), { "need-address": false });
      testHtml(builder.requireAddress().buildHtml(), { "need-address": true });
      testHtml(builder.requireAddress(true).buildHtml(), {
        "need-address": true
      });
      testHtml(builder.requireAddress(false).buildHtml(), {
        "need-address": false
      });
    }

    {
      testHtml(builder.buildHtml(), { "need-email": false });
      testHtml(builder.requireEmail().buildHtml(), { "need-email": true });
      testHtml(builder.requireEmail(true).buildHtml(), {
        "need-email": true
      });
      testHtml(builder.requireEmail(false).buildHtml(), {
        "need-email": false
      });
    }

    {
      testHtml(builder.buildHtml(), { "need-fio": false });
      testHtml(builder.requireFio().buildHtml(), { "need-fio": true });
      testHtml(builder.requireFio(true).buildHtml(), {
        "need-fio": true
      });
      testHtml(builder.requireFio(false).buildHtml(), {
        "need-fio": false
      });
    }

    {
      testHtml(builder.buildHtml(), { "need-phone": false });
      testHtml(builder.requirePhone().buildHtml(), { "need-phone": true });
      testHtml(builder.requirePhone(true).buildHtml(), {
        "need-phone": true
      });
      testHtml(builder.requirePhone(false).buildHtml(), {
        "need-phone": false
      });
    }

    {
      testHtml(builder.buildHtml(), { receiver: "" });
      testHtml(builder.setReceiver(4_100_117_723_869_225).buildHtml(), {
        receiver: "4100117723869225"
      });
      testHtml(builder.setReceiver("4100117723869225").buildHtml(), {
        receiver: "4100117723869225"
      });
    }

    {
      testHtml(builder.buildHtml(), { successURL: undefined });
      testHtml(builder.setSuccessURL("https://example.com/success").buildHtml(), {
        successURL: "https://example.com/success"
      });
      testHtml(
        builder.setSuccessURL(new URL("https://example.com/success")).buildHtml(),
        {
          successURL: "https://example.com/success"
        }
      );
    }
  });
});
