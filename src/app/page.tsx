import MainNavbar from "@/components/MainNavbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import TrustedBy from "@/components/TrustedBy";
import Brands from "@/components/Brands";
import RequirementCards from "@/components/RequirementCards";
import Services from "@/components/Services";
import SavingsSection from "@/components/SavingsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import EnquiryForm from "@/components/EnquiryForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <MainNavbar />
      <div className="color-strip" />
      <Hero />
      <StatsSection />
      <TrustedBy />
      <Brands />
      <RequirementCards />
      <Services />
      <SavingsSection />
      <WhyChooseUs />
      <FAQ />
      <EnquiryForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}