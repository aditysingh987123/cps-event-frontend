"use client";

import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function EnquiryForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const leadId = `LEAD-EVENT-2026-${Math.floor(
      1000 + Math.random() * 9000
    )}`;

    setTimeout(() => {
      router.push(`/thank-you?leadId=${leadId}`);
    }, 700);
  };

  return (
    <section
      id="enquiry"
      className="relative overflow-hidden bg-[#061526] py-16 text-white sm:py-20"
    >
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#ef4b3f]/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl"
        >
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative bg-gradient-to-br from-[#061526] via-blue-950 to-slate-950 p-8 text-white sm:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb55,transparent_35%),radial-gradient(circle_at_bottom_right,#ef4b3f55,transparent_35%)]" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black backdrop-blur">
                  <Sparkles size={16} className="text-yellow-300" />
                  Request Support
                </div>

                <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                  Share Your Requirement With Us
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Looking for IT equipment rental, event setup, bulk devices, or
                  customer onboarding support? Share your details and our team
                  will contact you with the right solution.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Rental solutions for businesses and events",
                    "Bulk laptop and desktop availability",
                    "Support for new customer onboarding",
                    "Quick response from our rental support team",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white/10 px-4 py-3 font-bold backdrop-blur"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid gap-4 bg-white p-5 text-slate-900 sm:p-8 md:grid-cols-2"
            >
              <input className="input" required placeholder="Full Name" />
              <input className="input" required placeholder="Company Name" />
              <input className="input" required placeholder="Mobile Number" />
              <input
                className="input"
                required
                type="email"
                placeholder="Work Email"
              />
              <input className="input" required placeholder="City" />

              <select
                id="requirementType"
                className="input"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Requirement Type
                </option>
                <option>Laptop Rental</option>
                <option>Desktop Rental</option>
                <option>Server Rental</option>
                <option>Workstation Rental</option>
                <option>Bulk IT Rental</option>
                <option>Corporate Leasing</option>
                <option>Event IT Setup</option>
                <option>Customer Onboarding</option>
                <option>Other</option>
              </select>

              <select className="input" required defaultValue="">
                <option value="" disabled>
                  Preferred Brand
                </option>
                <option>Any Brand</option>
                <option>Dell</option>
                <option>HP</option>
                <option>Apple</option>
                <option>Lenovo</option>
              </select>

              <input
                className="input"
                required
                type="number"
                min="1"
                placeholder="Number of Devices"
              />

              <select className="input" required defaultValue="">
                <option value="" disabled>
                  Rental Duration
                </option>
                <option>Less than 1 month</option>
                <option>1-3 months</option>
                <option>3-6 months</option>
                <option>6-12 months</option>
                <option>More than 1 year</option>
                <option>Not applicable</option>
              </select>

              <input className="input" required type="date" />

              <select className="input" required defaultValue="">
                <option value="" disabled>
                  Decision Timeline
                </option>
                <option>Immediately</option>
                <option>Within 7 days</option>
                <option>Within 15 days</option>
                <option>Within 1 month</option>
                <option>Just exploring</option>
              </select>

              <label className="flex items-center gap-3 rounded-[18px] border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <input type="checkbox" />
                <span className="text-sm font-bold">I need urgent support</span>
              </label>

              <textarea
                className="input min-h-32 md:col-span-2"
                placeholder="Tell us about your requirement"
              />

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 rounded-[18px] bg-gradient-to-r from-[#ef4b3f] to-orange-500 px-6 py-4 font-black text-white shadow-xl shadow-red-500/20 transition hover:-translate-y-1 disabled:opacity-60 md:col-span-2"
              >
                {loading ? "Submitting..." : "Submit Requirement"}
                <Send size={18} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}