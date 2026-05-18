"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarCheck,
  Laptop,
  Monitor,
  Server,
  Settings,
  Users,
  Workflow,
} from "lucide-react";

const services = [
  {
    title: "Laptop Rental",
    desc: "Business-grade laptops for teams, events, training, and onboarding.",
    icon: Laptop,
    color: "bg-blue-600",
  },
  {
    title: "Desktop Rental",
    desc: "Reliable desktops for offices, BPOs, and temporary workspaces.",
    icon: Monitor,
    color: "bg-green-600",
  },
  {
    title: "Server Rental",
    desc: "Server support for testing, temporary projects, and business needs.",
    icon: Server,
    color: "bg-indigo-600",
  },
  {
    title: "Workstation Rental",
    desc: "High-performance systems for technical and creative teams.",
    icon: Settings,
    color: "bg-orange-600",
  },
  {
    title: "Bulk IT Rental",
    desc: "Bulk laptops and desktops for training, rollout, and events.",
    icon: Workflow,
    color: "bg-amber-500",
  },
  {
    title: "Corporate Leasing",
    desc: "Flexible long-term leasing plans for growing businesses.",
    icon: BriefcaseBusiness,
    color: "bg-slate-800",
  },
  {
    title: "Event IT Setup",
    desc: "Temporary IT setup for conferences, exhibitions, and workshops.",
    icon: CalendarCheck,
    color: "bg-[#ef4b3f]",
  },
  {
    title: "Customer Onboarding",
    desc: "Support for new customers who want to start with our rental solutions.",
    icon: Users,
    color: "bg-sky-600",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-16 sm:py-20"
    >
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-red-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-black text-[#ef4b3f]">Services We Offer</p>

          <h2 className="mt-2 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Complete Business IT Rental Solutions
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Premium rental and leasing support for corporates, events, training,
            onboarding, and growing business teams.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/70 transition"
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${service.color} text-white shadow-lg transition group-hover:scale-110`}
                >
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-black text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}