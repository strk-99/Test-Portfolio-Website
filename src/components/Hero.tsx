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
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Hero({ darkMode }: Props) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto w-full"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border
            ${darkMode
              ? 'bg-sky-500/10 border-sky-500/30 text-sky-300'
              : 'bg-sky-50 border-sky-200 text-sky-700'
            }`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <Sparkles size={12} />
            Available for Strategic Consulting
          </div>
        </motion.div>

        {/* Main hero content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={itemVariants} className="mb-3">
              <span className={`text-sm font-semibold tracking-widest uppercase
                ${darkMode ? 'text-sky-400' : 'text-sky-600'}`}>
                Cloud & DevOps Architecture
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-4
                ${darkMode ? 'text-white' : 'text-slate-900'}`}
            >
              {profile.name.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? 'text-gradient block' : 'block'}>
                  {word}
                </span>
              ))}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`text-lg sm:text-xl font-medium mb-6
                ${darkMode ? 'text-sky-200/80' : 'text-sky-700'}`}
            >
              {profile.title}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className={`text-base sm:text-lg leading-relaxed mb-8 max-w-xl lg:max-w-none
                ${darkMode ? 'text-slate-300/80' : 'text-slate-600'}`}
            >
              {profile.summary}
            </motion.p>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className={`flex items-center gap-2 mb-8 justify-center lg:justify-start text-sm
                ${darkMode ? 'text-sky-300/70' : 'text-slate-500'}`}
            >
              <MapPin size={14} />
              {profile.location}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm
                  transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
              <a
                href="#overview"
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200
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
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href={`mailto:${profile.email}`}
                className={`flex items-center gap-2 text-sm font-medium transition-colors group
                  ${darkMode ? 'text-sky-300/70 hover:text-sky-200' : 'text-slate-500 hover:text-sky-600'}`}
                aria-label="Send email"
              >
                <span className={`p-2 rounded-lg transition-colors
                  ${darkMode ? 'bg-sky-500/10 group-hover:bg-sky-500/20' : 'bg-sky-50 group-hover:bg-sky-100'}`}>
                  <Mail size={16} />
                </span>
                <span className="hidden sm:block">Email</span>
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
                  <LinkedinIcon size={16} />
                </span>
                <span className="hidden sm:block">LinkedIn</span>
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
                  <GithubIcon size={16} />
                </span>
                <span className="hidden sm:block">GitHub</span>
              </a>
            </motion.div>
          </div>

          {/* Right: Profile card */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-sky-400/20 blur-3xl scale-110" />

              {/* Profile glass card */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: 0 }}
                initial={{ rotate: 2 }}
                className={`relative rounded-3xl p-8 w-80 shadow-2xl
                  ${darkMode ? 'glass-card-dark' : 'glass-card'}`}
              >
                {/* Avatar */}
                <div className="flex flex-col items-center gap-4 mb-6">
                  <div className="relative">
                    <div className={`w-28 h-28 rounded-2xl flex items-center justify-center text-4xl font-bold shadow-xl
                      ${darkMode
                        ? 'bg-gradient-to-br from-sky-500/30 to-sky-700/20 text-sky-200 border border-sky-500/20'
                        : 'bg-gradient-to-br from-sky-100 to-sky-200 text-sky-700 border border-sky-300/50'
                      }`}>
                      AR
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white shadow-md" />
                  </div>
                  <div className="text-center">
                    <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                      {profile.name}
                    </h2>
                    <p className={`text-sm mt-1 ${darkMode ? 'text-sky-300/80' : 'text-sky-600'}`}>
                      {profile.title}
                    </p>
                  </div>
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-3">
                  {overviewStats.map((stat) => (
                    <div
                      key={stat.label}
                      className={`rounded-xl p-3 text-center
                        ${darkMode ? 'bg-sky-950/50 border border-sky-800/30' : 'bg-sky-50/80 border border-sky-100'}`}
                    >
                      <div className={`text-xl font-bold ${darkMode ? 'text-sky-300' : 'text-sky-600'}`}>
                        {stat.value}
                      </div>
                      <div className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
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
          className="flex justify-center mt-16"
        >
          <motion.a
            href="#overview"
            className={`flex flex-col items-center gap-2 text-xs font-medium transition-colors
              ${darkMode ? 'text-sky-400/60 hover:text-sky-300' : 'text-slate-400 hover:text-sky-500'}`}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            aria-label="Scroll to overview"
          >
            <span>Scroll to explore</span>
            <ChevronDown size={18} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
