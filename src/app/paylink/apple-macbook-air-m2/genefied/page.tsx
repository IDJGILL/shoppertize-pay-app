"use client";

import Image from "next/image";
import { api } from "~/trpc/react";

import macBook from "~/assets/macbook-air-1.jpeg";
import BrandLogo from "~/app/_components/brand-logo";

export default function ProductPage() {
  const { mutate, isLoading, isError } = api.pay.useMutation({
    onSuccess: (link) => {
      window.location.href = link;
    },
  });

  return (
    <main className="w-full bg-zinc-50">
      {/* Header */}
      <header className="sticky inset-x-0 top-0 border-b bg-white">
        <div className="container flex h-12 items-center justify-between">
          <BrandLogo />

          <div className="font-semibold">Payable: ₹1,21,900</div>
        </div>
      </header>

      <div className="container gap-20 py-4 md:flex md:py-20">
        <div className="mb-8">
          <Image
            src={macBook}
            alt=""
            width={500}
            height={500}
            className="rounded-xl border"
          />
        </div>

        <div>
          <h2 className="mb-4 max-w-2xl text-2xl font-semibold md:text-3xl">
            Apple MacBook Air 13 inch, M2 chip with 8‑core CPU, 8‑core GPU,
            16‑core Neural Engine
          </h2>

          <ul className="mb-8 space-y-2 text-slate-600">
            <li>Apple M2 chip</li>
            <li>16GB unified memory</li>
            <li>256GB SSD storage</li>
            <li>8‑core CPU, 8‑core GPU, 16‑core Neural Engine</li>
            <li>Display size 13 inch</li>
          </ul>

          <div className="mb-8 h-2 w-full border-b" />

          {isError && (
            <div className="mb-4 text-center text-red-600">
              Something went wrong, please try again.
            </div>
          )}

          <button
            onClick={() => mutate()}
            className=" w-full rounded-xl bg-blue-600 px-4 py-2 text-white"
          >
            {isLoading ? "Please wait..." : "Proceed to Payment"}
          </button>

          <p className="mt-4 max-w-2xl text-sm">
            You will be redirected to the Secure PhonePe payment page. From
            there, you will be redirected back to Shoppertize upon a successful
            transaction.
          </p>
        </div>
      </div>

      <footer className="border-t bg-zinc-100">
        <div className="container py-8">
          <div className="text-center text-sm text-zinc-400">
            Copyright © 2023 Shoppertize Inc.
          </div>
        </div>
      </footer>
    </main>
  );
}
