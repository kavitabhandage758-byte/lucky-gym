import React from "react";
import { CheckCircle2, MessageSquare, ArrowRight, Target, Users, Zap, Shield } from "lucide-react";
import { GYM_DETAILS, getWhatsAppUrl } from "../data/gymData";

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: "Focused Workout Environment",
      description: "No distractions, no fluff. Just heavy iron, essential resistance machines, and an environment engineered to help you stay committed.",
    },
    {
      icon: Users,
      title: "Welcoming Gajendragada Community",
      description: "From individuals lifting for the very first time to passionate strength athletes, everyone respects hard work and consistency.",
    },
    {
      icon: Zap,
      title: "Comprehensive Equipment",
      description: "Free weights, dumbbells, Olympic barbells, plate-loaded stations, and cardio machines designed to challenge all fitness levels.",
    },
    {
      icon: Shield,
      title: "Direct Owner & Trainer Support",
      description: "Have questions about getting started? Speak directly with the gym team on WhatsApp to confirm workout schedules and guidance.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0d0e12] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 -right-40 w-80 h-80 bg-[#ff5500]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Main Photo */}
              <div className="relative rounded-lg overflow-hidden border border-[#262833] shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80"
                  alt="Training Atmosphere at Lucky Gym Gajendragada"
                  className="w-full h-[460px] object-cover filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent opacity-80" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#14151c]/95 border border-[#2f313d] rounded-md backdrop-blur-md">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#ff5500] uppercase tracking-wider mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
                    <span>Local Fitness Destination</span>
                  </div>
                  <p className="text-xs text-neutral-300 font-medium leading-relaxed">
                    Conveniently situated on Gadag Road, Gajendragada. Built for locals committed to self-improvement.
                  </p>
                </div>
              </div>

              {/* Decorative industrial corner bracket */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#ff5500] pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#ff5500] pointer-events-none" />
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ff5500]/15 border border-[#ff5500]/30 text-[#ff5500] rounded-sm text-xs font-black uppercase tracking-wider font-heading mb-4">
              <span>About Lucky Gym</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-[1.02]">
              YOUR FITNESS JOURNEY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] to-amber-400">
                STARTS HERE
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-6">
              Welcome to <strong className="text-white font-semibold">Lucky Gym</strong>, Gajendragada’s dedicated strength and conditioning space. Located conveniently on Gadag Road, Lucky Gym provides the equipment, motivation, and supportive environment you need to build daily discipline and improve your overall physical fitness.
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed mb-8">
              Whether your goal is lifting heavier, shedding excess weight, or establishing a reliable daily workout habit, our doors are open to help you succeed. Connect with us on WhatsApp or drop by to check out the space in person.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 bg-[#14151b] border border-[#22242e] rounded-md hover:border-[#ff5500]/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded bg-[#ff5500]/15 flex items-center justify-center text-[#ff5500]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="font-heading text-base font-bold uppercase text-white tracking-wide">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Direct Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppUrl("Hello Lucky Gym! I would like to know more about the gym facilities and membership registration.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#ff5500] hover:bg-[#ff6a1a] text-white font-black text-sm uppercase tracking-wider font-heading rounded-sm transition-all shadow-[0_0_20px_rgba(255,85,0,0.35)]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire About Membership</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${GYM_DETAILS.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#171820] hover:bg-[#20222a] text-neutral-200 border border-[#2d2f3c] text-sm font-semibold rounded-sm transition-colors"
              >
                <span>Call {GYM_DETAILS.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
