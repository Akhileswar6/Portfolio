import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificationsData } from '../../data/experienceData';
import { ExternalLink, ChevronDown } from 'lucide-react';

export const Certifications = () => {
  const [expandedCerts, setExpandedCerts] = useState({});

  const toggleCompetencies = (idx) => {
    setExpandedCerts((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-theme-border/60">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12"
      >
        <div>
          <span className="font-label text-xs uppercase tracking-widest text-theme-accent block mb-2 font-medium">
            Verified Credentials & Qualifications
          </span>
          <h2 className="font-label text-2xl sm:text-3xl text-theme-text font-normal tracking-tight">
            Industry <span className="font-label text-theme-accent tracking-tight">Certifications</span>
          </h2>
        </div>
      </motion.div>

      {/* Certifications Grid - 2x2 on Mobile & Desktop */}
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:gap-6">
        {certificationsData.map((cert, idx) => {
          const skillsList = cert.skills
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean);
          const isExpanded = Boolean(expandedCerts[idx]);

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group p-2.5 sm:p-4 md:p-5 bg-theme-bg-secondary border border-theme-border hover:border-theme-accent transition-all duration-300 flex flex-col md:flex-row gap-2.5 sm:gap-4 md:gap-5 shadow-subtle hover:shadow-lg relative overflow-hidden"
            >
              {/* Certificate Thumbnail Preview as Link */}
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                title={`Open ${cert.title} PDF`}
                className="w-full aspect-[16/10] md:w-44 md:aspect-[4/3] bg-theme-card border border-theme-border overflow-hidden relative flex-shrink-0 block"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-theme-bg/10 group-hover:bg-transparent transition-colors duration-300" />
              </a>

              {/* Certificate Details */}
              <div className="flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-label text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest text-theme-accent font-medium truncate">
                      {cert.issuer} • {cert.year}
                    </span>
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open Certificate PDF"
                      className="p-0.5 text-theme-muted-accent hover:text-theme-accent transition-colors flex-shrink-0"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </a>
                  </div>
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group/title"
                  >
                    <h3 className="font-label text-xs sm:text-base md:text-lg text-theme-text font-medium leading-tight sm:leading-snug group-hover/title:text-theme-accent transition-colors line-clamp-2 sm:line-clamp-none">
                      {cert.title}
                    </h3>
                  </a>
                </div>

                {/* Toggleable Domain Competencies */}
                <div className="pt-2 sm:pt-2.5 border-t border-theme-border/60">
                  <button
                    type="button"
                    onClick={() => toggleCompetencies(idx)}
                    className="w-full flex items-center justify-between group/comp py-0.5 text-left focus:outline-none transition-colors"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-wider text-theme-muted-accent group-hover/comp:text-theme-accent transition-colors font-medium">
                        Domain Competencies
                      </span>
                      <span className="text-[8px] sm:text-[9px] px-1 py-0.2 bg-theme-card border border-theme-border text-theme-text-secondary font-mono leading-none">
                        {skillsList.length}
                      </span>
                    </div>

                    <span className="flex items-center gap-1 font-sans text-[8px] sm:text-[9px] uppercase tracking-wider text-theme-accent group-hover/comp:text-theme-accent-hover transition-colors font-medium">
                      <span>{isExpanded ? 'Hide' : 'Show'}</span>
                      <ChevronDown
                        className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="competencies-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2 flex flex-wrap gap-1">
                          {skillsList.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="font-sans text-[8px] sm:text-[10px] tracking-tight sm:tracking-wide px-1.5 sm:px-2 py-0.5 bg-theme-card border border-theme-border text-theme-text-secondary group-hover:border-theme-accent/50 group-hover:text-theme-text transition-colors leading-tight"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
