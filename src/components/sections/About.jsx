import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Terminal, ShieldCheck, Award, ArrowUpRight } from 'lucide-react';

export const About = () => {
  const stats = [
    { number: '9.13', label: 'B.Tech CGPA', detail: 'CSE (Cyber Security)' },
    { number: '15+', label: 'Projects Built', detail: 'Full Stack & AI' },
    { number: '50+', label: 'Artworks Drafted', detail: 'Sketches & Digital' },
    { number: '04', label: 'Global Certifications', detail: 'GitHub, OCI, Cisco' }
  ];

 
  return (
    <section id="about" className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-theme-border/60">
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
            The Intersection of <span className="font-display text-theme-accent ">Code</span> & <span className="font-display text-theme-accent">Canvas</span>
          </h2>
        </div>
      </motion.div>

      {/* Main Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: Artistic Composition & Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[3/4] bg-theme-bg-secondary border border-theme-border overflow-hidden group shadow-subtle">
            <img
              src="./assets/download.jpg"
              alt="Creative Atelier Workspace"
              className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-theme-bg/20 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-theme-card/90 backdrop-blur-md border border-theme-border transition-transform duration-300 group-hover:translate-y-[-2px]">
              <span className="font-label text-[10px] uppercase tracking-widest text-theme-accent block mb-1">
                Artist Handle
              </span>
              <a
                href="https://www.instagram.com/linesbyakhileswar/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-base italic text-theme-text flex items-center justify-between hover:text-theme-accent transition-colors"
              >
                <span>@linesbyakhileswar</span>
                <ArrowUpRight className="w-4 h-4 text-theme-accent" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Narrative & Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-10"
        >
          <div className="space-y-6 text-theme-text-secondary font-sans font-light leading-relaxed text-base sm:text-lg">
            <p>
              I am Akhileswar Kamale, a full-stack developer and digital artist based in Tirupati, India. For me, programming and fine art are not opposing fields—they are complementary facets of the same creative drive: translating abstract ideas into tangible reality.
            </p>
            <p>
              My engineering work is rooted in clean architectural design, microservice reliability, and modern web ergonomics using React, Node.js, and Python. Simultaneously, my hours spent sketching with graphite and charcoal have conditioned me to observe micro-details, visual hierarchy, and balance—qualities that directly influence how I craft digital interfaces.
            </p>
            <p>
              Currently interning as a Full Stack Intern at Udr Crafts and pursuing B.Tech in Computer Science and Engineering(Cyber Security) at SVCE with an academic record of 9.13 CGPA, I bring rigorous technical discipline and an artist's discerning eye to every project.
            </p>
          </div>

          {/* Key Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-theme-border/60">
            {stats.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-1 group"
              >
                <span className="font-label text-2xl sm:text-3xl font-normal text-theme-accent block group-hover:scale-105 transition-transform origin-left">
                  {s.number}
                </span>
                <span className="font-label text-xs uppercase tracking-widest text-theme-text block font-medium">
                  {s.label}
                </span>
                <span className="font-sans text-[11px] text-theme-text-secondary block font-light">
                  {s.detail}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

