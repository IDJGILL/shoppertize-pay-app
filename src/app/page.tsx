"use client";

import { api } from "~/trpc/react";

export default function Home() {
  const { mutate, isLoading, isError } = api.pay.useMutation({
    onSuccess: (link) => {
      window.location.href = link;
    },
  });

  return (
    <main className="w-full">
      <div className="container mx-auto">
        <div className="flex min-h-[100dvh] items-center justify-center">
          <div className="w-full max-w-sm p-4 shadow">
            <div className="mb-4 text-xl font-semibold">Amount: ₹1</div>
            <button
              onClick={() => mutate()}
              className=" w-full bg-blue-600 px-4 py-2 text-white"
            >
              {isLoading ? "Please wait..." : "Pay Now"}
            </button>

            {isError && (
              <div className="mt-4 text-red-600">
                Something went wrong, please try again.
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
