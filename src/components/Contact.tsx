import React, { useState } from "react";
import { Phone, MessageSquare, MapPin, Clock, Navigation, Check, Copy, Send, Sparkles } from "lucide-react";
import { GYM_DETAILS, getWhatsAppUrl } from "../data/gymData";

export const Contact: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("membership");
  const [preferredTime, setPreferredTime] = useState("morning");
  const [customName, setCustomName] = useState("");

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(GYM_DETAILS.address);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2500);
    } catch {
      // Fallback
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2500);
    }
  };

  const getCustomizedWhatsAppMessage = () => {
    const greeting = customName.trim() ? `Hello Lucky Gym! My name is ${customName.trim()}.` : "Hello Lucky Gym!";
    let topicText = "";
    if (selectedTopic === "membership") {
      topicText = "I would like to enquire about membership plans, prices, and registration.";
    } else if (selectedTopic === "timings") {
      topicText = `I would like to confirm your gym timings and workout slots (preferring ${preferredTime} training).`;
    } else if (selectedTopic === "coaching") {
      topicText = "I would like to enquire about beginner guidance, workout routines, and coaching availability.";
    } else {
      topicText = "I visited your website and would like to schedule a visit to inspect the gym facilities.";
    }
    return `${greeting} ${topicText}`;
  };

  const handleCustomWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const message = getCustomizedWhatsAppMessage();
    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-24 bg-[#111218] relative border-t border-[#22242e] overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-industrial-grid opacity-25 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff5500]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ff5500]/15 border border-[#ff5500]/30 text-[#ff5500] rounded-sm text-xs font-black uppercase tracking-wider font-heading mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect & Visit</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4">
            READY TO <span className="text-[#ff5500]">GET STARTED?</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Reach out directly to Lucky Gym in Gajendragada. Enquire about membership, drop by on Gadag Road, or send us a quick WhatsApp message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact & Location Info */}
          <div className="lg:col-span-6 space-y-6">
            {/* Phone Card */}
            <div className="p-6 bg-[#161720] border border-[#262835] rounded-xl hover:border-[#ff5500]/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#ff5500]/15 border border-[#ff5500]/30 flex items-center justify-center text-[#ff5500] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    Call Direct
                  </span>
                  <a
                    href={`tel:${GYM_DETAILS.phone}`}
                    className="font-heading text-2xl sm:text-3xl font-black text-white hover:text-[#ff5500] transition-colors block mb-1"
                  >
                    {GYM_DETAILS.phoneFormatted}
                  </a>
                  <p className="text-xs text-neutral-400 mb-3">
                    Tap to dial directly from your smartphone.
                  </p>
                  <a
                    href={`tel:${GYM_DETAILS.phone}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1e202b] hover:bg-[#252836] text-neutral-200 text-xs font-semibold rounded border border-[#2e313f] transition-colors"
                  >
                    <Phone className="w-3 h-3 text-[#ff5500]" />
                    <span>Call Now ({GYM_DETAILS.phone})</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Address & Google Maps Card */}
            <div className="p-6 bg-[#161720] border border-[#262835] rounded-xl hover:border-[#ff5500]/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#ff5500]/15 border border-[#ff5500]/30 flex items-center justify-center text-[#ff5500] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    Location & Directions
                  </span>
                  <h3 className="font-heading text-xl font-bold uppercase text-white mb-2">
                    Lucky Gym Gajendragada
                  </h3>
                  <p className="text-sm text-neutral-300 font-medium mb-1">
                    {GYM_DETAILS.address}
                  </p>
                  <p className="text-xs text-neutral-400 mb-4">
                    Plus Code: <span className="text-neutral-300 font-mono">{GYM_DETAILS.plusCode}</span> • Gadag Road
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={GYM_DETAILS.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff5500] hover:bg-[#ff6a1a] text-white text-xs font-black uppercase tracking-wider font-heading rounded transition-all shadow-[0_0_15px_rgba(255,85,0,0.3)]"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Directions on Google Maps</span>
                    </a>

                    <button
                      type="button"
                      onClick={copyAddress}
                      className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#1e202b] hover:bg-[#252836] text-neutral-300 hover:text-white text-xs font-semibold rounded border border-[#2e313f] transition-colors"
                    >
                      {copiedAddress ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Address Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-6 bg-[#161720] border border-[#262835] rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#ff5500]/15 border border-[#ff5500]/30 flex items-center justify-center text-[#ff5500] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    Operating Schedule
                  </span>
                  <div className="font-heading text-2xl font-black text-white mb-1 flex items-center gap-2">
                    <span>Listed Open 24 Hours</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      Active
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Public listing shows 24 hours. Because specific staff attendance, cleaning breaks, or personal coaching slots may vary, please verify the exact current schedule with the owner via WhatsApp before your visit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom WhatsApp Enquiry Builder */}
          <div className="lg:col-span-6 bg-[#161722] border border-[#2b2d3c] rounded-xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5500] animate-pulse" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#ff5500] font-heading">
                Instant WhatsApp Enquiry
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white mb-2">
              CHAT WITH LUCKY GYM
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6">
              Select your inquiry details below. We'll pre-format your WhatsApp message so you get quick, accurate answers from the team.
            </p>

            <form onSubmit={handleCustomWhatsAppSend} className="space-y-5">
              {/* Name (Optional) */}
              <div>
                <label htmlFor="custom-name" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Your Name (Optional)
                </label>
                <input
                  id="custom-name"
                  type="text"
                  placeholder="e.g. Ramesh / Vijay"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0e0f14] border border-[#2b2d3a] focus:border-[#ff5500] focus:outline-none rounded text-white text-sm"
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  What would you like to enquire about?
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: "membership", label: "Membership Fees & Plans" },
                    { id: "timings", label: "Gym Timings & Slots" },
                    { id: "coaching", label: "Beginner Guidance & Form" },
                    { id: "visit", label: "First-Time Gym Visit" },
                  ].map((topic) => (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setSelectedTopic(topic.id)}
                      className={`p-3 text-left rounded border text-xs font-semibold transition-all ${
                        selectedTopic === topic.id
                          ? "bg-[#ff5500]/20 border-[#ff5500] text-white shadow-[0_0_10px_rgba(255,85,0,0.2)]"
                          : "bg-[#0e0f14] border-[#292b37] text-neutral-400 hover:text-white"
                      }`}
                    >
                      {topic.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preferred Slot (if relevant) */}
              {selectedTopic === "timings" && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Preferred Workout Time
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setPreferredTime("morning")}
                      className={`p-2.5 rounded border text-xs font-semibold transition-colors ${
                        preferredTime === "morning"
                          ? "bg-[#ff5500] border-[#ff5500] text-white"
                          : "bg-[#0e0f14] border-[#292b37] text-neutral-400"
                      }`}
                    >
                      Morning (5:30 AM - 10:00 AM)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreferredTime("evening")}
                      className={`p-2.5 rounded border text-xs font-semibold transition-colors ${
                        preferredTime === "evening"
                          ? "bg-[#ff5500] border-[#ff5500] text-white"
                          : "bg-[#0e0f14] border-[#292b37] text-neutral-400"
                      }`}
                    >
                      Evening (4:30 PM - 10:00 PM)
                    </button>
                  </div>
                </div>
              )}

              {/* Live Preview Box */}
              <div className="p-3.5 bg-[#0e0f14] rounded border border-[#242633] text-xs">
                <span className="text-neutral-400 text-[11px] uppercase tracking-wider font-bold block mb-1">
                  Message Preview:
                </span>
                <p className="text-neutral-200 italic font-mono text-[11px] leading-relaxed">
                  "{getCustomizedWhatsAppMessage()}"
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-[#ff5500] hover:bg-[#ff6a1a] text-white text-sm font-black uppercase tracking-wider font-heading rounded-md transition-all shadow-[0_0_20px_rgba(255,85,0,0.4)] transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Open WhatsApp Chat Now</span>
              </button>

              <div className="text-center text-[11px] text-neutral-400">
                Official WhatsApp: <strong className="text-neutral-300">+91 72043 26236</strong> • Replies typically within business hours
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
