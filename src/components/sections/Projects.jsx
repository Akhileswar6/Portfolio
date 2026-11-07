import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../../data/projectsData';
import { ProjectModal } from '../modals/ProjectModal';
import { ArrowUpRight, Github, ExternalLink, Sparkles } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-theme-border/60">
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
            Featured Projects & <span className=" text-theme-accent ">Case Studies</span>
          </h2>
        </div>
      </motion.div>

      {/* Alternating Editorial Showcase */}
      <div className="space-y-28">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Preview Column */}
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className={`lg:col-span-7 relative group cursor-pointer ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative w-full bg-theme-bg-secondary border border-theme-border overflow-hidden shadow-subtle group-hover:shadow-xl transition-shadow duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto block object-contain group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                </div>
              </motion.div>

              {/* Editorial Description Column */}
              <div
                className={`lg:col-span-5 space-y-6 ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="space-y-2">
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="font-label text-xl sm:text-2xl text-theme-text font-normal  hover:text-theme-accent transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="font-label text-xs uppercase tracking-widest text-theme-accent">
                    {project.subtitle}
                  </p>
                </div>

                <p className="font-sans text-sm sm:text-base text-theme-text-secondary leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Tech Badges with Micro-Interaction */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05, y: -1 }}
                      transition={{ duration: 0.15 }}
                      className="font-label text-[10px] uppercase tracking-widest px-2.5 py-1 bg-theme-bg-secondary border border-theme-border text-theme-text-secondary hover:text-theme-text hover:border-theme-accent/60 transition-colors cursor-default"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                {/* Interactive CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-theme-border/60">
                  <MagneticButton
                    variant="primary"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </MagneticButton>

                  {project.live && (
                    <motion.a
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-theme-border text-theme-text-secondary hover:text-theme-accent hover:border-theme-accent transition-colors shadow-sm"
                      title="Live Demo"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}

                  {project.github && (
                    <motion.a
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-theme-border text-theme-text-secondary hover:text-theme-accent hover:border-theme-accent transition-colors shadow-sm"
                      title="Source Code"
                      aria-label="Source Code"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

