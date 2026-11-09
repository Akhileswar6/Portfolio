import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Sparkles, MoveRight } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';

export const Hero = () => {
  const roles = [
    'Full Stack Developer',
    'Creative Developer',
    'Digital Artist',
    'Backend AI Engineer'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [roles.length]);

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Akhileswar6', iconSrc: '/icons/github (3).png' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/akhileswar-kamale/', iconSrc: '/icons/linkedin (1).png' },
    { name: 'Instagram', href: 'https://www.instagram.com/linesbyakhileswar/', iconSrc: '/icons/instagram (1).png' },
    { name: 'LeetCode', href: 'https://leetcode.com/u/Akhileswar6/', iconSrc: '/icons/leetcode.png' },
  ];

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const titleFirstName = "Akhileswar";
  const titleLastName = "Kamale";

  const headlineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.15,
      }
    }
  };

  const charVariants = {
    hidden: { opacity: 0, y: 35, rotateZ: 2 },
    visible: {
      opacity: 1,
      y: 0,
      rotateZ: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="home" className="min-h-screen pt-24 sm:pt-28 pb-14 sm:pb-16 flex flex-col justify-between relative overflow-hidden">
      {/* Subtle background ambient line and floating orbs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.03, 0.08, 0.03],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-theme-accent/20 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center my-auto">
        {/* Left Column on Desktop / Underneath on Mobile: Editorial Typography & CTAs */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1px] bg-theme-accent block"
            />
            <span className="font-label text-xs uppercase tracking-widest text-theme-accent font-medium">
              Hello, I'm
            </span>
          </motion.div>

          <div className="space-y-4">
            {/* Staggered character reveal headline */}
            <motion.h1
              variants={headlineVariants}
              initial="hidden"
              animate="visible"
              className="font-label text-3xl sm:text-4xl lg:text-5xl  text-theme-text font-normal  tracking-tighter overflow-hidden flex flex-wrap gap-x-4 gap-y-1"
            >
              <span className="inline-flex">
                {titleFirstName.split('').map((char, index) => (
                  <motion.span key={index} variants={charVariants} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </span>
              <span className="inline-flex font-label text-theme-accent tracking-tighter">
                {titleLastName.split('').map((char, index) => (
                  <motion.span key={index} variants={charVariants} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Rotating Role Text with AnimatePresence */}
            <div className="h-10 flex items-center overflow-hidden">
              <span className="font-label text-xs uppercase tracking-widest text-theme-muted-accent mr-3">
                Disciplines /
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRoleIndex}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="font-label text-lg sm:text-xl text-theme-accent"
                >
                  {roles[currentRoleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-theme-text-secondary text-base sm:text-lg max-w-xl leading-relaxed font-sans font-light"
          >
            A full-stack software engineer with a fine-art background, building scalable web systems, and cyber-secure digital experiences with uncompromising craftsmanship.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <MagneticButton
              variant="primary"
              onClick={() => handleScrollTo('projects')}
            >
              <span>Explore My Work</span>
              <MoveRight className="w-4 h-4" />
            </MagneticButton>

            <MagneticButton
              variant="secondary"
              onClick={() => handleScrollTo('contact')}
            >
              <span>Let's Connect</span>
            </MagneticButton>
          </motion.div>

          {/* Social Channels with Authentic Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 sm:gap-5 pt-4"
          >
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                title={item.name}
                aria-label={item.name}
                className="group flex items-center justify-center p-1 transition-all duration-300 hover:scale-115"
              >
                <img
                  src={item.iconSrc}
                  alt={item.name}
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform duration-300 drop-shadow-sm group-hover:scale-110"
                />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Column on Desktop / Top on Mobile: Profile Image - Breathing motion with aesthetic aura */}
        <div className="lg:col-span-5 relative flex justify-center items-center order-1 lg:order-2 pt-2 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[240px] xs:max-w-[280px] sm:max-w-sm lg:max-w-md flex justify-center items-center"
          >
            {/* Ambient Breathing Radial Aurora 1 */}
            <motion.div
              animate={{
                scale: [1, 1.25, 0.95, 1],
                rotate: [0, 90, 180, 270, 360],
                opacity: [0.18, 0.32, 0.2, 0.18]
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] bg-gradient-to-tr from-theme-accent/25 via-theme-muted-accent/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
            />

            {/* Ambient Breathing Radial Aurora 2 (Counter-Pulsing) */}
            <motion.div
              animate={{
                scale: [1.15, 0.9, 1.1, 1.15],
                x: [-12, 12, -8, -12],
                y: [8, -12, 10, 8],
                opacity: [0.14, 0.26, 0.14]
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute w-48 h-48 sm:w-64 sm:h-64 lg:w-[300px] lg:h-[300px] bg-theme-accent/20 rounded-full blur-2xl pointer-events-none -z-10"
            />

            {/* Outer Concentric Orbit Ring (Clockwise) with Satellite Node */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-[390px] lg:h-[390px] rounded-full border border-theme-border/50 border-dashed pointer-events-none -z-10 flex items-start justify-center"
            >
              {/* Glowing Satellite Bead 1 */}
              <div className="w-2 h-2 -mt-1 rounded-full bg-theme-accent shadow-[0_0_10px_var(--color-accent)]" />
            </motion.div>

            {/* Inner Concentric Orbit Ring (Counter-Clockwise) with Satellite Node */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
              className="absolute w-52 h-52 sm:w-64 sm:h-64 lg:w-[310px] lg:h-[310px] rounded-full border border-theme-border/35 pointer-events-none -z-10 flex items-end justify-center"
            >
              {/* Glowing Satellite Bead 2 */}
              <div className="w-1.5 h-1.5 -mb-[3px] rounded-full bg-theme-muted-accent shadow-[0_0_8px_var(--color-accent)]" />
            </motion.div>

            {/* Floating Celestial Spark 1 (Top Right) */}
            <motion.div
              animate={{
                y: [-6, 6, -6],
                opacity: [0.35, 0.8, 0.35],
                rotate: [0, 15, 0]
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-1 -right-1 sm:top-2 sm:right-2 font-serif text-theme-accent text-sm sm:text-base pointer-events-none select-none -z-10"
            >
              ✦
            </motion.div>

            {/* Floating Celestial Spark 2 (Bottom Left) */}
            <motion.div
              animate={{
                y: [6, -6, 6],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-6 -left-3 sm:bottom-10 sm:left-0 font-label text-[10px] text-theme-muted-accent tracking-widest pointer-events-none select-none -z-10"
            >
              ◇
            </motion.div>

            {/* Smooth Floating Profile Image */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="relative w-full flex justify-center"
            >
              <img
                src="./assets/profile.png"
                alt="Akhileswar Kamale"
                className="w-full max-h-[300px] xs:max-h-[340px] sm:max-h-[420px] lg:max-h-[520px] object-contain drop-shadow-2xl hover:scale-[1.03] transition-transform duration-500 ease-out select-none"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Editorial Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-8 flex items-center justify-between"
      >
        <button
          onClick={() => handleScrollTo('about')}
          className="group flex items-center gap-3 font-label text-[11px] uppercase tracking-widest-luxury text-theme-text-secondary hover:text-theme-accent transition-colors"
        >
          <span>Scroll to Discover</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1.5 transition-transform duration-300" />
        </button>

        <span className="font-label text-[10px] uppercase tracking-widest text-theme-muted-accent hidden sm:inline">
          Edition 2026 • Portfolio Vol. IV
        </span>
      </motion.div>
    </section>
  );
};

