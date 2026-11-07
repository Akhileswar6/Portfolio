import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { artCategories, artworksData } from '../../data/artworksData';
import { ArtLightboxModal } from '../modals/ArtLightboxModal';
import { Eye, ArrowUpRight, Instagram, Sparkles } from 'lucide-react';

export const ArtGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const filteredArtworks = activeCategory === 'All'
    ? artworksData
    : artworksData.filter(art => art.category === activeCategory);

  return (
    <section id="art" className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-theme-border/60">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
      >
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl text-theme-text font-normal tracking-tight">
            Art & <span className="font-display text-theme-accent font-light">Fine Sketches</span>
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
            className="inline-flex items-center gap-2 font-label text-[11px] uppercase tracking-widest text-theme-accent hover:underline group"
          >
            <Instagram className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
            <span>@linesbyakhileswar</span>
          </a>
        </div>
      </motion.div>

      {/* Category Filter Pills with Animated Active Background */}
      <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-theme-border/60 mb-12">
        {artCategories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative font-label text-xs uppercase tracking-widest px-5 py-2.5 transition-colors duration-300 border ${
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

      {/* Artworks Editorial Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
                  className="w-full h-full object-cover object-center grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-theme-bg/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-theme-card/90 backdrop-blur-md border border-theme-border text-theme-accent transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 shadow-md">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-theme-bg/90 backdrop-blur-sm border border-theme-border font-label text-[9px] uppercase tracking-widest text-theme-text group-hover:border-theme-accent/60 transition-colors">
                  {artwork.category}
                </div>
              </div>

              {/* Artwork Caption Box */}
              <div className="p-5 space-y-2 border-t border-theme-border/60">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl text-theme-text font-normal group-hover:text-theme-accent transition-colors">
                    {artwork.title}
                  </h3>
                  <span className="font-label text-[10px] text-theme-muted-accent uppercase tracking-widest">
                    {artwork.year}
                  </span>
                </div>
                <p className="font-sans text-xs text-theme-text-secondary line-clamp-1 font-light">
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

