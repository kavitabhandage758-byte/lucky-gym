import React from "react";
import { Dumbbell, Phone, MapPin, MessageSquare, ArrowUp, Clock, Navigation } from "lucide-react";
import { GYM_DETAILS, getWhatsAppUrl } from "../data/gymData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#090a0d] border-t border-[#1e2029] text-neutral-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-[#ff5500] flex items-center justify-center transform -skew-x-6 text-[#0d0e12] font-black">
                <Dumbbell className="w-5 h-5 transform skew-x-6 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-black tracking-wider text-white uppercase leading-none">
                  LUCKY <span className="text-[#ff5500]">GYM</span>
                </span>
                <span className="text-[10px] tracking-widest text-neutral-400 font-semibold uppercase">
                  Gajendragada, Karnataka
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              BUILT BY EFFORT. POWERED BY YOU. Your local strength, cardio, and fitness training destination on Gadag Road in Gajendragada.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="px-2.5 py-1 bg-[#161720] border border-[#2b2d39] text-[#ff5500] text-[11px] font-bold rounded">
                ★ 4.9 / 5.0 Google Rating
              </span>
              <span className="px-2.5 py-1 bg-[#161720] border border-[#2b2d39] text-neutral-300 text-[11px] font-bold rounded">
                129 Reviews
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-base font-bold uppercase text-white tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-[#ff5500] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#ff5500] transition-colors">
                  About Lucky Gym
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-[#ff5500] transition-colors">
                  Training & Programmes
                </a>
              </li>
              <li>
                <a href="#bmi-calculator" className="hover:text-[#ff5500] transition-colors">
                  BMI Calculator
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#ff5500] transition-colors">
                  Google Reviews (4.9★)
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#ff5500] transition-colors">
                  Inside The Gym (Gallery)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#ff5500] transition-colors">
                  Contact & Directions
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#ff5500] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Business NAP & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading text-base font-bold uppercase text-white tracking-wider">
              Business Location & Hours
            </h4>

            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                <span>{GYM_DETAILS.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ff5500] shrink-0" />
                <a href={`tel:${GYM_DETAILS.phone}`} className="hover:text-white transition-colors">
                  {GYM_DETAILS.phoneFormatted} ({GYM_DETAILS.phone})
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#ff5500] shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff5500] transition-colors font-medium"
                >
                  WhatsApp: +91 72043 26236
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold">Open 24 Hours</span>
                  <span className="block text-neutral-400 text-[11px]">
                    (Confirm schedule with the owner before visiting)
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={GYM_DETAILS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#ff5500] hover:text-[#ff7722] font-semibold"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>View Google Maps Route</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#181a22] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-neutral-400">
            © {new Date().getFullYear()} Lucky Gym, Gajendragada. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#14151e] hover:bg-[#1f212c] text-neutral-300 hover:text-white rounded border border-[#252735] transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#ff5500]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
