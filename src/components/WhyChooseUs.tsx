"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const rentBenefits = [
    "Lower upfront investment",
    "Flexible rental duration",
    "Easy upgrade options",
    "No hardware ownership burden",
    "Useful for temporary teams and projects",
    "Maintenance and replacement support",
  ];

  const chooseUs = [
    "Dell Partner advantage",
    "Multi-brand device availability",
    "Bulk laptop and desktop rental support",
    "Fast deployment",
    "Flexible rental plans",
    "Corporate GST billing",
    "Replacement support",
    "Custom configuration support",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fbff] via-white to-[#fff8f2] py-16 sm:py-20">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-100/80 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="font-black text-[#ef4b3f]">
            Why Businesses Choose Rentals
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Reduce IT Cost Without Compromising Support
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Get reliable IT equipment with flexible rental plans, fast support,
            and simple onboarding for your business needs.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-gradient-to-br from-[#174a86] via-[#103966] to-[#08213f] p-7 text-white shadow-2xl shadow-blue-900/20 sm:p-10"
          >
            <div className="mb-8">
              <p className="font-bold text-blue-200">
                Why Rent Instead of Buying
              </p>

              <h3 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Save Cost and Stay Flexible
              </h3>
            </div>

            <div className="grid gap-4">
              {rentBenefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-4 font-bold backdrop-blur transition hover:bg-white/15"
                >
                  <CheckCircle2 size={20} className="shrink-0 text-sky-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white text-slate-950 shadow-2xl shadow-slate-300/50"
          >
            <div className="h-2 bg-gradient-to-r from-[#ef4b3f] via-orange-400 to-yellow-400" />

            <div className="p-7 sm:p-10">
              <div className="mb-8">
                <p className="font-bold text-[#ef4b3f]">
                  Why Choose Us
                </p>

                <h3 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                  Reliable IT Rental Support 
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {chooseUs.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-[#f8fafc] px-4 py-4 text-sm font-bold text-slate-800 shadow-sm transition hover:border-orange-100 hover:bg-orange-50"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#ef4b3f]"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}