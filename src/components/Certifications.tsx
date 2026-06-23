import { motion } from 'framer-motion';
import { useState } from 'react';
import { Award } from 'lucide-react';
import { certifications } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Props {
  darkMode: boolean;
}

const categories = ['All', 'AWS'];

const categoryColors: Record<string, string> = {
  AWS: '#FF9900',
  IaC: '#7B42BC',
  Kubernetes: '#326CE5',
  Linux: '#EE0000',
};

export default function Certifications({ darkMode }: Props) {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, isInView } = useScrollAnimation(0.1);

  const filtered = activeCategory === 'All'
    ? certifications
    : certifications.filter((c) => c.category === activeCategory);

  return (
    <section id="certifications" className="py-16 px-4 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`text-xs font-semibold tracking-widest uppercase mb-3 block
            ${darkMode ? 'text-sky-400' : 'text-sky-600'}`}>
            Credentials
          </span>
          <h2 className={`text-4xl sm:text-5xl font-bold tracking-tight mb-4
            ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Certified <span className="text-gradient">Excellence</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto mb-8 ${darkMode ? 'text-slate-300/70' : 'text-slate-500'}`}>
            Industry-recognized certifications across leading cloud platforms and DevOps technologies.
          </p>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                  ${activeCategory === cat
                    ? darkMode
                      ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30'
                      : 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                    : darkMode
                      ? 'bg-sky-900/40 text-sky-300 border border-sky-700/40 hover:bg-sky-800/50'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-sky-50 hover:border-sky-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((cert, i) => (
            <motion.div
              key={cert.credentialId}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group relative rounded-2xl p-6 cursor-default transition-all duration-300
                ${darkMode ? 'glass-card-dark hover:border-sky-500/30' : 'glass-card hover:border-sky-300/50'}
                hover:shadow-xl`}
            >
              {/* Category accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-60"
                style={{ background: categoryColors[cert.category] || '#0ea5e9' }}
              />

              {/* Badge and level */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shadow-lg"
                  style={{
                    background: darkMode
                      ? `${categoryColors[cert.category]}20`
                      : `${categoryColors[cert.category]}15`,
                    border: `1px solid ${categoryColors[cert.category]}30`,
                  }}
                >
                  {cert.badge}
                </div>
                <span
                  className="px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: darkMode
                      ? `${categoryColors[cert.category]}15`
                      : `${categoryColors[cert.category]}12`,
                    color: categoryColors[cert.category],
                    border: `1px solid ${categoryColors[cert.category]}25`,
                  }}
                >
                  {cert.level}
                </span>
              </div>

              {/* Cert info */}
              <h3 className={`text-base font-bold mb-1 leading-tight
                ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                {cert.name}
              </h3>
              <p className={`text-sm mb-4 ${darkMode ? 'text-sky-300/70' : 'text-sky-600'}`}>
                {cert.issuer}
              </p>

              {/* Footer */}
              <div className={`flex items-center gap-1.5 text-xs
                ${darkMode ? 'text-slate-400' : 'text-slate-400'}`}>
                <Award size={12} />
                <span>{cert.year}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
