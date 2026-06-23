import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { profile } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Props {
  darkMode: boolean;
}

export default function Contact({ darkMode }: Props) {
  const { ref, isInView } = useScrollAnimation(0.1);

  const contacts = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      description: 'Direct line for opportunities',
    },
    {
      icon: <LinkedinIcon size={20} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/pavithrakarthikeyan',
      href: profile.linkedin,
      description: 'Professional network & endorsements',
    },
    {
      icon: <GithubIcon size={20} />,
      label: 'GitHub',
      value: 'github.com/pavithrakarthikeyan',
      href: profile.github,
      description: 'Open source contributions',
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: profile.location,
      href: null,
      description: 'Open to remote & hybrid',
    },
  ];

  return (
    <section id="contact" className="py-16 px-4 relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`text-xs font-semibold tracking-widest uppercase mb-3 block
            ${darkMode ? 'text-sky-400' : 'text-sky-600'}`}>
            Get In Touch
          </span>
          <h2 className={`text-4xl sm:text-5xl font-bold tracking-tight mb-4
            ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-300/70' : 'text-slate-500'}`}>
            Open to discussing cloud architecture, DevOps transformation, leadership roles, and strategic consulting engagements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Availability + contact cards */}
          <div className="lg:col-span-3 space-y-4">
            {/* Availability banner */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`rounded-2xl p-5 flex items-center gap-4
                ${darkMode ? 'glass-card-dark border-emerald-500/20' : 'glass-card border-emerald-200'}`}
            >
              <div className="relative flex-shrink-0">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              </div>
              <div>
                <div className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                  Available for Engagement
                </div>
                <div className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Currently accepting consulting and fractional CTO opportunities
                </div>
              </div>
              <div className={`ml-auto flex items-center gap-1.5 text-xs font-medium flex-shrink-0
                ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                <Calendar size={13} />
                Q3 2026
              </div>
            </motion.div>

            {/* Contact items */}
            {contacts.map((contact, i) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              >
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300
                      ${darkMode
                        ? 'glass-card-dark hover:border-sky-500/30 hover:bg-sky-900/20'
                        : 'glass-card hover:border-sky-200 hover:bg-sky-50/50'
                      } hover:shadow-lg hover:-translate-y-0.5`}
                  >
                    <div className={`p-2.5 rounded-xl transition-colors
                      ${darkMode ? 'bg-sky-500/15 text-sky-400 group-hover:bg-sky-500/25' : 'bg-sky-100 text-sky-600 group-hover:bg-sky-200'}`}>
                      {contact.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-xs font-medium mb-0.5 ${darkMode ? 'text-sky-400/70' : 'text-sky-500'}`}>
                        {contact.label}
                      </div>
                      <div className={`text-sm font-semibold truncate ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                        {contact.value}
                      </div>
                      <div className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-400'}`}>
                        {contact.description}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className={`flex items-center gap-4 rounded-2xl p-5
                    ${darkMode ? 'glass-card-dark' : 'glass-card'}`}>
                    <div className={`p-2.5 rounded-xl ${darkMode ? 'bg-sky-500/15 text-sky-400' : 'bg-sky-100 text-sky-600'}`}>
                      {contact.icon}
                    </div>
                    <div>
                      <div className={`text-xs font-medium mb-0.5 ${darkMode ? 'text-sky-400/70' : 'text-sky-500'}`}>
                        {contact.label}
                      </div>
                      <div className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                        {contact.value}
                      </div>
                      <div className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-400'}`}>
                        {contact.description}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right: CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className={`rounded-2xl p-8 h-full flex flex-col justify-between
              ${darkMode ? 'glass-card-dark' : 'glass-card'}`}>
              <div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-lg
                  ${darkMode
                    ? 'bg-gradient-to-br from-sky-500/30 to-sky-700/20 text-sky-200 border border-sky-500/20'
                    : 'bg-gradient-to-br from-sky-100 to-sky-200 text-sky-700 border border-sky-300/50'
                  }`}>
                  PK
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                  Let's build something remarkable together.
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-300/70' : 'text-slate-500'}`}>
                  Whether you're scaling cloud infrastructure, transforming DevOps culture, or looking for an engineering leader — I'm here to help.
                </p>

                <div className="space-y-2 mb-8">
                  {[
                    'Cloud Architecture Review',
                    'DevOps Transformation Strategy',
                    'Engineering Leadership & Mentorship',
                    'Platform Engineering Consulting',
                  ].map((item) => (
                    <div key={item} className={`flex items-center gap-2 text-sm
                      ${darkMode ? 'text-slate-300/70' : 'text-slate-600'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-sky-400' : 'bg-sky-500'}`} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={`mailto:${profile.email}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl
                  bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm
                  transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40"
              >
                <Mail size={16} />
                Send a Message
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
