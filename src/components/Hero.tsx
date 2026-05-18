"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  Laptop,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#061526] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb55,transparent_35%),radial-gradient(circle_at_bottom_right,#ef4b3f44,transparent_35%)]" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:py-14 lg:grid-cols-2 lg:items-center lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-blue-100 backdrop-blur">
            <Sparkles size={16} className="text-yellow-300" />
            Reliable IT Rental & Leasing Partner
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.45 }}
            className="mb-6 w-fit rounded-[1.25rem] border border-yellow-300/60 bg-gradient-to-r from-yellow-300 via-orange-400 to-[#ef4b3f] p-[2px] shadow-xl shadow-yellow-500/20"
          >
            <div className="rounded-[1.15rem] bg-slate-950/15 px-5 py-3 backdrop-blur">
              <p className="text-xs font-black uppercase tracking-widest text-slate-950">
                Event Special Offer
              </p>

              <h2 className="mt-1 text-xl font-black leading-tight text-white drop-shadow sm:text-2xl">
                Save 15% on Every Order — Guaranteed!
              </h2>
            </div>
          </motion.div>

          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            IT Rentals Made Simple
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Get laptops, desktops, servers, and IT equipment on
            rent with flexible plans, bulk availability, fast deployment, and
            dedicated business support.
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <a
              href="#enquiry"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-black text-blue-800 shadow-xl transition hover:-translate-y-1 hover:bg-blue-50"
            >
              Request Support
              <ArrowRight
                className="transition group-hover:translate-x-1"
                size={19}
              />
            </a>

            <a
              href="https://wa.me/919246172100?text=Hi,%20I%20am%20interested%20in%20IT%20rental%20and%20leasing%20support."
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3 font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
            >
              <Headphones size={19} />
              Talk to Our Team
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="relative rounded-[1.75rem] border border-white/15 bg-white/10 p-4 shadow-xl backdrop-blur">
            <div className="rounded-[1.35rem] bg-white p-5 text-slate-900 shadow-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-[#ef4b3f]">
                    Business IT Support
                  </p>
                  <h2 className="mt-1 text-2xl font-black">
                    How We Can Help
                  </h2>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <Laptop size={24} />
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Laptop rental for teams",
                  "Bulk devices for events",
                  "Flexible leasing support",
                  "New customer onboarding",
                ].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 rounded-2xl border bg-slate-50 px-4 py-3.5 font-bold"
                  >
                    <CheckCircle2 className="text-green-600" size={19} />
                    {item}
                  </motion.div>
                ))}
              </div>

              <a
                href="#enquiry"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#ef4b3f] to-orange-500 px-5 py-3.5 font-black text-white shadow-xl shadow-red-500/20 transition hover:-translate-y-1"
              >
                Submit Requirement
                <ArrowRight size={19} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}