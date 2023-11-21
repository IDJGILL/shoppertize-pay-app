import { CheckCheck } from "lucide-react";
import React from "react";

export default function SuccessPage() {
  return (
    <main className="w-full">
      <div className="container mx-auto">
        <div className="flex min-h-[100dvh] items-center justify-center">
          <div className="flex w-full max-w-sm flex-col items-center justify-center p-4 text-center shadow">
            <div className="mb-4">
              <CheckCheck className="h-10 w-10 text-green-600" />
            </div>
            <div className="mb-4 text-2xl font-semibold">Order Placed!</div>
            <p className="mb-4">
              Thank for shopping with us, we are now processing order and will
              get back to you for further information. Your transaction id is:
              4654654564454.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
