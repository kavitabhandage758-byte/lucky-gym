import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { GYM_DETAILS, getWhatsAppUrl } from "../data/gymData";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip bubble (can be dismissed) */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 bg-[#181922] text-white text-xs font-medium rounded-lg shadow-2xl border border-[#2e303d] animate-in fade-in slide-in-from-right-2">
          <span>Chat with <strong className="text-[#ff5500]">Lucky Gym</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white p-0.5 rounded transition-colors"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Lucky Gym on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-[0_4px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] transform hover:scale-105 active:scale-95 transition-all duration-200"
      >
        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          width="30"
          height="30"
          fill="currentColor"
          className="transition-transform group-hover:scale-110"
        >
          <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.767.461 3.49 1.336 5.006L2 22l5.09-1.334A9.99 9.99 0 0 0 12.031 22c5.536 0 10.031-4.495 10.031-10.031C22.062 6.495 17.567 2 12.031 2zm5.836 14.199c-.244.688-1.42 1.319-1.954 1.398-.535.078-1.218.113-1.97-.132a13.376 13.376 0 0 1-5.07-3.07 13.564 13.564 0 0 1-3.069-5.071c-.245-.752-.21-1.435-.132-1.97.079-.534.71-1.71 1.398-1.954.218-.078.437-.035.592.078l1.642 3.96c.112.27.052.54-.122.756l-.689.845c.48 1.028 1.307 1.855 2.335 2.335l.845-.689c.216-.174.486-.234.756-.122l3.96 1.642c.113.155.156.374.078.592z" />
        </svg>

        {/* Status notification dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#ff5500] border-2 border-[#0d0e12] rounded-full" />
      </a>
    </div>
  );
};
