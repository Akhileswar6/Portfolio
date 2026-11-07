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
    <section id="home" className="min-h-screen pt-28 pb-16 flex flex-col justify-between relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        {/* Left Column: Editorial Typography & CTAs */}
        <div className="lg:col-span-7 space-y-8">
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
            A full-stack software engineer with a fine-art background, building scalable web systems, backend AI agents, and cyber-secure digital experiences with uncompromising craftsmanship.
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

        {/* Right Column: Profile Image - Breathing motion with aesthetic aura */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-sm sm:max-w-md flex justify-center items-center"
          >
            {/* Ambient breathing radial glow */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.12, 0.24, 0.12]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute w-72 h-72 sm:w-88 sm:h-88 bg-theme-accent/20 rounded-full blur-3xl pointer-events-none -z-10"
            />

            {/* Subtle decorative geometric orbit ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-theme-border/40 border-dashed pointer-events-none -z-10"
            />

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
                className="w-full max-h-[520px] object-contain drop-shadow-2xl hover:scale-[1.03] transition-transform duration-500 ease-out select-none"
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

