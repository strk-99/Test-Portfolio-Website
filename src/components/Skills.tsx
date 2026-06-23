import { motion } from 'framer-motion';
import { Cloud, Code, Box, GitMerge, Activity, Wrench, Shield, Terminal } from 'lucide-react';
import { skillCategories } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Props {
  darkMode: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  cloud: <Cloud size={18} />,
  code: <Code size={18} />,
  box: <Box size={18} />,
  'git-merge': <GitMerge size={18} />,
  activity: <Activity size={18} />,
  tool: <Wrench size={18} />,
  shield: <Shield size={18} />,
  terminal: <Terminal size={18} />,
};

export default function Skills({ darkMode }: Props) {
  const { ref, isInView } = useScrollAnimation(0.08);

  return (
    <section id="skills" className="py-16 px-4 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`text-xs font-semibold tracking-widest uppercase mb-3 block
            ${darkMode ? 'text-sky-400' : 'text-sky-600'}`}>
            Technical Proficiency
          </span>
          <h2 className={`text-4xl sm:text-5xl font-bold tracking-tight mb-4
            ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-300/70' : 'text-slate-500'}`}>
            A comprehensive toolkit spanning cloud, automation, security, and observability.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              whileHover={{ y: -4 }}
              className={`rounded-2xl p-6 transition-all duration-300
                ${darkMode ? 'glass-card-dark hover:border-sky-500/30' : 'glass-card hover:border-sky-200'}
                hover:shadow-lg`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2 rounded-lg ${darkMode ? 'bg-sky-500/15 text-sky-400' : 'bg-sky-100 text-sky-600'}`}>
                  {iconMap[category.icon]}
                </div>
                <h3 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                  {category.category}
                </h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: ci * 0.08 + si * 0.05 + 0.2 }}
                    whileHover={{ scale: 1.08 }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-150 cursor-default
                      ${darkMode
                        ? 'bg-sky-950/60 text-sky-300 border border-sky-800/50 hover:bg-sky-900/60 hover:border-sky-600/50'
                        : 'bg-white text-sky-700 border border-sky-100 hover:bg-sky-50 hover:border-sky-300 shadow-sm'
                      }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
