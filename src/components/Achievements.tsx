import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap, Shield, Globe, Award } from 'lucide-react';
import { achievements } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Props {
  darkMode: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  'trending-up': <TrendingUp size={24} />,
  users: <Users size={24} />,
  zap: <Zap size={24} />,
  shield: <Shield size={24} />,
  globe: <Globe size={24} />,
  award: <Award size={24} />,
};

const cardAccents = [
  'from-sky-500/10 to-sky-600/5',
  'from-emerald-500/10 to-emerald-600/5',
  'from-violet-500/10 to-violet-600/5',
  'from-orange-500/10 to-orange-600/5',
  'from-rose-500/10 to-rose-600/5',
  'from-amber-500/10 to-amber-600/5',
];

const metricColors = [
  'text-sky-400',
  'text-emerald-400',
  'text-violet-400',
  'text-orange-400',
  'text-rose-400',
  'text-amber-400',
];

const iconBgs = [
  'bg-sky-500/15 text-sky-400',
  'bg-emerald-500/15 text-emerald-400',
  'bg-violet-500/15 text-violet-400',
  'bg-orange-500/15 text-orange-400',
  'bg-rose-500/15 text-rose-400',
  'bg-amber-500/15 text-amber-400',
];

const iconBgsLight = [
  'bg-sky-100 text-sky-600',
  'bg-emerald-100 text-emerald-600',
  'bg-violet-100 text-violet-600',
  'bg-orange-100 text-orange-600',
  'bg-rose-100 text-rose-600',
  'bg-amber-100 text-amber-600',
];

export default function Achievements({ darkMode }: Props) {
  const { ref, isInView } = useScrollAnimation(0.08);

  return (
    <section id="achievements" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`text-xs font-semibold tracking-widest uppercase mb-3 block
            ${darkMode ? 'text-sky-400' : 'text-sky-600'}`}>
            Impact & Results
          </span>
          <h2 className={`text-4xl sm:text-5xl font-bold tracking-tight mb-4
            ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-300/70' : 'text-slate-500'}`}>
            Measurable impact delivered across organizations, teams, and technology ecosystems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative rounded-2xl p-7 overflow-hidden transition-all duration-300 cursor-default
                ${darkMode ? 'glass-card-dark hover:border-sky-500/25' : 'glass-card hover:border-sky-200'}
                hover:shadow-2xl`}
            >
              {/* Gradient accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cardAccents[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 transition-transform duration-300 group-hover:scale-110
                  ${darkMode ? iconBgs[i] : iconBgsLight[i]}`}>
                  {iconMap[item.icon]}
                </div>

                {/* Metric */}
                <div className={`text-4xl font-bold mb-2 ${metricColors[i]}`}>
                  {item.metric}
                </div>

                <h3 className={`text-lg font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                  {item.title}
                </h3>

                <p className={`text-sm leading-relaxed mb-5 ${darkMode ? 'text-slate-300/70' : 'text-slate-500'}`}>
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium
                        ${darkMode
                          ? 'bg-sky-950/60 text-sky-400 border border-sky-800/50'
                          : 'bg-sky-50 text-sky-700 border border-sky-100'
                        }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
