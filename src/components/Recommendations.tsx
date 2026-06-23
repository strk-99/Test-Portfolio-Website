import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { recommendations } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Props {
  darkMode: boolean;
}

const avatarColors = [
  'from-sky-400 to-sky-600',
  'from-violet-400 to-violet-600',
  'from-emerald-400 to-emerald-600',
  'from-amber-400 to-amber-600',
];

export default function Recommendations({ darkMode }: Props) {
  const { ref, isInView } = useScrollAnimation(0.08);

  return (
    <section id="recommendations" className="py-16 px-4 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`text-xs font-semibold tracking-widest uppercase mb-3 block
            ${darkMode ? 'text-sky-400' : 'text-sky-600'}`}>
            Social Proof
          </span>
          <h2 className={`text-4xl sm:text-5xl font-bold tracking-tight mb-4
            ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            What Leaders <span className="text-gradient">Say</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-300/70' : 'text-slate-500'}`}>
            Testimonials from executives, peers, and team members across the journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {recommendations.map((rec, i) => (
            <motion.div
              key={rec.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group relative rounded-2xl p-5 sm:p-8 overflow-hidden transition-all duration-300
                ${darkMode ? 'glass-card-dark hover:border-sky-500/25' : 'glass-card hover:border-sky-200'}
                hover:shadow-xl`}
            >
              {/* Quote icon */}
              <div className={`absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity
                ${darkMode ? 'text-sky-400' : 'text-sky-400'}`}>
                <Quote size={32} />
              </div>

              {/* Quote text */}
              <p className={`text-sm leading-relaxed mb-8 relative z-10
                ${darkMode ? 'text-slate-300/85' : 'text-slate-600'}`}>
                "{rec.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold text-white shadow-lg bg-gradient-to-br ${avatarColors[i % avatarColors.length]}`}>
                  {rec.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                    {rec.name}
                  </div>
                  <div className={`text-xs mt-0.5 truncate ${darkMode ? 'text-sky-300/70' : 'text-sky-600'}`}>
                    {rec.role} · {rec.company}
                  </div>
                </div>
                <div className="flex-shrink-0 text-right">
                  <span className={`inline-block px-2 py-0.5 rounded text-xs
                    ${darkMode ? 'bg-sky-900/40 text-sky-400' : 'bg-sky-50 text-sky-600'}`}>
                    {rec.relationship}
                  </span>
                  <div className={`text-xs mt-1 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    {rec.year}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
