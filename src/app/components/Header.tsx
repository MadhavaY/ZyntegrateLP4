import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/logo4.jpg'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
  href="#hero"
  onClick={(e) => handleNavClick(e, '#hero')}
  className="flex items-center gap-2 cursor-pointer"
>
  <img className="w-12 h-12" src={logo} alt="Zyntegrate logo" />
  <span className="font-semibold text-xl text-gray-900">Zyntegrate</span>
</a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#why-it-matters"
  onClick={(e) => handleNavClick(e, '#why-it-matters')}
  className="relative px-3 py-1.5 text-gray-600 hover:text-blue-700 font-medium rounded-full bg-transparent hover:bg-blue-100 transition-all duration-200"
>
  Why
</a>
            <a
              href="#features"
              onClick={(e) => handleNavClick(e, '#features')}
              className="px-3 py-1.5 text-gray-600 hover:text-blue-700 font-medium rounded-full bg-transparent hover:bg-blue-100 transition-all duration-200"
            >
              Features
            </a>
             <a
              href="#agents"
              onClick={(e) => handleNavClick(e, '#agents')}
              className="px-3 py-1.5 text-gray-600 hover:text-blue-700 font-medium rounded-full bg-transparent hover:bg-blue-100 transition-all duration-200"
            >
              Agent
            </a>
            <a
              href="#use-cases"
              onClick={(e) => handleNavClick(e, '#use-cases')}
              className="px-3 py-1.5 text-gray-600 hover:text-blue-700 font-medium rounded-full bg-transparent hover:bg-blue-100 transition-all duration-200"
            >
              Use Cases
            </a>
            <a
              href="#cta"
              className="px-3 py-1.5 text-gray-600 hover:text-blue-700 font-medium rounded-full bg-transparent hover:bg-blue-100 transition-all duration-200"
            >
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/30">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="size-6 text-gray-900" />
            ) : (
              <Menu className="size-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-gray-200">
                <div className="flex flex-col gap-4">
                  <a
                    href="#features"
                    onClick={(e) => handleNavClick(e, '#features')}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Features
                  </a>
                  <a
                    href="#use-cases"
                    onClick={(e) => handleNavClick(e, '#use-cases')}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Use Cases
                  </a>
                  <a
                    href="#pricing"
                    onClick={(e) => handleNavClick(e, '#pricing')}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Pricing
                  </a>
                  <a
                    href="#docs"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Docs
                  </a>
                  <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                    <Button variant="ghost" className="w-full">Sign In</Button>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">Get Started</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}