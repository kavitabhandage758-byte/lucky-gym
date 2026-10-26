import React, { useState, useEffect, useRef } from "react";
import { Star, MessageSquare, MapPin, Clock, ExternalLink } from "lucide-react";
import { GYM_DETAILS } from "../data/gymData";

export const TrustBar: React.FC = () => {
  const [ratingVal, setRatingVal] = useState(0);
  const [reviewsVal, setReviewsVal] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setRatingVal(4.9);
      setReviewsVal(129);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate rating from 0 to 4.9
          const duration = 1200;
          const startTime = performance.now();

          const animateNumbers = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setRatingVal(Number((easeOut * 4.9).toFixed(1)));
            setReviewsVal(Math.floor(easeOut * 129));

            if (progress < 1) {
              requestAnimationFrame(animateNumbers);
            } else {
              setRatingVal(4.9);
              setReviewsVal(129);
            }
          };

          requestAnimationFrame(animateNumbers);
        }
      },
      { threshold: 0.2 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={barRef} className="relative z-20 bg-[#121319] border-y border-[#262832]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {/* Stat 1: Google Rating */}
          <div className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-lg bg-[#1a1b23] border border-[#2e313e] flex items-center justify-center text-[#ff5500] group-hover:border-[#ff5500]/50 transition-colors">
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-heading text-3xl font-black text-white tracking-tight">
                  {ratingVal.toFixed(1)}
                </span>
                <span className="text-xs font-semibold text-neutral-400">/ 5.0</span>
              </div>
              <div className="text-xs text-neutral-400 font-medium">Google Rating</div>
            </div>
          </div>

          {/* Stat 2: Google Reviews */}
          <div className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-lg bg-[#1a1b23] border border-[#2e313e] flex items-center justify-center text-[#ff5500] group-hover:border-[#ff5500]/50 transition-colors">
              <MessageSquare className="w-6 h-6 text-[#ff5500]" />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-heading text-3xl font-black text-white tracking-tight">
                  {reviewsVal}
                </span>
                <span className="text-xs font-bold text-[#ff5500]">+</span>
              </div>
              <div className="text-xs text-neutral-400 font-medium">Google Reviews</div>
            </div>
          </div>

          {/* Stat 3: Verified Location */}
          <div className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-lg bg-[#1a1b23] border border-[#2e313e] flex items-center justify-center text-[#ff5500] group-hover:border-[#ff5500]/50 transition-colors">
              <MapPin className="w-6 h-6 text-[#ff5500]" />
            </div>
            <div>
              <div className="font-heading text-xl font-black text-white uppercase tracking-tight">
                Gajendragada
              </div>
              <div className="text-xs text-neutral-400 font-medium">Gadag Road, Karnataka</div>
            </div>
          </div>

          {/* Stat 4: Listed Hours */}
          <div className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-lg bg-[#1a1b23] border border-[#2e313e] flex items-center justify-center text-[#ff5500] group-hover:border-[#ff5500]/50 transition-colors">
              <Clock className="w-6 h-6 text-[#ff5500]" />
            </div>
            <div>
              <div className="font-heading text-xl font-black text-white uppercase tracking-tight flex items-center gap-1.5">
                <span>Open 24 Hours</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="text-[11px] text-neutral-400 font-medium">
                Confirm schedule with gym
              </div>
            </div>
          </div>
        </div>

        {/* Note on verified data */}
        <div className="mt-4 pt-3 border-t border-[#1e2029] flex flex-wrap items-center justify-between text-[11px] text-neutral-400">
          <span>* Ratings and reviews verified from public Google Business listings for Lucky Gym, Gajendragada.</span>
          <a
            href={GYM_DETAILS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#ff5500] hover:text-[#ff7722] font-semibold transition-colors mt-1 sm:mt-0"
          >
            <span>View on Google Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
