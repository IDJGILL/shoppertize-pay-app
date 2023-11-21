type PhonePePayPageType = {
  success: boolean;
  code: string;
  message: string;
  data: {
    merchantId: string;
    merchantTransactionId: string;
    instrumentResponse: {
      type: string;
      redirectInfo: {
        url: string;
        method: string;
      };
    };
  };
};

type PhonePePaymentStatus = {
  success: boolean;
  code:
    | "PAYMENT_SUCCESS"
    | "PAYMENT_ERROR"
    | "PAYMENT_PENDING"
    | "PAYMENT_DECLINED";
  message: string;
  data: {
    merchantId: string;
    merchantTransactionId: string;
    transactionId: string;
    amount: number;
    state: string;
    responseCode: string;
    paymentInstrument: {
      type: "UPI" | "CARD" | "NETBANKING";
    };
  };
};
