import { randomUUID } from "crypto";
import getPhonePeSHA256Payload from "./getPhonePeSHA256Payload";

export const pay = async () => {
  const merchantTransactionId = randomUUID();

  const merchantUserId = randomUUID();

  const payload = getPhonePeSHA256Payload({
    merchantTransactionId: merchantTransactionId,
    merchantUserId: merchantUserId,
    amount: 12190000,
    redirectUrl: `https://www.shoppertize.in/success`,
    redirectMode: "GET",
    callbackUrl: "https://www.shoppertize.in/",
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  });

  const paymentResponse = await fetch(
    "https://api.phonepe.com/apis/hermes/pg/v1/pay",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-VERIFY": payload.xVerify,
      },
      body: JSON.stringify({
        request: payload.base64Payload,
      }),
    },
  );

  const paymentJson: PhonePePayPageType =
    (await paymentResponse.json()) as PhonePePayPageType;

  return paymentJson.data.instrumentResponse.redirectInfo.url;
};
