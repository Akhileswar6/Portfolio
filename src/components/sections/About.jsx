import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';

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
          <h2 className="font-label text-2xl sm:text-3xl text-theme-text font-normal tracking-tight">
            The Intersection of <span className="font-label text-theme-accent tracking-tight">Code</span> & <span className="font-label text-theme-accent tracking-tight">Canvas</span>
          </h2>
        </div>
      </motion.div>

      {/* Main Narrative & Key Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl space-y-10"
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

        {/* Resume Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <MagneticButton
            variant="primary"
            href="./assets/Akhileswar_Kamale_Resume.pdf"
            download="Akhileswar_Kamale_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </MagneticButton>

          <MagneticButton
            variant="secondary"
            href="./assets/Akhileswar_Kamale_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="w-4 h-4" />
            <span>View PDF</span>
          </MagneticButton>
        </div>

        {/* Key Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 pt-10 border-t border-theme-border/60">
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
    </section>
  );
};
