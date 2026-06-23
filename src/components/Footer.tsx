import { motion } from 'framer-motion';


import { profile } from '../data/portfolio';

interface Props {
  darkMode: boolean;
}

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#timeline' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer({ darkMode }: Props) {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative py-12 px-4 border-t
        ${darkMode ? 'border-sky-900/40' : 'border-sky-100'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold
              ${darkMode ? 'bg-sky-500/20 text-sky-300' : 'bg-sky-100 text-sky-600'}`}>
              PK
            </div>
            <span className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-slate-800'}`}>
              {profile.name}
            </span>
            <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-400'}`}>
              · {profile.title}
            </span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`text-xs font-medium transition-colors
                  ${darkMode ? 'text-slate-400 hover:text-sky-300' : 'text-slate-400 hover:text-sky-600'}`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={`my-8 h-px ${darkMode ? 'bg-sky-900/40' : 'bg-sky-100'}`} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            © 2026 Pavithra Karthikeyan. All rights reserved.
          </p>
          <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            Built by STRK
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
