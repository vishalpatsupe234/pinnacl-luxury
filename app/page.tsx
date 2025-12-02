// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropertySearch from "@/components/PropertySearch";
import FeaturedProperties from "@/components/FeaturedProperties";
import WhyPinnaclProperties from "@/components/WhyPinnaclProperties";
import AboutPinnacl from "@/components/AboutPinnacl";
import Collaboration from "@/components/Collaboration";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingAction from "@/components/FloatingAction";

export default function Home() {
  return (
    // Navbar ke "Home" link ke liye
    <main
      id="home"
      className="min-h-screen bg-[var(--color-brand-bg)] text-[var(--color-brand-black)]"
    >
      <Navbar />
      <Hero />

      {/* Hero ke just neeche search bar block */}
      <PropertySearch />

      <FeaturedProperties />
      <WhyPinnaclProperties />
      <AboutPinnacl />
      <Collaboration />
      <Testimonials />
      <CTA />

      {/* Floating WhatsApp / chat button */}
      <FloatingAction />

      <Footer />
    </main>
  );
}
