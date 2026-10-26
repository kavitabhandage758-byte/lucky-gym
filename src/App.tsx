import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { About } from "./components/About";
import { Training } from "./components/Training";
import { BmiCalculator } from "./components/BmiCalculator";
import { Reviews } from "./components/Reviews";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0e12] text-[#f4f4f6] font-sans selection:bg-[#ff5500] selection:text-white flex flex-col">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <About />
        <Training />
        <BmiCalculator />
        <Reviews />
        <Gallery />
        <Contact />
        <Faq />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
