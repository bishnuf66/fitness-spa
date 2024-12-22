import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Membership from "@/components/Membership";
import Program from "@/components/Program";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div className="  font-[family-name:var(--font-geist-sans)]">
      <HeroSection />
      <AboutUs />
      <Program />
      <WhyUs />
      <Membership />
      <Testimonials />
      <Footer />
    </div>
  );
}
