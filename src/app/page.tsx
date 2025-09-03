import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Membership from "@/components/Membership";
import Program from "@/components/Program";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import Head from "next/head";

export default function Home() {
  return (
    <div className="  font-[family-name:var(--font-geist-sans)]">
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          rel="stylesheet"
        />
      </Head>
      <HeroSection />
      <AboutUs />
      <Program />
      <WhyUs />
      <Membership />
      <Testimonials />
    </div>
  );
}
