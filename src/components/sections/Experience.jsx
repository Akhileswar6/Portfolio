import React from 'react';
import { motion } from 'framer-motion';
import { workExperienceData } from '../../data/experienceData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, ArrowUpRight, TrendingUp } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-theme-border/60">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
      >
        <div>
          <h2 className="font-label text-2xl sm:text-3xl text-theme-text font-normal tracking-tight">
            Work Experience 
          </h2> 
        </div>
        
      </motion.div>

      {/* Engineering Stream Layout */}
      <div className="space-y-12">
        {workExperienceData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="group relative bg-theme-card border border-theme-border hover:border-theme-accent/70 transition-all duration-500 overflow-hidden p-8 sm:p-12 shadow-subtle hover:shadow-xl"
          >
            {/* Subtle corner accent line with gentle hover reveal */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-theme-accent/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Top Row: Meta */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-theme-border/60 pb-6 mb-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xs text-theme-text-secondary flex items-center gap-1.5 font-light">
                    <MapPin className="w-3.5 h-3.5 text-theme-accent" />
                    {item.location}
                  </span>
                </div>

                 <p className="font-label text-xl text-theme-accent">
                  {item.organization}
                </p>

                <h3 className="font-label text-xl sm:text-2xl text-theme-text font-normal  transition-colors">
                  {item.role}
                </h3>

               
              </div>

              {/* Date & Tagline */}
              <div className="flex flex-col lg:items-end gap-1.5">
                <div className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-theme-text-secondary px-3 py-1.5 bg-theme-bg-secondary border border-theme-border">
                  <Calendar className="w-3.5 h-3.5 text-theme-accent" />
                  <span>{item.period}</span>
                </div>
                <span className="font-label text-[11px] text-theme-muted-accent tracking-wide lg:text-right">
                  {item.tagline}
                </span>
              </div>
            </div>

            {/* Main Content: Description & Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-6">
                <p className="font-sans text-base text-theme-text-secondary leading-relaxed font-light">
                  {item.description}
                </p>

                {/* Key Achievements Bulleted List */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-label text-[11px] uppercase tracking-widest text-theme-accent font-medium flex items-center gap-2">
                    <span>Key Contributions & Technical Deliverables</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 font-sans text-sm text-theme-text-secondary font-light">
                        <CheckCircle2 className="w-4 h-4 text-theme-accent flex-shrink-0 mt-0.5 group-hover:text-theme-accent transition-colors" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Stack Column */}
              <div className="lg:col-span-4 bg-theme-bg-secondary/60 border border-theme-border/70 p-6 space-y-4">
                <span className="font-label text-[10px] uppercase tracking-widest text-theme-accent block font-medium">
                  Stack & Frameworks Deployed
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((t, tIdx) => (
                    <motion.span
                      key={tIdx}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.15 }}
                      className="font-label text-[10px] uppercase tracking-widest px-2.5 py-1 bg-theme-card border border-theme-border text-theme-text hover:border-theme-accent/60 transition-colors cursor-default"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
