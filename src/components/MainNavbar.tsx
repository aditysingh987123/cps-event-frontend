"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MainNavbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Brands", href: "#brands" },
    { label: "Customers", href: "#customers" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5">
        <Link href="/" className="flex items-center">
          {/* Mobile logo: static PNG for faster loading */}
          <Image
            src="/logo.png"
            alt="C Prompt Solutions Logo"
            width={210}
            height={70}
            priority
            className="h-12 w-auto object-contain sm:hidden"
          />

          {/* Desktop logo: animated GIF */}
          <Image
            src="/logo.gif"
            alt="C Prompt Solutions Logo"
            width={210}
            height={70}
            priority
            className="hidden h-14 w-auto object-contain sm:block"
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-bold text-slate-700 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative transition hover:text-[#ef4b3f]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#enquiry"
          className="hidden rounded-full bg-gradient-to-r from-[#ef4b3f] to-orange-500 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-red-500/20 transition hover:-translate-y-1 hover:shadow-red-500/30 md:inline-flex"
        >
          Request Support
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-2xl border border-slate-200 bg-white p-2 text-slate-700 shadow-sm md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 shadow-xl md:hidden">
          <div className="flex flex-col gap-3 text-sm font-bold text-slate-700">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 transition hover:bg-red-50 hover:text-[#ef4b3f]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#enquiry"
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-gradient-to-r from-[#ef4b3f] to-orange-500 px-4 py-3 text-center font-bold text-white"
            >
              Request Support
            </a>
          </div>
        </div>
      )}
    </header>
  );
}