import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../../data/experienceData';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Check, BookmarkCheck } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-theme-border/60">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20"
      >
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl text-theme-text font-normal tracking-tight">
            Education 
          </h2>
        </div>
      </motion.div>

      {/* Distinct Academic Dossier Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="group relative bg-theme-card border border-theme-border hover:border-theme-accent/80 transition-all duration-500 p-8 sm:p-10 flex flex-col justify-between shadow-subtle hover:shadow-xl"
          >
            {/* Header: Score / Honors Badge */}
            <div className="space-y-6">
              <div className="flex items-start justify-between gap-4 border-b border-theme-border/60 pb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 border border-theme-border bg-theme-bg-secondary flex items-center justify-center text-theme-accent group-hover:border-theme-accent transition-colors">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-label text-[10px] uppercase tracking-widest text-theme-accent block">
                      {edu.specialization}
                    </span>
                    <span className="font-sans text-xs text-theme-text-secondary font-light">
                      {edu.period}
                    </span>
                  </div>
                </div>

                {/* Distinction Grade Seal */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="text-right p-3 bg-theme-bg-secondary border border-theme-border group-hover:border-theme-accent/60 transition-colors"
                >
                  <span className="font-label text-xl font-semibold text-theme-accent block leading-none">
                    {edu.score}
                  </span>
                  <span className="font-label text-[9px] uppercase tracking-widest text-theme-muted-accent block mt-1">
                    {edu.scoreType}
                  </span>
                </motion.div>
              </div>

              {/* Degrees & Institution */}
              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-2xl text-theme-text font-normal leading-snug group-hover:text-theme-accent transition-colors">
                  {edu.degree}
                </h3>
                <p className="font-label text-lg text-theme-accent">
                  {edu.institution}
                </p>
                <div className="flex items-center gap-2 font-sans text-xs text-theme-text-secondary pt-1 font-light">
                  <MapPin className="w-3.5 h-3.5 text-theme-accent" />
                  <span>{edu.location}</span>
                </div>
              </div>

              {/* Narrative Description */}
              <p className="font-sans text-sm text-theme-text-secondary leading-relaxed font-light">
                {edu.description}
              </p>

              {/* Key Scholarly Highlights */}
              <div className="space-y-2.5 pt-2">
                <span className="font-label text-[10px] uppercase tracking-widest text-theme-accent block font-medium">
                  Scholarly Highlights
                </span>
                <ul className="space-y-2">
                  {edu.highlights.map((hl, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 font-sans text-xs text-theme-text-secondary font-light">
                      <BookmarkCheck className="w-4 h-4 text-theme-accent flex-shrink-0 mt-0.5 group-hover:text-theme-accent transition-colors" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Core Coursework Matrix */}
            <div className="pt-6 mt-6 border-t border-theme-border/60 space-y-3">
              <span className="font-label text-[10px] uppercase tracking-widest text-theme-muted-accent block">
                Curricular Focus Areas
              </span>
              <div className="flex flex-wrap gap-1.5">
                {edu.coursework.map((course, cIdx) => (
                  <motion.span
                    key={cIdx}
                    whileHover={{ scale: 1.05, y: -1 }}
                    transition={{ duration: 0.15 }}
                    className="font-sans text-[11px] px-2.5 py-1 bg-theme-bg-secondary border border-theme-border text-theme-text-secondary font-light hover:text-theme-text hover:border-theme-accent/60 transition-colors cursor-default"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

