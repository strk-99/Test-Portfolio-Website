import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface Props {
  darkMode: boolean;
  toggleDark: () => void;
}

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#timeline' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Recommendations', href: '#recommendations' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ darkMode, toggleDark }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navBg = scrolled
    ? darkMode
      ? 'bg-sky-950/80 border-sky-800/40'
      : 'bg-white/80 border-sky-200/60'
    : 'bg-transparent border-transparent';

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b backdrop-blur-xl ${navBg}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2 group">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300
                ${darkMode ? 'bg-sky-500/20 text-sky-300 group-hover:bg-sky-500/40' : 'bg-sky-500/15 text-sky-600 group-hover:bg-sky-500/25'}`}>
                AR
              </div>
              <span className={`hidden sm:block font-semibold text-sm tracking-tight transition-colors
                ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                Alex Rivera
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ label, href }) => {
                const sectionId = href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={href}
                    href={href}
                    className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200
                      ${isActive
                        ? darkMode ? 'text-sky-300' : 'text-sky-600'
                        : darkMode ? 'text-sky-100/70 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                      }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className={`absolute inset-0 rounded-lg ${darkMode ? 'bg-sky-500/15' : 'bg-sky-100'}`}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className="relative">{label}</span>
                  </a>
                );
              })}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleDark}
                className={`p-2 rounded-lg transition-all duration-200
                  ${darkMode
                    ? 'text-sky-300 hover:bg-sky-500/20'
                    : 'text-slate-600 hover:bg-slate-100'
                  }`}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <motion.div
                  key={darkMode ? 'dark' : 'light'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </button>

              <a
                href="#contact"
                className={`hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200
                  ${darkMode
                    ? 'bg-sky-500 hover:bg-sky-400 text-white'
                    : 'bg-sky-500 hover:bg-sky-600 text-white'
                  }`}
              >
                Connect
              </a>

              <button
                className={`lg:hidden p-2 rounded-lg transition-colors
                  ${darkMode ? 'text-sky-200 hover:bg-sky-800/50' : 'text-slate-600 hover:bg-slate-100'}`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`fixed top-16 left-0 right-0 z-40 backdrop-blur-xl border-b py-4
              ${darkMode ? 'bg-sky-950/95 border-sky-800/40' : 'bg-white/95 border-sky-100'}`}
          >
            <div className="max-w-7xl mx-auto px-4 flex flex-col gap-1">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors
                    ${darkMode ? 'text-sky-100 hover:bg-sky-800/50' : 'text-slate-700 hover:bg-sky-50'}`}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
