"use client";

import { motion } from "framer-motion";
import {
  Building2,
  CalendarCheck,
  Laptop,
  Monitor,
  Server,
  Settings,
  UserPlus,
  Workflow,
} from "lucide-react";

const requirements = [
  { title: "Laptop Rental", icon: Laptop },
  { title: "Desktop Rental", icon: Monitor },
  { title: "Server Rental", icon: Server },
  { title: "Workstation Rental", icon: Settings },
  { title: "Bulk IT Rental", icon: Workflow },
  { title: "Corporate Leasing", icon: Building2 },
  { title: "Event IT Setup", icon: CalendarCheck },
  { title: "Customer Onboarding", icon: UserPlus },
];

export default function RequirementCards() {
  const selectRequirement = (requirement: string) => {
    const form = document.getElementById("enquiry");
    const select = document.getElementById(
      "requirementType"
    ) as HTMLSelectElement | null;

    if (select) {
      select.value = requirement;
    }

    form?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-bold text-blue-700">Quick Requirement</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            What Are You Looking For?
          </h2>
          <p className="mt-4 text-slate-600">
            Select your requirement and share a few details. Our team will help
            you with the right rental or onboarding solution.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {requirements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.button
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => selectRequirement(item.title)}
                className="group rounded-3xl border bg-slate-50 p-6 text-left shadow-sm transition hover:border-blue-600 hover:bg-blue-50 hover:shadow-xl"
              >
                <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                  <Icon size={26} />
                </div>

                <h3 className="text-lg font-black text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.title === "Customer Onboarding"
                    ? "Start your customer onboarding request with our team."
                    : "Get support for your business IT rental requirement."}
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}