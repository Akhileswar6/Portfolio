import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificationsData } from '../../data/experienceData';
import { ExternalLink, ChevronDown, Award } from 'lucide-react';

export const Certifications = () => {
  // Domain competencies hidden by default on both desktop and mobile
  const [expandedCerts, setExpandedCerts] = useState({});

  const toggleCompetencies = (idx) => {
    setExpandedCerts((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <section id="certifications" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-theme-border/60">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
      >
        <div>
          <span className="font-label text-xs uppercase tracking-widest text-theme-accent block mb-2 font-medium">
            Verified Credentials & Qualifications
          </span>
          <h2 className="font-label text-2xl sm:text-3xl lg:text-4xl text-theme-text font-normal tracking-tight">
            Industry <span className="font-label text-theme-accent tracking-tight">Certifications</span>
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-theme-text-secondary max-w-md font-light leading-relaxed">
          Accredited credentials validating technical competencies across enterprise cloud architecture, cyber defense, and software engineering.
        </p>
      </motion.div>

      {/* Certifications Grid - 1 Col on Mobile, 2 Cols on Desktop with Luxury Framing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {certificationsData.map((cert, idx) => {
          const skillsList = cert.skills
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean);
          const isExpanded = Boolean(expandedCerts[idx]);

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group p-5 sm:p-6 lg:p-7 bg-theme-bg-secondary border border-theme-border hover:border-theme-accent transition-all duration-500 flex flex-col md:flex-row gap-5 lg:gap-6 shadow-subtle hover:shadow-xl relative overflow-hidden"
            >
              {/* Certificate Frame with Ambient Matting & Hover Action */}
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                title={`Open ${cert.title} PDF Credential`}
                className="w-full aspect-[1650/1275] md:w-56 lg:w-64 md:aspect-[1650/1275] bg-theme-card border border-theme-border/80 group-hover:border-theme-accent/60 overflow-hidden relative flex-shrink-0 block shadow-inner transition-colors"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-theme-bg/10 group-hover:bg-transparent transition-colors duration-300" />
              </a>

              {/* Certificate Details */}
              <div className="flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* Issuer & Year Tag */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 font-sans text-[10px]  uppercase tracking-wider text-theme-accent font-medium">
                      <Award className="w-3.5 h-3.5 text-theme-accent flex-shrink-0" />
                      <span>{cert.issuer} • {cert.year}</span>
                    </span>

                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Show PDF"
                      className="inline-flex items-center gap-1.5 text-[11px] font-sans uppercase tracking-wider text-theme-accent hover:underline transition-colors flex-shrink-0 font-medium"
                    >
                      <span>Show PDF</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Certificate Title */}
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group/title"
                  >
                    <h3 className="font-label text-lg sm:text-xl text-theme-text font-normal leading-snug group-hover/title:text-theme-accent transition-colors">
                      {cert.title}
                    </h3>
                  </a>
                </div>

                {/* Toggleable Domain Competencies */}
                <div className="pt-3 border-t border-theme-border/60">
                  <button
                    type="button"
                    onClick={() => toggleCompetencies(idx)}
                    className="w-full flex items-center justify-between group/comp py-1 text-left focus:outline-none transition-colors"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-sans  text-[11px] uppercase tracking-wide  text-theme-muted-accent group-hover/comp:text-theme-accent transition-colors font-medium">
                        Domain Competencies
                      </span>
                      
                    </div>

                    <span className="flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-wider text-theme-accent group-hover/comp:text-theme-accent-hover transition-colors font-medium">
                      <span>{isExpanded ? 'Hide' : 'Show'}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
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
                        <div className="pt-3 flex flex-wrap gap-1.5">
                          {skillsList.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="font-sans text-[11px] tracking-wide px-2.5 py-1 bg-theme-card border border-theme-border text-theme-text-secondary hover:border-theme-accent/60 hover:text-theme-text transition-colors leading-normal"
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
