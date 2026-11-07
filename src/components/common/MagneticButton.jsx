import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const MagneticButton = ({
  children,
  className = '',
  onClick,
  href,
  download,
  target,
  rel,
  variant = 'primary', // 'primary', 'secondary', 'ghost'
  type = 'button',
  disabled = false
}) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.25;
    const y = (clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = 'relative inline-flex items-center justify-center font-label text-xs uppercase tracking-widest px-7 py-3.5 transition-all duration-300 rounded-none overflow-hidden group focus:outline-none';
  
  let variantStyles = '';
  if (variant === 'primary') {
    variantStyles = 'bg-theme-accent text-theme-bg border border-theme-accent hover:bg-theme-accent-hover hover:border-theme-accent-hover font-medium';
  } else if (variant === 'secondary') {
    variantStyles = 'bg-transparent text-theme-text border border-theme-border hover:border-theme-accent hover:text-theme-accent';
  } else if (variant === 'ghost') {
    variantStyles = 'bg-transparent text-theme-text border-b border-theme-border hover:border-theme-accent hover:text-theme-accent px-0 py-2';
  }

  const content = (
    <span className="relative z-10 flex items-center gap-2">
      {children}
    </span>
  );

  const motionProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    animate: { x: position.x, y: position.y },
    transition: { type: 'spring', damping: 20, stiffness: 200, mass: 0.1 },
    className: `${baseStyles} ${variantStyles} ${className}`
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        download={download}
        onClick={onClick}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
};

