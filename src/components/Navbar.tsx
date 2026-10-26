import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Dumbbell, MessageSquare, ArrowUpRight } from "lucide-react";
import { GYM_DETAILS, getWhatsAppUrl } from "../data/gymData";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Training", href: "#training" },
    { label: "BMI Calculator", href: "#bmi-calculator" },
    { label: "Reviews", href: "#reviews" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0d0e12]/95 backdrop-blur-md border-b border-[#262832] py-3 shadow-2xl"
          : "bg-gradient-to-b from-[#0d0e12]/90 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[#ff5500] flex items-center justify-center transform -skew-x-6 text-[#0d0e12] font-black group-hover:scale-105 transition-transform duration-200 shadow-[0_0_15px_rgba(255,85,0,0.5)]">
              <Dumbbell className="w-6 h-6 transform skew-x-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-black tracking-wider text-white uppercase flex items-center gap-1.5 leading-none">
                LUCKY <span className="text-[#ff5500]">GYM</span>
              </span>
              <span className="text-[10px] tracking-widest text-neutral-400 font-semibold uppercase">
                Gajendragada
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#14151b]/80 border border-[#262832] px-4 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white hover:bg-[#20222a] rounded-full transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${GYM_DETAILS.phone}`}
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-neutral-300 hover:text-white border border-[#272933] hover:border-neutral-500 rounded-md transition-colors"
              title="Call Lucky Gym"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>{GYM_DETAILS.phoneFormatted}</span>
            </a>

            <a
              href={getWhatsAppUrl("Hello Lucky Gym! I would like to join the gym. Please share membership details.")}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-wider bg-[#ff5500] hover:bg-[#ff6a1a] text-white transition-all transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(255,85,0,0.4)] clip-diagonal-badge font-heading"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Join Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${GYM_DETAILS.phone}`}
              className="p-2 text-neutral-300 hover:text-white bg-[#1a1b22] border border-[#272933] rounded-md"
              aria-label="Call Gym"
            >
              <Phone className="w-4 h-4 text-[#ff5500]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white bg-[#1a1b22] border border-[#272933] rounded-md focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#ff5500]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0e12]/98 border-b border-[#262832] px-6 py-6 mt-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 text-sm font-semibold uppercase tracking-wider text-neutral-300 hover:text-[#ff5500] hover:bg-[#181921] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-5 mt-4 border-t border-[#22242d] flex flex-col gap-3">
            <a
              href={`tel:${GYM_DETAILS.phone}`}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-neutral-200 bg-[#16171e] border border-[#2b2d38] rounded-md"
            >
              <Phone className="w-4 h-4 text-[#ff5500]" />
              <span>Call {GYM_DETAILS.phoneFormatted}</span>
            </a>

            <a
              href={getWhatsAppUrl("Hello Lucky Gym! I would like to join the gym. Please share membership details.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-black uppercase tracking-wider bg-[#ff5500] text-white rounded-md font-heading shadow-[0_0_15px_rgba(255,85,0,0.4)]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Join Us on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
