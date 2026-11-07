import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers, Calendar, BarChart3 } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-theme-card border border-theme-border shadow-luxury overflow-y-auto z-10 flex flex-col"
        >
          {/* Header Close Bar */}
          <div className="sticky top-0 right-0 z-20 flex justify-between items-center p-6 bg-theme-card/90 backdrop-blur-md border-b border-theme-border">
            <div className="flex items-center gap-3">
              <span className="font-label text-xs uppercase tracking-widest text-theme-accent">
                Case Study • {project.number}
              </span>
              <span className="h-3 w-[1px] bg-theme-border" />
              <span className="font-label text-xs text-theme-text-secondary uppercase tracking-widest">
                {project.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-theme-text-secondary hover:text-theme-accent hover:bg-theme-bg-secondary transition-colors rounded-none focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-10 space-y-8">
            {/* Title & Subtitle */}
            <div className="space-y-2">
              <h3 className="font-serif text-3xl sm:text-5xl text-theme-text font-normal leading-tight">
                {project.title}
              </h3>
              <p className="font-sans text-sm text-theme-accent tracking-wide font-light">
                {project.subtitle}
              </p>
            </div>

            {/* Featured Image */}
            <div className="w-full bg-theme-bg-secondary border border-theme-border overflow-hidden flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-[70vh] object-contain block"
              />
            </div>

            {/* Metrics Row */}
            {project.metrics && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-theme-bg-secondary border border-theme-border">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="font-label text-[10px] uppercase tracking-widest text-theme-muted-accent block">
                      {m.label}
                    </span>
                    <span className="font-serif text-xl text-theme-text font-medium block">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Narrative & Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
              <div className="lg:col-span-8 space-y-4">
                <h4 className="font-label text-xs uppercase tracking-widest text-theme-accent">
                  System Architecture & Overview
                </h4>
                <p className="font-sans text-sm sm:text-base text-theme-text-secondary leading-relaxed font-light">
                  {project.description}
                </p>
                <p className="font-sans text-sm sm:text-base text-theme-text-secondary leading-relaxed font-light">
                  {project.details}
                </p>
              </div>

              <div className="lg:col-span-4 space-y-6">
                <div>
                  <h4 className="font-label text-xs uppercase tracking-widest text-theme-accent mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="font-label text-[11px] px-2.5 py-1 bg-theme-bg-secondary border border-theme-border text-theme-text"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-theme-border flex flex-col gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-5 py-3 bg-theme-accent text-theme-bg font-label text-xs uppercase tracking-widest hover:bg-theme-accent-hover transition-colors font-medium"
                    >
                      <span>Launch Live Platform</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-5 py-3 border border-theme-border text-theme-text font-label text-xs uppercase tracking-widest hover:border-theme-accent hover:text-theme-accent transition-colors"
                    >
                      <span>Review Source Repository</span>
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

