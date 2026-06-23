import { motion } from 'framer-motion';
import { Briefcase, Star, TrendingUp, Anchor } from 'lucide-react';
import { timelineEvents } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Props {
  darkMode: boolean;
}

const typeConfig = {
  current: {
    icon: <Star size={16} />,
    labelDark: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
    labelLight: 'bg-sky-100 text-sky-700 border-sky-200',
    dotDark: 'bg-sky-500 shadow-sky-500/50',
    dotLight: 'bg-sky-500 shadow-sky-500/40',
    label: 'Current',
  },
  milestone: {
    icon: <TrendingUp size={16} />,
    labelDark: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25',
    labelLight: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    dotDark: 'bg-emerald-500 shadow-emerald-500/40',
    dotLight: 'bg-emerald-500 shadow-emerald-500/30',
    label: 'Milestone',
  },
  growth: {
    icon: <Briefcase size={16} />,
    labelDark: 'bg-violet-500/15 text-violet-300 border-violet-500/25',
    labelLight: 'bg-violet-50 text-violet-700 border-violet-200',
    dotDark: 'bg-violet-500 shadow-violet-500/40',
    dotLight: 'bg-violet-500 shadow-violet-500/30',
    label: 'Growth',
  },
  foundation: {
    icon: <Anchor size={16} />,
    labelDark: 'bg-slate-500/15 text-slate-300 border-slate-600/25',
    labelLight: 'bg-slate-100 text-slate-600 border-slate-200',
    dotDark: 'bg-slate-400 shadow-slate-500/30',
    dotLight: 'bg-slate-400 shadow-slate-400/30',
    label: 'Foundation',
  },
};

export default function Timeline({ darkMode }: Props) {
  const { ref, isInView } = useScrollAnimation(0.05);

  return (
    <section id="timeline" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`text-xs font-semibold tracking-widest uppercase mb-3 block
            ${darkMode ? 'text-sky-400' : 'text-sky-600'}`}>
            Career Journey
          </span>
          <h2 className={`text-4xl sm:text-5xl font-bold tracking-tight mb-4
            ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Professional <span className="text-gradient">Timeline</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-300/70' : 'text-slate-500'}`}>
            A 15-year journey of continuous growth, leadership, and technical excellence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className={`absolute left-6 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px
            ${darkMode ? 'bg-gradient-to-b from-sky-500/60 via-sky-700/30 to-transparent' : 'bg-gradient-to-b from-sky-400/60 via-sky-300/30 to-transparent'}`} />

          <div className="space-y-10">
            {timelineEvents.map((event, i) => {
              const config = typeConfig[event.type as keyof typeof typeConfig];
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={`${event.year}-${i}`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className={`relative flex items-start gap-6 sm:gap-0
                    ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'} flex-row`}
                >
                  {/* Mobile/Desktop timeline dot */}
                  <div className="relative flex-shrink-0 sm:w-1/2 sm:flex sm:justify-center">
                    {/* Dot */}
                    <div className={`absolute left-6 sm:left-1/2 sm:-translate-x-1/2 -translate-x-1/2
                      w-4 h-4 rounded-full shadow-lg border-2
                      ${darkMode ? `${config.dotDark} border-sky-950` : `${config.dotLight} border-white`}`}
                      style={{ top: '20px' }}
                    />
                    {/* Year label — desktop only */}
                    <div className={`hidden sm:block text-right ${isLeft ? 'pr-10' : 'pl-10 text-left'}`}>
                      <span className={`text-3xl font-bold ${darkMode ? 'text-sky-500/40' : 'text-sky-200'}`}>
                        {event.year}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`flex-1 ml-10 sm:ml-0 sm:w-1/2 ${isLeft ? 'sm:pl-10' : 'sm:pr-10'}`}>
                    <motion.div
                      whileHover={{ scale: 1.01, y: -2 }}
                      className={`rounded-2xl p-6 transition-all duration-300
                        ${darkMode ? 'glass-card-dark hover:border-sky-600/30' : 'glass-card hover:border-sky-200'}
                        hover:shadow-lg`}
                    >
                      {/* Year (mobile) + badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`sm:hidden text-2xl font-bold ${darkMode ? 'text-sky-500/60' : 'text-sky-300'}`}>
                          {event.year}
                        </span>
                        <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border
                          ${darkMode ? config.labelDark : config.labelLight}`}>
                          {config.icon}
                          {config.label}
                        </span>
                      </div>

                      <h3 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                        {event.role}
                      </h3>
                      <p className={`text-sm font-medium mb-3 ${darkMode ? 'text-sky-300/80' : 'text-sky-600'}`}>
                        {event.company}
                      </p>
                      <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-slate-300/70' : 'text-slate-600'}`}>
                        {event.description}
                      </p>

                      {/* Achievement chips */}
                      <div className="flex flex-wrap gap-2">
                        {event.achievements.map((ach) => (
                          <span
                            key={ach}
                            className={`px-2.5 py-1 rounded-lg text-xs font-medium
                              ${darkMode
                                ? 'bg-sky-950/60 text-sky-400 border border-sky-800/50'
                                : 'bg-sky-50 text-sky-700 border border-sky-100'
                              }`}
                          >
                            {ach}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
