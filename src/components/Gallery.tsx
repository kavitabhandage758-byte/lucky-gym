import React, { useState } from "react";
import { Camera, Maximize2, X, ChevronRight, ChevronLeft, Dumbbell, ShieldAlert } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "../data/gymData";

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: "all", label: "All Areas" },
    { id: "weights", label: "Weights & Strength" },
    { id: "cardio", label: "Cardio & Conditioning" },
    { id: "space", label: "Gym Floor & Vibe" },
  ];

  const filteredItems = selectedCategory === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    setActiveModalItem(item);
  };

  const closeLightbox = () => {
    setActiveModalItem(null);
  };

  const handleNext = () => {
    if (!activeModalItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeModalItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveModalItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeModalItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeModalItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveModalItem(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24 bg-[#0d0e12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ff5500]/15 border border-[#ff5500]/30 text-[#ff5500] rounded-sm text-xs font-black uppercase tracking-wider font-heading mb-4">
              <Camera className="w-3.5 h-3.5" />
              <span>Training Space & Atmosphere</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              INSIDE <span className="text-[#ff5500]">LUCKY GYM</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 max-w-xl mt-2">
              Explore the dedicated training atmosphere on Gadag Road, Gajendragada. Built with durable iron, essential stations, and zero fluff.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider font-heading rounded-md transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#ff5500] text-white shadow-[0_0_15px_rgba(255,85,0,0.4)]"
                    : "bg-[#181922] text-neutral-400 hover:text-white border border-[#272935]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative rounded-lg overflow-hidden bg-[#15161f] border border-[#262835] cursor-pointer hover:border-[#ff5500]/60 transition-all duration-300"
            >
              {/* Image with subtle zoom on hover */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#101116] relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-110 group-hover:scale-108 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#0d0e12]/80 backdrop-blur-md border border-[#2b2d39] text-[#ff5500] text-[10px] font-bold uppercase tracking-wider rounded">
                  {item.categoryLabel}
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#ff5500] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Caption */}
              <div className="p-4 bg-[#14151d]">
                <h3 className="font-heading text-lg font-bold uppercase text-white tracking-wide group-hover:text-[#ff5500] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-1 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Note for Visitors */}
        <div className="mt-8 p-4 bg-[#14151d] border border-[#242633] rounded-md flex items-center gap-3 text-xs text-neutral-400">
          <Dumbbell className="w-4 h-4 text-[#ff5500] shrink-0" />
          <span>
            Photos represent equipment setups and the industrial fitness environment available at Lucky Gym in Gajendragada. Visit us in person on Gadag Road to see the facilities.
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-[#14151d] border border-[#2c2e3c] rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-[#0d0e12]/80 hover:bg-[#ff5500] text-white rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#0d0e12]/80 hover:bg-[#ff5500] text-white rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#0d0e12]/80 hover:bg-[#ff5500] text-white rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Image */}
            <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeModalItem.imageUrl}
                alt={activeModalItem.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            {/* Modal Caption */}
            <div className="p-6 bg-[#161722] border-t border-[#262837]">
              <div className="text-[11px] font-bold text-[#ff5500] uppercase tracking-wider mb-1">
                {activeModalItem.categoryLabel}
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase text-white mb-2">
                {activeModalItem.title}
              </h3>
              <p className="text-sm text-neutral-300">
                {activeModalItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
