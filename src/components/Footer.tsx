import Image from "next/image";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/logo.png"
              alt="C Prompt Solutions Logo"
              width={230}
              height={80}
              className="h-16 w-auto rounded-lg bg-white p-2 object-contain"
            />

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Simplifying IT rentals & leasing for businesses. Reliable
              hardware. Affordable pricing. Hassle-free support.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white">Quick Links</h4>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
              <a href="#" className="transition hover:text-[#ef4b3f]">
                Home
              </a>
              <a href="#services" className="transition hover:text-[#ef4b3f]">
                Services
              </a>
              <a href="#brands" className="transition hover:text-[#ef4b3f]">
                Brands
              </a>
              <a href="#enquiry" className="transition hover:text-[#ef4b3f]">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white">Contact Info</h4>

            <div className="mt-5 space-y-4 text-sm text-slate-400">
              <div className="flex gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-[#ef4b3f]" />
                <p className="leading-7">
                  3rd Floor, 2-4-438 Baldwa Edifice, Ramgopalpet, Off MG Road,
                  Lane Beside KFC, Secunderabad – 500003, Telangana
                </p>
              </div>

              <a
                href="tel:+919246172100"
                className="flex items-center gap-3 transition hover:text-[#ef4b3f]"
              >
                <Phone size={18} className="text-[#ef4b3f]" />
                +91 92461 72100
              </a>

              <a
                href="mailto:sales@cpromptsolutions.in"
                className="flex items-center gap-3 transition hover:text-[#ef4b3f]"
              >
                <Mail size={18} className="text-[#ef4b3f]" />
                sales@cpromptsolutions.in
              </a>

              {/* <a
                href="https://wa.me/919246172100?text=Hi,%20I%20am%20interested%20in%20IT%20rental%20and%20leasing%20support."
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-green-700"
              >
                <MessageCircle size={18} />
                WhatsApp Chat
              </a> */}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white">Follow Us</h4>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Connect with us for IT rental updates, business solutions, and
              event support.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white transition hover:bg-[#ef4b3f]"
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white transition hover:bg-[#ef4b3f]"
                aria-label="Instagram"
              >
                IG
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white transition hover:bg-[#ef4b3f]"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} C Prompt Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}