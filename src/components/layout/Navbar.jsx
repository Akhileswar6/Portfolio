import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Download, Sparkles } from 'lucide-react';
import { ThemeToggle } from '../common/ThemeToggle';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Art', href: '#art', id: 'art' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // ScrollSpy logic
      const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean);
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70;

      if (isBottom) {
        setActiveSection('contact');
        return;
      }

      let current = 'home';
      sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top <= 200) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
      if (history.pushState) {
        history.pushState(null, '', href);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-theme-bg/85 backdrop-blur-md border-b border-theme-border/60 shadow-subtle'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-baseline gap-2 text-theme-text hover:text-theme-accent transition-colors"
          >
            <span className="hidden sm:inline-block font-label font-semibold text-[14px] tracking-widest-luxury uppercase text-theme-text-secondary group-hover:text-theme-accent transition-colors">
              Developer <span className="text-theme-accent">×</span> Artist
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative font-label text-xs uppercase tracking-widest py-1 transition-colors duration-200 ${
                    isActive ? 'text-theme-accent font-medium' : 'text-theme-text-secondary hover:text-theme-text'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-theme-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-3.5">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Resume Button */}
            <a
              href="./assets/Akhileswar_Kamale_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-label uppercase tracking-widest border border-theme-border hover:border-theme-accent text-theme-text hover:text-theme-accent transition-all duration-300"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 text-theme-text hover:text-theme-accent focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-over / Fullscreen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] bg-theme-bg/95 backdrop-blur-xl z-30 lg:hidden flex flex-col justify-between p-8 border-t border-theme-border"
          >
            <div className="flex flex-col gap-6 pt-4">
              <span className="font-label text-[10px] tracking-widest-luxury uppercase text-theme-accent">
                Directory
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`font-serif text-3xl tracking-tight transition-colors ${
                    activeSection === link.id ? 'text-theme-accent italic' : 'text-theme-text'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-theme-border flex flex-col gap-4">
              <a
                href="./assets/Akhileswar_Kamale_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-3 px-5 border border-theme-border text-theme-text font-label text-xs uppercase tracking-widest hover:border-theme-accent hover:text-theme-accent"
              >
                <span>Download Curriculum Vitae</span>
                <Download className="w-4 h-4 text-theme-accent" />
              </a>
              <p className="font-label text-[11px] text-theme-text-secondary tracking-widest">
                Tirupati, India • Available for Full-Stack & Creative Engineering
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

