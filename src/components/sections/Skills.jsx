import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { allSkills, skillsCategories } from '../../data/skillsData';
import { TechIcon } from '../common/TechIcon';

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
    </section>
  );
};

