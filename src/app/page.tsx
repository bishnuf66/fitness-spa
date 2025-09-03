"use client";
import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Membership from "@/components/Membership";
import Program from "@/components/Program";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import Head from "next/head";

export default function Home() {
  // Handle hash-based scrolling when navigating from other pages
  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        const elementId = window.location.hash.substring(1);
        if (!elementId) return;

        // Small delay to ensure the page is fully loaded
        const timer = setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            // Update URL without adding to history
            window.history.replaceState({}, "", window.location.pathname);
          }
        }, 100);

        return () => clearTimeout(timer);
      }
    };

    // Handle initial load
    handleHash();

    // Handle back/forward navigation
    window.addEventListener("popstate", handleHash);
    return () => window.removeEventListener("popstate", handleHash);
  }, []);

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
