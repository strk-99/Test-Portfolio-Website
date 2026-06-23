import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { MapPin, Mail, ChevronDown, Sparkles } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { profile, overviewStats } from '../data/portfolio';

interface Props {
  darkMode: boolean;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero({ darkMode }: Props) {
  return (
    <section
      id="hero"
      className="relative px-4 pt-28 pb-16"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto w-full"
      >
        {/* Main hero content — text first on mobile, card second */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Text content */}
          <div className="text-center lg:text-left order-1">

            {/* Status badge */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-6">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border
                ${darkMode
                  ? 'bg-sky-500/10 border-sky-500/30 text-sky-300'
                  : 'bg-sky-50 border-sky-200 text-sky-700'
                }`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <Sparkles size={12} />
                Available for New Opportunities
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-2">
              <span className={`text-xs font-semibold tracking-widest uppercase
                ${darkMode ? 'text-sky-400' : 'text-sky-600'}`}>
                Cloud & DevOps Engineering
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-3
                ${darkMode ? 'text-white' : 'text-slate-900'}`}
            >
              {profile.name.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? 'text-gradient' : ''}>
                  {i > 0 ? ' ' : ''}{word}
                </span>
              ))}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`text-base sm:text-lg font-medium mb-4
                ${darkMode ? 'text-sky-200/80' : 'text-sky-700'}`}
            >
              {profile.title}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className={`text-sm sm:text-base leading-relaxed mb-5 mx-auto lg:mx-0 max-w-md lg:max-w-none
                ${darkMode ? 'text-slate-300/80' : 'text-slate-600'}`}
            >
              3+ years building reliable cloud infrastructure at ShellKode, Coimbatore —
              specialising in AWS, Kubernetes, Docker, Jenkins, Ansible and Linux automation.
            </motion.p>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className={`flex items-center gap-1.5 mb-6 justify-center lg:justify-start text-sm
                ${darkMode ? 'text-sky-300/70' : 'text-slate-500'}`}
            >
              <MapPin size={13} />
              {profile.location}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm
                  transition-all duration-200 shadow-lg shadow-sky-500/25 hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
              <a
                href="#overview"
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200
                  border hover:-translate-y-0.5
                  ${darkMode
                    ? 'border-sky-500/30 text-sky-300 hover:bg-sky-500/10'
                    : 'border-sky-200 text-sky-700 hover:bg-sky-50'
                  }`}
              >
                View Profile
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              <a
                href={`mailto:${profile.email}`}
                className={`flex items-center gap-2 text-sm font-medium transition-colors group
                  ${darkMode ? 'text-sky-300/70 hover:text-sky-200' : 'text-slate-500 hover:text-sky-600'}`}
                aria-label="Send email"
              >
                <span className={`p-2 rounded-lg transition-colors
                  ${darkMode ? 'bg-sky-500/10 group-hover:bg-sky-500/20' : 'bg-sky-50 group-hover:bg-sky-100'}`}>
                  <Mail size={15} />
                </span>
                <span>Email</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-sm font-medium transition-colors group
                  ${darkMode ? 'text-sky-300/70 hover:text-sky-200' : 'text-slate-500 hover:text-sky-600'}`}
                aria-label="LinkedIn profile"
              >
                <span className={`p-2 rounded-lg transition-colors
                  ${darkMode ? 'bg-sky-500/10 group-hover:bg-sky-500/20' : 'bg-sky-50 group-hover:bg-sky-100'}`}>
                  <LinkedinIcon size={15} />
                </span>
                <span>LinkedIn</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-sm font-medium transition-colors group
                  ${darkMode ? 'text-sky-300/70 hover:text-sky-200' : 'text-slate-500 hover:text-sky-600'}`}
                aria-label="GitHub profile"
              >
                <span className={`p-2 rounded-lg transition-colors
                  ${darkMode ? 'bg-sky-500/10 group-hover:bg-sky-500/20' : 'bg-sky-50 group-hover:bg-sky-100'}`}>
                  <GithubIcon size={15} />
                </span>
                <span>GitHub</span>
              </a>
            </motion.div>
          </div>

          {/* Right: Profile card */}
          <motion.div
            variants={itemVariants}
            className="order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-sky-400/20 blur-3xl scale-105 pointer-events-none" />

              {/* Profile glass card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative rounded-3xl p-6 shadow-2xl
                  ${darkMode ? 'glass-card-dark' : 'glass-card'}`}
              >
                {/* Avatar row */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-shrink-0">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg
                      ${darkMode
                        ? 'bg-gradient-to-br from-sky-500/30 to-sky-700/20 text-sky-200 border border-sky-500/20'
                        : 'bg-gradient-to-br from-sky-100 to-sky-200 text-sky-700 border border-sky-300/50'
                      }`}>
                      PK
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-sm" />
                  </div>
                  <div>
                    <h2 className={`text-lg font-bold leading-tight ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                      {profile.name}
                    </h2>
                    <p className={`text-xs mt-0.5 ${darkMode ? 'text-sky-300/80' : 'text-sky-600'}`}>
                      {profile.title}
                    </p>
                    <p className={`text-xs mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      ShellKode · Coimbatore
                    </p>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {overviewStats.map((stat) => (
                    <div
                      key={stat.label}
                      className={`rounded-xl p-3 text-center
                        ${darkMode ? 'bg-sky-950/50 border border-sky-800/30' : 'bg-sky-50/80 border border-sky-100'}`}
                    >
                      <div className={`text-xl font-bold ${darkMode ? 'text-sky-300' : 'text-sky-600'}`}>
                        {stat.value}
                      </div>
                      <div className={`text-xs mt-0.5 leading-tight ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative dots */}
                <div className="absolute top-4 right-4 flex gap-1">
                  {['bg-red-400', 'bg-yellow-400', 'bg-green-400'].map((c, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full ${c} opacity-60`} />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-14"
        >
          <motion.a
            href="#overview"
            className={`flex flex-col items-center gap-1.5 text-xs font-medium transition-colors
              ${darkMode ? 'text-sky-400/60 hover:text-sky-300' : 'text-slate-400 hover:text-sky-500'}`}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            aria-label="Scroll to overview"
          >
            <span>Scroll to explore</span>
            <ChevronDown size={16} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
