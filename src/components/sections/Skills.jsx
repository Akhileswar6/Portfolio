import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsCategories } from '../../data/skillsData';
import { certificationsData } from '../../data/experienceData';
import { Award, ExternalLink, Sparkles } from 'lucide-react';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillsCategories[0].id);

  const selectedCategory = skillsCategories.find(c => c.id === activeCategory) || skillsCategories[0];

  return (
    <section id="skills" className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-theme-border/60">
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
            Technical Stack & <span className="font-display text-theme-accent">Craftsmanship</span>
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

      {/* Skills Grid */}
      <div className="mb-20">
        

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {selectedCategory.skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="p-6 bg-theme-card border border-theme-border hover:border-theme-accent/70 transition-all duration-300 group flex flex-col justify-between shadow-subtle hover:shadow-md"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-serif text-2xl text-theme-text font-normal group-hover:text-theme-accent transition-colors">
                      {skill.name}
                    </h4>
                    {skill.highlight && (
                      <span className="font-label text-[9px] uppercase tracking-widest px-2 py-0.5 border border-theme-accent/40 text-theme-accent group-hover:border-theme-accent transition-colors flex-shrink-0 mt-1">
                        Core Tech
                      </span>
                    )}
                  </div>
                </div>

                {/* Animated luxury progress line */}
                <div className="pt-6 space-y-1.5">
                  <div className="flex justify-between items-center font-label text-[10px] uppercase tracking-widest text-theme-text-secondary">
                    <span>Proficiency</span>
                    <span className="group-hover:text-theme-accent transition-colors font-medium">{skill.level}</span>
                  </div>
                  <div className="w-full h-[2px] bg-theme-border/60 overflow-hidden rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.1 + idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full bg-theme-accent"
                    />
                  </div>
                </div>
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
            <h3 className="font-serif text-2xl sm:text-3xl text-theme-text font-normal">
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
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
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
                  <h4 className="font-serif text-xl sm:text-xl text-theme-text font-medium leading-snug group-hover:text-theme-accent transition-colors">
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

