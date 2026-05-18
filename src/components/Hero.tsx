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
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-blue-100 backdrop-blur">
            <Sparkles size={17} className="text-yellow-300" />
            Reliable IT Rental & Leasing Partner
          </div>

          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            IT Rental & Customer Onboarding Support for Businesses
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Get laptops, desktops, servers, workstations, and IT equipment on
            rent with flexible plans, bulk availability, fast deployment, and
            dedicated business support.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#enquiry"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-black text-blue-800 shadow-2xl transition hover:-translate-y-1 hover:bg-blue-50"
            >
              Request Support
              <ArrowRight
                className="transition group-hover:translate-x-1"
                size={20}
              />
            </a>

            <a
              href="https://wa.me/919246172100?text=Hi,%20I%20am%20interested%20in%20IT%20rental%20and%20leasing%20support."
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
            >
              <Headphones size={20} />
              Talk to Our Team
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="relative rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:p-6">
            <div className="rounded-[1.5rem] bg-white p-5 text-slate-900 shadow-xl sm:p-7">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-[#ef4b3f]">
                    Business IT Support
                  </p>
                  <h2 className="mt-1 text-2xl font-black">
                    How We Can Help
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <Laptop size={26} />
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Laptop rental for teams",
                  "Bulk devices for events",
                  "Flexible leasing support",
                  "New customer onboarding",
                ].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 rounded-2xl border bg-slate-50 px-4 py-4 font-bold"
                  >
                    <CheckCircle2 className="text-green-600" size={20} />
                    {item}
                  </motion.div>
                ))}
              </div>

              <a
                href="#enquiry"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#ef4b3f] to-orange-500 px-5 py-4 font-black text-white shadow-xl shadow-red-500/25 transition hover:-translate-y-1"
              >
                Submit Requirement
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </motion.div> 
        
      </div>
    </section>
  );
}