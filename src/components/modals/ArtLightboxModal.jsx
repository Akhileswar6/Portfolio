import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Eye, Calendar, Sparkles, Tag } from 'lucide-react';

export const ArtLightboxModal = ({ artwork, onClose }) => {
  useEffect(() => {
    if (!artwork) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [artwork, onClose]);

  if (!artwork) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl max-h-[92vh] bg-theme-card border border-theme-border shadow-luxury overflow-hidden z-10 flex flex-col md:flex-row"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2.5 bg-theme-bg/80 backdrop-blur-md border border-theme-border text-theme-text hover:text-theme-accent transition-colors focus:outline-none"
            aria-label="Close artwork viewer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left / Top: High-Res Image Display */}
          <div className="md:w-3/5 bg-black/40 flex items-center justify-center p-4 sm:p-8 overflow-hidden relative group">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="max-h-[60vh] md:max-h-[80vh] w-auto object-contain shadow-2xl transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Right / Bottom: Curatorial Exhibition Notes */}
          <div className="md:w-2/5 p-6 sm:p-8 overflow-y-auto space-y-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-theme-border">
            <div className="space-y-6">
              <div>
                <span className="font-label text-xs uppercase tracking-widest text-theme-accent block mb-1">
                  {artwork.category} • {artwork.year}
                </span>
                <h3 className="font-label text-3xl sm:text-2xl text-theme-text font-normal leading-tight">
                  {artwork.title}
                </h3>
              </div>

              {/* Artwork Specs Table */}
              <div className="space-y-3 p-4 bg-theme-bg-secondary border border-theme-border text-xs font-sans">
                <div className="flex justify-between border-b border-theme-border/50 pb-2">
                  <span className="text-theme-text-secondary uppercase font-label tracking-widest text-[10px]">
                    Medium
                  </span>
                  <span className="text-theme-text font-medium text-right max-w-[65%]">
                    {artwork.medium}
                  </span>
                </div>
                <div className="flex justify-between border-b border-theme-border/50 pb-2">
                  <span className="text-theme-text-secondary uppercase font-label tracking-widest text-[10px]">
                    Dimensions
                  </span>
                  <span className="text-theme-text font-medium">
                    {artwork.dimensions}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-theme-text-secondary uppercase font-label tracking-widest text-[10px]">
                    Signature
                  </span>
                  <span className="text-theme-accent font-label">
                    Akhileswar Kamale
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="font-label text-xs uppercase tracking-widest">
                  Artist's Note
                </h4>
                <p className="font-label text-sm text-theme-text-secondary leading-relaxed">
                  {artwork.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {artwork.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="font-label text-[10px] uppercase tracking-widest px-2.5 py-1 border border-theme-border text-theme-text-secondary"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Instagram Archive Link */}
            <div className="pt-6 border-t border-theme-border">
              <a
                href="https://www.instagram.com/linesbyakhileswar/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-theme-bg-secondary border border-theme-border hover:border-theme-accent text-theme-text hover:text-theme-accent font-label text-xs uppercase tracking-widest transition-colors"
              >
                <span>More on Instagram</span>
                <span className="text-theme-accent">@linesbyakhileswar</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

