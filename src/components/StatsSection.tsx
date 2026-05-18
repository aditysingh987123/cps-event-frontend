"use client";

import { motion } from "framer-motion";
import { IndianRupee, ShieldCheck, Truck, Users } from "lucide-react";

const stats = [
  {
    value: "1200+",
    label: "Customers",
    icon: Users,
    bg: "bg-red-100",
    text: "text-[#ef4b3f]",
  },
  {
    value: "2 Lakh+",
    label: "Devices Delivered",
    icon: Truck,
    bg: "bg-green-100",
    text: "text-green-600",
  },
  {
    value: "15%+",
    label: "Cost Saving",
    icon: IndianRupee,
    bg: "bg-orange-100",
    text: "text-orange-600",
  },
  {
    value: "100%",
    label: "Business Support",
    icon: ShieldCheck,
    bg: "bg-emerald-100",
    text: "text-emerald-600",
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-green-50 py-14">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-center gap-5 rounded-3xl border border-white bg-white/80 p-6 shadow-xl shadow-slate-200/70 backdrop-blur"
              >
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${item.bg} ${item.text}`}
                >
                  <Icon size={28} />
                </div>

                <div>
                  <h3 className="text-3xl font-black text-slate-950">
                    {item.value}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-500">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}