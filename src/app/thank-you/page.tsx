"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const leadId = searchParams.get("leadId") || "LEAD-EVENT-2026-XXXX";

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5">
      <div className="max-w-2xl rounded-3xl bg-white p-8 text-center shadow-xl">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700">
          ✓
        </div>

        <h1 className="text-4xl font-bold text-slate-900">Thank You!</h1>

        <p className="mt-4 text-lg text-slate-600">
          Your requirement has been received successfully. Our team will review the details
          and contact you shortly.
        </p>

        <div className="mt-6 rounded-2xl bg-blue-50 p-5">
          <p className="text-sm font-semibold text-blue-700">
            Your Enquiry ID
          </p>
          <p className="mt-2 text-2xl font-bold text-blue-900">{leadId}</p>
        </div>

        <div className="mt-8 text-left">
          <h2 className="font-bold text-slate-900">Next Steps</h2>
          <ul className="mt-4 space-y-3 text-slate-600">
            <li>1. Our team reviews your requirement.</li>
            <li>2. We contact you for confirmation.</li>
            <li>3. We suggest the best rental or onboarding solution.</li>
            <li>4. The process starts after your confirmation.</li>
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-full bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Back to Home
          </Link>

          <a
            href="https://wa.me/918341214040?text=Hi,%20I%20submitted%20an%20enquiry.%20Please%20contact%20me."
            target="_blank"
            className="rounded-full border px-6 py-3 font-semibold text-slate-800 hover:bg-slate-50"
          >
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="p-10">Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  );
}