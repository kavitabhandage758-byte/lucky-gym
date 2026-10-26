import React from "react";
import { MessageSquare, ArrowDown, MapPin, Star, ShieldCheck, Flame } from "lucide-react";
import { GYM_DETAILS, getWhatsAppUrl } from "../data/gymData";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Image with Dark Industrial Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2000&q=85"
          alt="Lucky Gym Gajendragada - Industrial Fitness Training Environment"
          className="w-full h-full object-cover object-center filter brightness-40 contrast-125"
          loading="eager"
        />
        {/* Charcoal & Orange Ambient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-[#0d0e12]/80 to-[#0d0e12]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0e12] via-transparent to-[#0d0e12]/80" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#ff5500]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ff5500]/10 rounded-full blur-3xl pointer-events-none" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-industrial-grid opacity-30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Location & Verified Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#181a22]/90 border border-[#ff5500]/40 rounded-full mb-6 backdrop-blur-md shadow-lg">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5500] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff5500]" />
            </span>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-200">
              <MapPin className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>Gadag Road, Gajendragada</span>
            </div>
            <span className="text-neutral-600">|</span>
            <div className="flex items-center gap-1 text-xs font-bold text-amber-400">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>4.9 / 5</span>
              <span className="text-neutral-400 font-normal text-[11px]">(129 Reviews)</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.95] mb-6">
            BUILT BY EFFORT. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] via-[#ff7722] to-amber-400 text-glow-orange">
              POWERED BY YOU.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-neutral-300 font-medium max-w-2xl leading-relaxed mb-8">
            Take the next step in your fitness journey at <strong className="text-white font-semibold">Lucky Gym</strong>, Gajendragada. Heavy iron, dedicated conditioning, and a local community built on discipline.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#ff5500] hover:bg-[#ff6a1a] text-white text-base font-extrabold uppercase tracking-wider font-heading transition-all duration-200 shadow-[0_0_25px_rgba(255,85,0,0.45)] hover:shadow-[0_0_35px_rgba(255,85,0,0.6)] transform hover:-translate-y-0.5 rounded-sm"
            >
              <MessageSquare className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
              <span>JOIN US ON WHATSAPP</span>
            </a>

            <a
              href="#training"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#181a22]/80 hover:bg-[#22242e] text-white text-base font-bold uppercase tracking-wider font-heading border border-[#2e313d] hover:border-neutral-400 transition-all duration-200 rounded-sm"
            >
              <span>EXPLORE THE GYM</span>
              <ArrowDown className="w-4 h-4 text-[#ff5500]" />
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#262833]/80">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-[#ff5500]/15 border border-[#ff5500]/30 flex items-center justify-center">
                <Star className="w-4 h-4 text-[#ff5500] fill-[#ff5500]" />
              </div>
              <div>
                <div className="text-xs text-neutral-400 font-medium">Google Rating</div>
                <div className="text-sm font-bold text-white">4.9 / 5 (129 Reviews)</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-[#ff5500]/15 border border-[#ff5500]/30 flex items-center justify-center">
                <Flame className="w-4 h-4 text-[#ff5500]" />
              </div>
              <div>
                <div className="text-xs text-neutral-400 font-medium">Training Environment</div>
                <div className="text-sm font-bold text-white">Strength & Cardio</div>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-[#ff5500]/15 border border-[#ff5500]/30 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-[#ff5500]" />
              </div>
              <div>
                <div className="text-xs text-neutral-400 font-medium">Verified Location</div>
                <div className="text-sm font-bold text-white">Gadag Road, KA</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industrial Diagonal Edge Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff5500] to-transparent opacity-40" />
    </section>
  );
};
