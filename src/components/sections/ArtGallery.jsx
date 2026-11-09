import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { artCategories, artworksData } from '../../data/artworksData';
import { ArtLightboxModal } from '../modals/ArtLightboxModal';
import { Instagram } from 'lucide-react';

export const ArtGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const filteredArtworks = activeCategory === 'All'
    ? artworksData
    : artworksData.filter(art => art.category === activeCategory);

  return (
    <section id="art" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-theme-border/60">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10"
      >
        <div>
          <h2 className="font-label text-2xl sm:text-3xl text-theme-text tracking-tight">
            Art & <span className=" text-theme-accent ">Fine Sketches</span>
          </h2>
        </div>
        <div className="space-y-2 max-w-xs">
          <p className="font-label text-xs uppercase tracking-widest text-theme-text-secondary">
            Visual creations exploring human anatomy, sacred heritage, and generative forms.
          </p>
          <a
            href="https://www.instagram.com/linesbyakhileswar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-label text-[12px] uppercase tracking-widest text-theme-accent hover:underline group"
          >
            <Instagram className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
            <span>@linesbyakhileswar</span>
          </a>
        </div>
      </motion.div>

      {/* Category Filter Pills with Animated Active Background */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pb-4 sm:pb-6 border-b border-theme-border/60 mb-8 sm:mb-12">
        {artCategories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative font-label text-[11px] sm:text-xs uppercase tracking-widest px-3.5 sm:px-5 py-2 sm:py-2.5 transition-colors duration-300 border ${
                isActive
                  ? 'border-theme-accent text-theme-accent font-medium'
                  : 'border-transparent text-theme-text-secondary hover:text-theme-text hover:border-theme-border'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeArtTab"
                  className="absolute inset-0 bg-theme-accent/10 -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              {cat}
            </button>
          );
        })}
      </div>

      {/* Artworks Editorial Grid - 2x2 on Mobile */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6"
      >
        <AnimatePresence>
          {filteredArtworks.map((artwork) => (
            <motion.div
              layout
              key={artwork.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              onClick={() => setSelectedArtwork(artwork)}
              className="group cursor-pointer bg-theme-card border border-theme-border hover:border-theme-accent/80 transition-all duration-500 overflow-hidden shadow-subtle hover:shadow-xl"
            >
              {/* Artwork Image Frame */}
              <div className={`relative overflow-hidden bg-theme-bg-secondary ${artwork.aspectRatio}`}>
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Artwork Caption Box */}
              <div className="p-2.5 sm:p-4 md:p-5 space-y-1 sm:space-y-1.5 border-t border-theme-border/60">
                <div className="flex items-start justify-between gap-1.5">
                  <h3 className="font-label text-xs sm:text-base md:text-xl text-theme-text font-normal leading-snug group-hover:text-theme-accent transition-colors truncate">
                    {artwork.title}
                  </h3>
                  <span className="font-label text-[9px] sm:text-[10px] text-theme-muted-accent uppercase tracking-widest flex-shrink-0 mt-0.5">
                    {artwork.year}
                  </span>
                </div>
                <p className="font-sans text-[10px] sm:text-xs text-theme-text-secondary line-clamp-1 font-light">
                  {artwork.medium}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <ArtLightboxModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </section>
  );
};

