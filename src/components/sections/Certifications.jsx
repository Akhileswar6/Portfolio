import React from 'react';
import { motion } from 'framer-motion';
import { certificationsData } from '../../data/experienceData';
import { ExternalLink } from 'lucide-react';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-theme-border/60">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
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

      {/* Certifications Grid - Compact & refined */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
        {certificationsData.map((cert, idx) => (
          <motion.a
            key={idx}
            href={cert.pdf}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="group p-4 sm:p-5 bg-theme-bg-secondary border border-theme-border hover:border-theme-accent transition-all duration-300 flex flex-col sm:flex-row gap-4 sm:gap-5 shadow-subtle hover:shadow-lg relative overflow-hidden"
          >
            {/* Certificate Thumbnail Preview */}
            <div className="w-full sm:w-44 aspect-[16/10] sm:aspect-[4/3] bg-theme-card border border-theme-border overflow-hidden relative flex-shrink-0">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-theme-bg/10 group-hover:bg-transparent transition-colors duration-300" />
            </div>

            {/* Certificate Details */}
            <div className="flex-1 flex flex-col justify-between space-y-3">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-label text-[10px] uppercase tracking-widest text-theme-accent font-medium">
                    {cert.issuer} • {cert.year}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-theme-muted-accent group-hover:text-theme-accent transition-colors" />
                </div>
                <h3 className="font-label text-base sm:text-lg text-theme-text font-medium leading-snug group-hover:text-theme-accent transition-colors">
                  {cert.title}
                </h3>
              </div>

              <div className="pt-2.5 border-t border-theme-border/60">
                <span className="font-sans text-[9px] uppercase tracking-widest text-theme-muted-accent block mb-1.5">
                  Domain Competencies
                </span>
                <div className="flex flex-wrap gap-1">
                  {cert.skills
                    .split(',')
                    .map((s) => s.trim())
                    .filter(Boolean)
                    .map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-sans text-[10px] tracking-wide px-2 py-0.5 bg-theme-card border border-theme-border text-theme-text-secondary group-hover:border-theme-accent/50 group-hover:text-theme-text transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
