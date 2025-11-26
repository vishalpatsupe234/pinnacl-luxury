// app/page.tsx
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import FeaturedProperties from "@/components/FeaturedProperties";
import WhyPinnaclProperties from "@/components/WhyPinnaclProperties";
import AboutPinnacl from "@/components/AboutPinnacl";
import Collaboration from "@/components/Collaboration";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-brand-black text-white" id="home">
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <WhyPinnaclProperties />
      <AboutPinnacl />
      <Collaboration />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}