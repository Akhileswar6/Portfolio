import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { allSkills, skillsCategories } from '../../data/skillsData';
import { certificationsData } from '../../data/experienceData';
import { TechIcon } from '../common/TechIcon';
import { Award, ExternalLink, Sparkles } from 'lucide-react';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? allSkills
    : allSkills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-theme-border/60">
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
            Technical Stack & <span className="font-label text-theme-accent">Craftsmanship</span>
          </h2>
        </div>
      </motion.div>

      {/* Category Tabs with Animated Pill */}
      <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-theme-border/60 mb-12">
        {skillsCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative font-label text-xs uppercase tracking-widest px-5 py-2.5 transition-colors duration-300 border ${
                isActive
                  ? 'border-theme-accent text-theme-accent font-medium'
                  : 'border-transparent text-theme-text-secondary hover:text-theme-text hover:border-theme-border'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-theme-accent/10 -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              {cat.title}
            </button>
          );
        })}
      </div>

      {/* Skills Grid - Compact Tiles */}
      <div className="mb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
          >
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.03, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-3 sm:p-3.5 bg-theme-card border border-theme-border hover:border-theme-accent/70 transition-all duration-300 group flex items-center gap-3 shadow-subtle hover:shadow-md cursor-default overflow-hidden"
              >
                <div className="w-9 h-9 flex items-center justify-center p-1.5 rounded bg-theme-bg-secondary border border-theme-border group-hover:border-theme-accent/60 transition-colors flex-shrink-0">
                  <TechIcon
                    name={skill.name}
                    icon={skill.icon}
                    className="w-5 h-5 sm:w-5.5 sm:h-5.5 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h4 className="font-label text-sm sm:text-base text-theme-text font-normal group-hover:text-theme-accent transition-colors truncate">
                  {skill.name}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Certifications Showcase - 2 for row */}
      <div className="pt-12 border-t border-theme-border/60">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <span className="font-label text-xs uppercase tracking-widest text-theme-accent block mb-1">
              Verified Credentials
            </span>
            <h3 className="font-label text-2xl sm:text-3xl text-theme-text tracking-tight">
              Industry Certifications
            </h3>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {certificationsData.map((cert, idx) => (
            <motion.a
              key={idx}
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group p-6 bg-theme-bg-secondary border border-theme-border hover:border-theme-accent transition-all duration-300 flex flex-col sm:flex-row gap-6 shadow-subtle hover:shadow-lg relative overflow-hidden"
            >
              {/* Certificate Image Preview */}
              <div className="w-full sm:w-48 aspect-[4/3] bg-theme-card border border-theme-border overflow-hidden relative flex-shrink-0">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-theme-bg/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Certificate Details */}
              <div className="space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-label text-[10px] uppercase tracking-widest text-theme-accent">
                      {cert.issuer} • {cert.year}
                    </span>
                  </div>
                  <h4 className="font-label text-xl sm:text-xl text-theme-text font-medium leading-snug group-hover:text-theme-accent transition-colors">
                    {cert.title}
                  </h4>
                </div>

                <div className="pt-3 border-t border-theme-border/60">
                  <span className="font-label text-[10px] uppercase tracking-widest text-theme-muted-accent block mb-1">
                    Domain Competencies
                  </span>
                  <p className="font-sans text-xs text-theme-text-secondary line-clamp-2 font-light">
                    {cert.skills}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

