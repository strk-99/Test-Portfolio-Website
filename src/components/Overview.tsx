import { motion } from 'framer-motion';
import { Cloud, Users, TrendingUp, Award, CheckCircle } from 'lucide-react';
import { overviewStats, coreExpertise, profile } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Props {
  darkMode: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  cloud: <Cloud size={22} />,
  users: <Users size={22} />,
  'trending-up': <TrendingUp size={22} />,
  award: <Award size={22} />,
};

export default function Overview({ darkMode }: Props) {
  const { ref, isInView } = useScrollAnimation(0.15);

  const cardBase = darkMode ? 'glass-card-dark' : 'glass-card';

  return (
    <section id="overview" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`text-xs font-semibold tracking-widest uppercase mb-3 block
            ${darkMode ? 'text-sky-400' : 'text-sky-600'}`}>
            Professional Overview
          </span>
          <h2 className={`text-4xl sm:text-5xl font-bold tracking-tight mb-4
            ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Architecting the{' '}
            <span className="text-gradient">Future of Cloud</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-300/70' : 'text-slate-500'}`}>
            Two decades of experience transforming how enterprises build, deploy, and operate at scale.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {overviewStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.04, y: -4 }}
              className={`${cardBase} rounded-2xl p-6 text-center transition-all duration-300 cursor-default`}
            >
              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4
                ${darkMode ? 'bg-sky-500/15 text-sky-400' : 'bg-sky-100 text-sky-600'}`}>
                {iconMap[stat.icon]}
              </div>
              <div className={`text-3xl font-bold mb-1 text-gradient`}>
                {stat.value}
              </div>
              <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Core expertise */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${cardBase} rounded-2xl p-8 lg:col-span-3`}
          >
            <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
              Core Expertise
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {coreExpertise.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  className={`flex items-start gap-3 p-3 rounded-xl transition-colors
                    ${darkMode ? 'hover:bg-sky-900/30' : 'hover:bg-sky-50'}`}
                >
                  <CheckCircle
                    size={16}
                    className={`mt-0.5 flex-shrink-0 ${darkMode ? 'text-sky-400' : 'text-sky-500'}`}
                  />
                  <span className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy + Leadership */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`${cardBase} rounded-2xl p-8 flex-1`}
            >
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                Philosophy
              </h3>
              <blockquote className={`text-sm leading-relaxed italic border-l-2 pl-4 mb-4
                ${darkMode ? 'text-slate-300/80 border-sky-500/40' : 'text-slate-600 border-sky-400'}`}>
                "Infrastructure is a product. When engineers love their platform, they ship better software. My mission is to make the right thing the easy thing."
              </blockquote>
              <p className={`text-xs font-medium ${darkMode ? 'text-sky-400' : 'text-sky-600'}`}>
                — {profile.name}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`${cardBase} rounded-2xl p-8`}
            >
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                Leadership Style
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Servant Leader', 'Technical Mentor', 'Strategic Thinker', 'Collaborative', 'Data-Driven', 'Empathetic'].map((trait) => (
                  <span
                    key={trait}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium
                      ${darkMode ? 'bg-sky-500/15 text-sky-300 border border-sky-500/20' : 'bg-sky-50 text-sky-700 border border-sky-200'}`}
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
