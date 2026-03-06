import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/logo2.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Why', href: '#why-it-matters' },
    { label: 'Features', href: '#features' },
    { label: 'Agent', href: '#agents' },
    { label: 'Use Cases', href: '#use-cases' },
    { label: 'Contact', href: '#cta' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-md' : 'bg-white/50'
      } backdrop-blur-md`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-2 cursor-pointer">
            <img className="w-12 h-12" src={logo} alt="Zyntegrate logo" />
            <span className="text-xl font-semibold text-gray-900">Zyntegrate</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative px-3 py-2 text-gray-700 font-medium rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  className="absolute inset-0 bg-blue-100/20 rounded-lg"
                  layoutId={`hover-${link.href}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
                <span className="relative z-10">{link.label}</span>
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.03 }}>
              <Button variant="ghost" className="opacity-90 hover:opacity-100 transition-opacity duration-200">
                Sign In
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }}>
              <Button className="bg-blue-600 text-white opacity-95 hover:opacity-100 transition-opacity duration-200">
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="size-6 text-gray-900" /> : <Menu className="size-6 text-gray-900" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-md absolute top-16 left-0 right-0 shadow-md border-t border-gray-200 overflow-hidden"
            >
              <div className="flex flex-col gap-4 px-6 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-700 font-medium text-lg hover:bg-blue-100/30 px-3 py-2 rounded-lg transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex flex-col gap-3 mt-4">
                  <Button variant="ghost" className="w-full opacity-90 hover:opacity-100 transition-opacity duration-200">
                    Sign In
                  </Button>
                  <Button className="w-full bg-blue-600 text-white opacity-95 hover:opacity-100 transition-opacity duration-200">
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}