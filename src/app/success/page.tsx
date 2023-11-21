import React from "react";

export default function SuccessPage() {
  return (
    <main className="w-full">
      <div className="container mx-auto">
        <div className="flex min-h-[100dvh] items-center justify-center">
          <div className="w-full max-w-sm p-4 text-center shadow">
            <div>🎉🎉🎉</div>
            <div className="mb-4 text-2xl font-semibold">Order Placed!</div>
            <p>Thank for placing your order</p>
          </div>
        </div>
      </div>
    </main>
  );
}
