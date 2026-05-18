"use client";

import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  Handshake,
  Landmark,
  Users,
} from "lucide-react";

const customers = [
  {
    title: "Corporate Clients",
    icon: Building2,
    color: "bg-blue-600",
  },
  {
    title: "Startups",
    icon: Users,
    color: "bg-[#ef4b3f]",
  },
  {
    title: "Training Teams",
    icon: GraduationCap,
    color: "bg-amber-500",
  },
  {
    title: "Event Organizers",
    icon: Handshake,
    color: "bg-green-600",
  },
  {
    title: "Business Teams",
    icon: Landmark,
    color: "bg-slate-800",
  },
];

export default function TrustedBy() {
  return (
    <section
      id="customers"
      className="relative overflow-hidden bg-white py-16 sm:py-20"
    >
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-100 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-black text-[#ef4b3f]">Trusted By</p>

          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Supporting Businesses Across Different Needs
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            We support corporates, startups, training teams, event organizers,
            and growing businesses with reliable IT rental and leasing solutions.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {customers.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-[2rem] border border-slate-100 bg-white p-6 text-center shadow-xl shadow-slate-200/70"
              >
                <div
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${item.color} text-white shadow-lg`}
                >
                  <Icon size={28} />
                </div>

                <h3 className="mt-5 font-black text-slate-950">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}