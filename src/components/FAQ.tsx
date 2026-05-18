"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Do you provide laptops and desktops on rent?",
    a: "Yes, we provide laptops, desktops, servers, workstations, and IT equipment for business rental and leasing needs.",
  },
  {
    q: "Which laptop brands are available?",
    a: "We provide Dell, HP, Apple, and Lenovo laptops based on availability and requirement.",
  },
  {
    q: "Can I request bulk devices for events or training?",
    a: "Yes. We support bulk device requirements for events, training programs, onboarding, conferences, and project teams.",
  },
  {
    q: "Can you help with customer onboarding?",
    a: "Yes. You can submit a customer onboarding request and our team will contact you for the next steps.",
  },
  {
    q: "Do you provide GST invoices?",
    a: "Yes. Corporate billing and GST invoice support can be provided as per business requirements.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white py-16 sm:py-20"
    >
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-100 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-100 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5">
        <div className="text-center">
          <p className="font-black text-[#ef4b3f]">FAQ</p>

          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Questions Customers Usually Ask
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <motion.details
              key={faq.q}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group rounded-[2rem] border border-slate-100 bg-white p-5 shadow-xl shadow-slate-200/70"
            >
              <summary className="flex cursor-pointer list-none items-center gap-3 font-black text-slate-950">
                <HelpCircle size={22} className="text-[#ef4b3f]" />
                {faq.q}
              </summary>

              <p className="mt-4 leading-7 text-slate-600">{faq.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}