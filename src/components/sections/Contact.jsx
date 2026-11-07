import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Send, Mail, Phone, MapPin, Copy, Check, ArrowUpRight, Github, Linkedin, Instagram, Sparkles } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [copied, setCopied] = useState(false);

  const emailAddress = 'akhilkamale@gmail.com';
  const phoneNumber = '+91 9392822250';
  const locationCity = 'Tirupati, India';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mykopkbb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Trigger celebratory luxury confetti
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.8 },
            colors: ['#B8A58A', '#8C7659', '#777B6D', '#F1EEE7']
          });
        } catch (err) {}

        setTimeout(() => setStatus('idle'), 6000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-theme-border/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Editorial Inquiry & Direct Channels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-10"
        >
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-theme-text font-normal tracking-tight leading-tight">
              Let's Create <span className="font-display text-theme-accent font-light">Something</span> Meaningful.
            </h2>
          </div>

          <p className="font-sans text-base text-theme-text-secondary leading-relaxed font-light">
            Whether you have a software architecture challenge, an ambitious web product, or an artistic commission in mind, I would love to hear from you.
          </p>

          {/* Direct Communication Cards */}
          <div className="space-y-4 pt-2">
            {/* Email Card with Quick Copy */}
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-4 bg-theme-bg-secondary border border-theme-border hover:border-theme-accent/60 transition-colors flex items-center justify-between shadow-subtle"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 border border-theme-border flex items-center justify-center text-theme-accent">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-theme-text-secondary block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="font-label text-base text-theme-text hover:text-theme-accent transition-colors"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={handleCopyEmail}
                className="p-2 text-theme-text-secondary hover:text-theme-accent transition-colors"
                title="Copy to clipboard"
                aria-label="Copy email"
              >
                {copied ? <Check className="w-4 h-4 text-theme-accent" /> : <Copy className="w-4 h-4" />}
              </motion.button>
            </motion.div>

            {/* Phone & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-4 bg-theme-bg-secondary border border-theme-border hover:border-theme-accent/60 transition-colors flex items-center gap-3 shadow-subtle"
              >
                <div className="w-9 h-9 border border-theme-border flex items-center justify-center text-theme-accent">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-theme-text-secondary block">
                    Phone
                  </span>
                  <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="font-label text-sm text-theme-text hover:text-theme-accent">
                    {phoneNumber}
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-4 bg-theme-bg-secondary border border-theme-border hover:border-theme-accent/60 transition-colors flex items-center gap-3 shadow-subtle"
              >
                <div className="w-9 h-9 border border-theme-border flex items-center justify-center text-theme-accent">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-theme-text-secondary block">
                    Location
                  </span>
                  <span className="font-label text-sm text-theme-text">
                    {locationCity}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Editorial Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 bg-theme-card border border-theme-border p-8 sm:p-12 relative shadow-subtle hover:border-theme-accent/50 transition-colors duration-500"
        >
          <h3 className="font-serif text-2xl sm:text-3xl text-theme-text font-normal mb-8 pb-4 border-b border-theme-border/60">
            Transmit an Inquiry
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label text-[11px] uppercase tracking-widest text-theme-text-secondary block">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Eleanor Vance"
                  className="w-full bg-theme-bg-secondary border border-theme-border px-4 py-3 text-sm text-theme-text placeholder:text-theme-text-secondary/80 focus:outline-none focus:border-theme-accent transition-colors font-sans"
                />
              </div>

              <div className="space-y-2">
                <label className="font-label text-[11px] uppercase tracking-widest text-theme-text-secondary block">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="name@domain.com"
                  className="w-full bg-theme-bg-secondary border border-theme-border px-4 py-3 text-sm text-theme-text placeholder:text-theme-text-secondary/80 focus:outline-none focus:border-theme-accent transition-colors font-sans"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-label text-[11px] uppercase tracking-widest text-theme-text-secondary block">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Software Collaboration, Art Commission, or Consultation"
                className="w-full bg-theme-bg-secondary border border-theme-border px-4 py-3 text-sm text-theme-text placeholder:text-theme-text-secondary/80 focus:outline-none focus:border-theme-accent transition-colors font-sans"
              />
            </div>

            <div className="space-y-2">
              <label className="font-label text-[11px] uppercase tracking-widest text-theme-text-secondary block">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your vision, goals, or timeline..."
                className="w-full bg-theme-bg-secondary border border-theme-border px-4 py-3 text-sm text-theme-text placeholder:text-theme-text-secondary/80 focus:outline-none focus:border-theme-accent transition-colors font-sans resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <MagneticButton
                type="submit"
                variant="primary"
                disabled={status === 'sending'}
                className="w-full sm:w-auto"
              >
                {status === 'sending' ? (
                  <span>Dispatching Inquiry...</span>
                ) : status === 'success' ? (
                  <span className="text-theme-bg font-bold">Message Dispatched Successfully!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </MagneticButton>

              {status === 'error' && (
                <span className="font-sans text-xs text-rose-500 font-light">
                  Unable to send. Please write directly to akhilkamale@gmail.com
                </span>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

