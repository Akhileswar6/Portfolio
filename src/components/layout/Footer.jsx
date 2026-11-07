import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Code2, Heart } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Akhileswar6', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/akhileswar-kamale/', icon: Linkedin },
    { name: 'Instagram', href: 'https://www.instagram.com/linesbyakhileswar/', icon: Instagram },
    { name: 'LeetCode', href: 'https://leetcode.com/u/Akhileswar6/', icon: Code2 },
  ];

  return (
    <footer className="border-t border-theme-border bg-theme-bg-secondary/40 py-16 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Left Column: Monogram & Philosophy */}
        <div className="space-y-3 max-w-md">
          <div className="flex items-center">
            <span className=" bg-theme-border" />
            <span className="font-label text-md uppercase font-bold tracking-widest text-theme-accent">Akhileswar Kamale</span>
          </div>
          <p className="font-serif text-base text-theme-text-secondary leading-relaxed">
            Engineering with computational rigor. Designing with fine art intuition.
          </p>
          <p className="font-label text-[11px] uppercase tracking-widest text-theme-muted-accent">
            Based in Tirupati, India • Open for Global Remote Roles
          </p>
        </div>

        {/* Center: Social Channels - 4 in a Column */}
        <div className="flex flex-col gap-3">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 font-label text-xs uppercase tracking-widest text-theme-text-secondary hover:text-theme-text transition-colors"
              >
                <Icon className="w-4 h-4 text-theme-muted-accent group-hover:text-theme-text transition-colors" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>

        {/* Right: Back to Top & Copyright */}
        <div className="flex flex-col items-start md:items-end gap-3.5">
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 font-label text-xs uppercase tracking-widest text-theme-text hover:text-theme-accent transition-colors py-2 px-3 border border-theme-border hover:border-theme-accent"
          >
            <span>Back to Summit</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
          <span className="font-label text-[11px] text-theme-text-secondary tracking-widest">
            © {new Date().getFullYear()} Akhileswar Kamale. Crafted with React & Tailwind.
          </span>
        </div>
      </div>
    </footer>
  );
};

