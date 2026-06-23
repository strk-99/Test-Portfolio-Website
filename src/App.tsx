import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundOrbs from './components/BackgroundOrbs';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Achievements from './components/Achievements';
import TechEcosystem from './components/TechEcosystem';
import Recommendations from './components/Recommendations';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function LoadingScreen({ darkMode }: { darkMode: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center
        ${darkMode
          ? 'bg-gradient-to-br from-sky-950 via-slate-950 to-sky-950'
          : 'bg-gradient-to-br from-sky-50 via-white to-sky-100'
        }`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-2xl
          ${darkMode
            ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
            : 'bg-sky-100 text-sky-600 border border-sky-200'
          }`}>
          AR
        </div>
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className={`w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-sky-400' : 'bg-sky-500'}`}
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('portfolio-dark-mode');
    if (stored !== null) return stored === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-dark-mode', String(darkMode));
  }, [darkMode]);

  const toggleDark = () => setDarkMode((d) => !d);

  const bgClass = darkMode
    ? 'bg-gradient-to-br from-sky-950 via-slate-950 to-sky-950'
    : 'bg-gradient-to-br from-sky-50 via-white to-blue-50';

  return (
    <div className={`min-h-screen transition-colors duration-500 ${bgClass}`}>
      <AnimatePresence>{loading && <LoadingScreen darkMode={darkMode} />}</AnimatePresence>

      <BackgroundOrbs darkMode={darkMode} />
      <Navbar darkMode={darkMode} toggleDark={toggleDark} />

      <main className="relative z-10">
        <Hero darkMode={darkMode} />
        <Overview darkMode={darkMode} />
        <Certifications darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Timeline darkMode={darkMode} />
        <Achievements darkMode={darkMode} />
        <TechEcosystem darkMode={darkMode} />
        <Recommendations darkMode={darkMode} />
        <Gallery darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}
