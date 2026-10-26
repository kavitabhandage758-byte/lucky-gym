import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { FAQ_ITEMS, getWhatsAppUrl } from "../data/gymData";

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0d0e12] relative border-t border-[#22242e]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ff5500]/15 border border-[#ff5500]/30 text-[#ff5500] rounded-sm text-xs font-black uppercase tracking-wider font-heading mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            QUESTIONS & <span className="text-[#ff5500]">ANSWERS</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Everything you need to know about training, location, and contacting Lucky Gym in Gajendragada.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="bg-[#14151d] border border-[#262835] rounded-lg overflow-hidden transition-colors hover:border-[#ff5500]/40"
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#1e202b] flex items-center justify-center text-[#ff5500] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 bg-[#ff5500] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-[#1e202a] bg-[#111219]/60">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center p-6 bg-[#15161f] border border-[#262835] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading text-lg font-bold uppercase text-white">
              Have a question not listed here?
            </h4>
            <p className="text-xs text-neutral-400">
              Message us directly on WhatsApp for immediate assistance.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Hello Lucky Gym! I have a question regarding gym facilities and would like more details.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ff5500] hover:bg-[#ff6a1a] text-white text-xs font-black uppercase tracking-wider font-heading rounded transition-all shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
