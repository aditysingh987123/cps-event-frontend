import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-xl font-bold text-blue-700">
          C Prompt Solutions
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <a href="#services" className="hover:text-blue-700">Services</a>
          <a href="#brands" className="hover:text-blue-700">Brands</a>
          <a href="#customers" className="hover:text-blue-700">Customers</a>
          <a href="#faq" className="hover:text-blue-700">FAQ</a>
        </nav>

        <a
          href="#enquiry"
          className="rounded-full bg-blue-700 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-blue-800"
        >
          Request Quote
        </a>
      </div>
    </header>
  );
}