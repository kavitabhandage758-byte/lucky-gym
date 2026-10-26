import React from "react";
import { Dumbbell, Activity, Check, MessageSquare, AlertCircle, Sparkles } from "lucide-react";
import { TRAINING_PROGRAMS, getWhatsAppUrl } from "../data/gymData";

export const Training: React.FC = () => {
  return (
    <section id="training" className="py-24 bg-[#111218] relative border-t border-[#22242e]">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-industrial-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ff5500]/15 border border-[#ff5500]/30 text-[#ff5500] rounded-sm text-xs font-black uppercase tracking-wider font-heading mb-4">
            <Dumbbell className="w-3.5 h-3.5" />
            <span>Training & Programmes</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4 leading-[1.05]">
            MAKE EVERY WORKOUT <span className="text-[#ff5500]">COUNT</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-4">
            Whether your focus is pushing heavy iron, toning muscle, or boosting overall stamina, Lucky Gym provides the essential training equipment to challenge your limits.
          </p>

          {/* Explicit Rule Banner */}
          <div className="inline-flex items-center gap-2.5 p-3.5 bg-[#181a22] border-l-4 border-[#ff5500] rounded-r-md text-xs text-neutral-300">
            <AlertCircle className="w-4 h-4 text-[#ff5500] shrink-0" />
            <span>
              <strong>Note:</strong> Training formats, trainer availability, and specialized schedules vary. Please confirm exact training programmes with the gym owner on WhatsApp.
            </span>
          </div>
        </div>

        {/* Training Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINING_PROGRAMS.map((program, index) => (
            <div
              key={program.id}
              className="bg-[#14151c] border border-[#262833] rounded-lg p-6 flex flex-col justify-between hover:border-[#ff5500]/60 hover:shadow-[0_0_25px_rgba(255,85,0,0.15)] transition-all duration-300 group relative"
            >
              {/* Card number badge */}
              <div className="absolute top-4 right-4 text-2xl font-black font-heading text-[#272935] group-hover:text-[#ff5500]/30 transition-colors">
                0{index + 1}
              </div>

              <div>
                <div className="w-10 h-10 rounded bg-[#ff5500]/15 border border-[#ff5500]/30 flex items-center justify-center text-[#ff5500] mb-4 group-hover:scale-105 transition-transform">
                  <Activity className="w-5 h-5" />
                </div>

                <div className="text-[11px] font-bold text-[#ff5500] uppercase tracking-wider mb-1">
                  {program.subtitle}
                </div>

                <h3 className="font-heading text-xl font-bold uppercase text-white tracking-wide mb-3 leading-snug">
                  {program.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {program.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6 pt-4 border-t border-[#20222c]">
                  <div className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider">
                    Key Elements:
                  </div>
                  {program.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-[#ff5500] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Focus Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {program.equipmentFocus.map((eq) => (
                    <span
                      key={eq}
                      className="text-[10px] px-2 py-0.5 bg-[#1b1c24] border border-[#2d2f3c] text-neutral-400 rounded"
                    >
                      {eq}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href={getWhatsAppUrl(program.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-[#1a1b24] hover:bg-[#ff5500] text-neutral-200 hover:text-white border border-[#2d2f3d] hover:border-[#ff5500] rounded text-xs font-bold uppercase tracking-wider font-heading transition-all duration-200 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 bg-gradient-to-r from-[#181922] via-[#1a1b26] to-[#181922] border border-[#2b2d3a] rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#ff5500]/20 flex items-center justify-center text-[#ff5500] shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold uppercase text-white">
                Looking for a custom workout plan?
              </h4>
              <p className="text-xs text-neutral-400">
                Talk to the gym owner directly to align on equipment availability and session slots.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl("Hello Lucky Gym! I would like to consult with you about setting up a custom workout schedule.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff5500] hover:bg-[#ff6a1a] text-white text-xs font-black uppercase tracking-wider font-heading rounded transition-all shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
