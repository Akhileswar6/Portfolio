import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative p-2.5 rounded-full border border-theme-border bg-theme-bg-secondary hover:border-theme-accent text-theme-text transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-theme-accent ${className}`}
      title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
    >
      <div className="w-4 h-4 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Sun className="w-4 h-4 text-theme-accent" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Moon className="w-4 h-4 text-theme-accent" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
};

