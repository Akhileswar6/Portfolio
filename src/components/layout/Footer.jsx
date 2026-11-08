import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Akhileswar6', iconSrc: '/icons/github (3).png' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/akhileswar-kamale/', iconSrc: '/icons/linkedin (1).png' },
    { name: 'Instagram', href: 'https://www.instagram.com/linesbyakhileswar/', iconSrc: '/icons/instagram (1).png' },
    { name: 'LeetCode', href: 'https://leetcode.com/u/Akhileswar6/', iconSrc: '/icons/leetcode.png' },
  ];

  return (
    <footer className="border-t border-theme-border bg-theme-bg-secondary/40 py-16 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Left Column: Monogram & Philosophy */}
        <div className="space-y-3 max-w-md">
          <div className="flex items-center">
            <span className=" bg-theme-border" />
            <span className="font-label text-lg uppercase font-semibold tracking-wider text-theme-accent">Akhileswar Kamale</span>
          </div>
          <p className="font-sans text-base text-theme-text-secondary tracking-tight">
            Engineering with computational rigor. Designing with fine art intuition.
          </p>
          <p className="font-sans text-[11px] uppercase tracking-widest text-theme-muted-accent">
            Based in Tirupati, India • Open for Global Remote Roles
          </p>
        </div>

        {/* Center: Social Channels - 4 in a Column */}
        <div className="flex flex-col gap-3.5">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 font-label text-xs  uppercase tracking-widest text-theme-text-secondary hover:text-theme-text transition-colors"
            >
              <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                <img
                  src={item.iconSrc}
                  alt={item.name}
                  className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="group-hover:text-theme-accent transition-colors">{item.name}</span>
            </a>
          ))}
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
          <span className="font-label text-[13px] text-theme-muted-accent ">
            © {new Date().getFullYear()} Akhileswar Kamale. Crafted with React & Tailwind.
          </span>
        </div>
      </div>
    </footer>
  );
};

