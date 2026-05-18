"use client";

import { motion } from "framer-motion";
import {
  Headphones,
  IndianRupee,
  Settings,
  TrendingDown,
  Truck,
  Wallet,
} from "lucide-react";

const benefits = [
  {
    title: "Cost Saving",
    desc: "Reduce IT costs with flexible rental and leasing options.",
    icon: TrendingDown,
    color: "bg-green-600",
  },
  {
    title: "No Upfront Investment",
    desc: "Pay as you use and preserve your business capital.",
    icon: Wallet,
    color: "bg-[#ef4b3f]",
  },
  {
    title: "Maintenance Support",
    desc: "Get reliable support for rental devices during the plan.",
    icon: Settings,
    color: "bg-blue-600",
  },
  {
    title: "Fast Delivery & Setup",
    desc: "Quick deployment for offices, events, training, and onboarding.",
    icon: Truck,
    color: "bg-amber-500",
  },
  {
    title: "Dedicated Business Support",
    desc: "Our team helps you choose the right rental solution.",
    icon: Headphones,
    color: "bg-orange-600",
  },
  {
    title: "Flexible Rental Plans",
    desc: "Choose short-term or long-term rental based on your requirement.",
    icon: IndianRupee,
    color: "bg-indigo-600",
  },
];

export default function SavingsSection() {
  return (
    <section className="relative overflow-hidden bg-[#061526] py-16 text-white sm:py-20">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#ef4b3f]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-black text-yellow-300">Why Rentals Work Better</p>

          <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
            Save More With Flexible IT Rentals
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            At C Prompt Solutions, we simplify IT equipment access through
            rental and leasing models. You save cost, get reliable hardware, and
            enjoy hassle-free business support.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -8 }}
                className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur"
              >
                <div
                  className={`mb-7 flex h-16 w-16 items-center justify-center rounded-2xl ${item.color} text-white`}
                >
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-black text-white">{item.title}</h3>

                <p className="mt-4 leading-7 text-slate-300">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}