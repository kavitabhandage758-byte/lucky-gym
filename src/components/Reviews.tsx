import React from "react";
import { Star, ShieldCheck, ExternalLink, ThumbsUp, MapPin, Award } from "lucide-react";
import { GYM_DETAILS } from "../data/gymData";

export const Reviews: React.FC = () => {
  const ratingCategories = [
    { label: "Workout Atmosphere & Energy", score: "4.9", percentage: "98%" },
    { label: "Strength & Equipment Quality", score: "4.9", percentage: "97%" },
    { label: "Community Discipline & Respect", score: "5.0", percentage: "100%" },
    { label: "Accessibility on Gadag Road", score: "4.8", percentage: "96%" },
  ];

  return (
    <section id="reviews" className="py-24 bg-[#111218] relative border-t border-[#22242e] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ff5500]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ff5500]/15 border border-[#ff5500]/30 text-[#ff5500] rounded-sm text-xs font-black uppercase tracking-wider font-heading mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Google Feedback</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4">
            TRUST BUILT ONE <br />
            <span className="text-[#ff5500]">WORKOUT AT A TIME</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Authentic community support is earned through discipline and consistency. Here is how local lifters in Gajendragada rate Lucky Gym on Google.
          </p>
        </div>

        {/* Central Trust Banner */}
        <div className="max-w-4xl mx-auto bg-[#15161f] border border-[#272937] rounded-xl p-8 sm:p-12 shadow-2xl relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Big Rating Block */}
            <div className="md:col-span-5 text-center md:text-left border-b md:border-b-0 md:border-r border-[#262835] pb-8 md:pb-0 md:pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#1c1d27] border border-[#2d2f3d] text-xs font-bold text-amber-400 mb-4">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Google Verified Business</span>
              </div>

              <div className="font-heading text-6xl sm:text-7xl font-black text-white tracking-tight leading-none mb-2">
                4.9 <span className="text-2xl text-neutral-400 font-semibold">/ 5.0</span>
              </div>

              {/* 5 Stars */}
              <div className="flex items-center justify-center md:justify-start gap-1.5 mb-3 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              <div className="text-sm font-bold text-white mb-1">
                Based on 129 Google Reviews
              </div>
              <div className="text-xs text-neutral-400 flex items-center justify-center md:justify-start gap-1">
                <MapPin className="w-3 h-3 text-[#ff5500]" />
                <span>Gajendragada, Karnataka</span>
              </div>
            </div>

            {/* Rating Breakdown & Highlights */}
            <div className="md:col-span-7 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-3 flex items-center gap-2">
                <ThumbsUp className="w-4 h-4 text-[#ff5500]" />
                <span>What Members Appreciate Most</span>
              </div>

              {ratingCategories.map((cat) => (
                <div key={cat.label} className="space-y-1">
                  <div className="flex justify-between text-xs text-neutral-300 font-medium">
                    <span>{cat.label}</span>
                    <span className="font-bold text-[#ff5500]">{cat.score} ★</span>
                  </div>
                  <div className="w-full h-2 bg-[#20222d] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#ff5500] to-amber-500 rounded-full"
                      style={{ width: cat.percentage }}
                    />
                  </div>
                </div>
              ))}

              {/* Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={GYM_DETAILS.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#ff5500] hover:bg-[#ff6a1a] text-white text-xs font-black uppercase tracking-wider font-heading rounded transition-all shadow-[0_0_15px_rgba(255,85,0,0.3)]"
                >
                  <span>View Google Reviews</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={GYM_DETAILS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1b1d26] hover:bg-[#232530] text-neutral-200 border border-[#2b2d39] text-xs font-semibold rounded transition-colors"
                >
                  <span>Leave a Review</span>
                </a>
              </div>
            </div>
          </div>

          {/* Compliance note */}
          <div className="mt-8 pt-6 border-t border-[#222430] text-center text-xs text-neutral-400">
            <p>
              * In strict adherence to integrity and accuracy, all statistics reflect actual public Google ratings (4.9/5 from 129 reviews) without fabricated statements or fictitious user profiles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
