import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Membership from "@/components/Membership";
import Program from "@/components/Program";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div className=" lg:px-52 font-[family-name:var(--font-geist-sans)]">
      <Header />
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
