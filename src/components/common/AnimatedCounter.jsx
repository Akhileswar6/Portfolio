import React, { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export const AnimatedCounter = ({
  value,
  duration = 1.8,
  delay = 0,
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  const rawStr = String(value ?? '').trim();
  const hasLeadingZero = /^0\d+$/.test(rawStr);
  const padLength = hasLeadingZero ? rawStr.length : 0;
  
  // Extract prefix (e.g. $, ~), suffix (e.g. +, %, k), and numeric portion
  const prefixMatch = rawStr.match(/^[^0-9.]+/);
  const prefix = prefixMatch ? prefixMatch[0] : '';
  const suffixMatch = rawStr.match(/[^0-9.]+$/);
  const suffix = suffixMatch ? suffixMatch[0] : '';

  const numPart = rawStr.replace(/[^0-9.]/g, '');
  const target = parseFloat(numPart) || 0;
  const decimals = numPart.includes('.') ? numPart.split('.')[1].length : 0;

  const formatValue = (num) => {
    let formatted;
    if (decimals > 0) {
      formatted = num.toFixed(decimals);
    } else {
      const rounded = Math.round(num);
      formatted = padLength > 0 ? String(rounded).padStart(padLength, '0') : String(rounded);
    }
    return `${prefix}${formatted}${suffix}`;
  };

  const initialDisplay = formatValue(0);

  useEffect(() => {
    if (!isInView || !ref.current) return;

    // Accessibility check: skip animation if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      ref.current.textContent = formatValue(target);
      return;
    }

    let animationFrameId;
    let timeoutId;
    let startTime = null;

    const startAnimation = () => {
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = (timestamp - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);

        // Quartic ease-out curve (fast acceleration, silky deceleration)
        const eased = 1 - Math.pow(1 - progress, 4);
        const current = eased * target;

        if (ref.current) {
          ref.current.textContent = formatValue(current);
        }

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          if (ref.current) {
            ref.current.textContent = formatValue(target);
          }
        }
      };

      animationFrameId = requestAnimationFrame(step);
    };

    if (delay > 0) {
      timeoutId = setTimeout(startAnimation, delay * 1000);
    } else {
      startAnimation();
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, target, duration, delay, decimals, padLength, prefix, suffix]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {initialDisplay}
    </span>
  );
};

