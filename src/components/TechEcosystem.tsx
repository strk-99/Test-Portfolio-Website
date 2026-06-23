import { motion } from 'framer-motion';
import { technologies } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Props {
  darkMode: boolean;
}

const categoryColors: Record<string, string> = {
  Cloud: '#0ea5e9',
  Containers: '#2563eb',
  IaC: '#7c3aed',
  'CI/CD': '#16a34a',
  GitOps: '#059669',
  Monitoring: '#d97706',
  OS: '#dc2626',
  Scripting: '#0369a1',
  'Service Mesh': '#7c3aed',
  Security: '#be123c',
};

export default function TechEcosystem({ darkMode }: Props) {
  const { ref, isInView } = useScrollAnimation(0.08);

  const categories = [...new Set(technologies.map((t) => t.category))];

  return (
    <section id="tech-ecosystem" className="py-16 px-4 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`text-xs font-semibold tracking-widest uppercase mb-3 block
            ${darkMode ? 'text-sky-400' : 'text-sky-600'}`}>
            Technology Stack
          </span>
          <h2 className={`text-4xl sm:text-5xl font-bold tracking-tight mb-4
            ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Technology <span className="text-gradient">Ecosystem</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-300/70' : 'text-slate-500'}`}>
            Deep expertise across the modern cloud-native technology landscape.
          </p>
        </motion.div>

        {/* Technology cards with proficiency */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {technologies.map((tech, i) => {
            const color = categoryColors[tech.category] || '#0ea5e9';
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className={`group rounded-2xl p-5 transition-all duration-200 cursor-default
                  ${darkMode ? 'glass-card-dark hover:border-sky-500/30' : 'glass-card hover:border-sky-200'}
                  hover:shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-sm"
                    style={{ background: `${color}18`, border: `1px solid ${color}25` }}
                  >
                    {tech.logo}
                  </div>
                  <div>
                    <div className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                      {tech.name}
                    </div>
                    <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-400'}`}>
                      {tech.category}
                    </div>
                  </div>
                </div>

                {/* Proficiency bar */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-400'}`}>
                      Proficiency
                    </span>
                    <span className="text-xs font-semibold" style={{ color }}>
                      {tech.proficiency}%
                    </span>
                  </div>
                  <div className={`h-1.5 rounded-full overflow-hidden ${darkMode ? 'bg-sky-950/60' : 'bg-slate-100'}`}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${tech.proficiency}%` } : { width: 0 }}
                      transition={{ duration: 0.8, delay: i * 0.04 + 0.3, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Category legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`rounded-2xl p-6 ${darkMode ? 'glass-card-dark' : 'glass-card'}`}
        >
          <h3 className={`text-sm font-semibold mb-4 ${darkMode ? 'text-sky-300' : 'text-sky-600'}`}>
            Category Overview
          </h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => {
              const color = categoryColors[cat] || '#0ea5e9';
              const count = technologies.filter((t) => t.category === cat).length;
              return (
                <div
                  key={cat}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium"
                  style={{
                    background: `${color}12`,
                    border: `1px solid ${color}25`,
                    color,
                  }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: color }} />
                  {cat}
                  <span className="opacity-60">({count})</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
