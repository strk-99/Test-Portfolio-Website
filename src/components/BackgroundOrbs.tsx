import { motion } from 'framer-motion';

interface Props {
  darkMode: boolean;
}

export default function BackgroundOrbs({ darkMode }: Props) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Primary large orb */}
      <motion.div
        className="absolute rounded-full opacity-30"
        style={{
          width: '600px',
          height: '600px',
          top: '-100px',
          right: '-100px',
          background: darkMode
            ? 'radial-gradient(circle, rgba(14,165,233,0.4) 0%, rgba(2,132,199,0.15) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(14,165,233,0.35) 0%, rgba(186,230,253,0.2) 50%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Secondary orb */}
      <motion.div
        className="absolute rounded-full opacity-25"
        style={{
          width: '500px',
          height: '500px',
          bottom: '10%',
          left: '-80px',
          background: darkMode
            ? 'radial-gradient(circle, rgba(56,189,248,0.35) 0%, rgba(14,165,233,0.1) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(56,189,248,0.3) 0%, rgba(224,242,254,0.2) 50%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Center accent orb */}
      <motion.div
        className="absolute rounded-full opacity-15"
        style={{
          width: '400px',
          height: '400px',
          top: '40%',
          left: '40%',
          transform: 'translate(-50%, -50%)',
          background: darkMode
            ? 'radial-gradient(circle, rgba(125,211,252,0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(125,211,252,0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* Small floating dots */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${8 + i * 4}px`,
            height: `${8 + i * 4}px`,
            top: `${15 + i * 18}%`,
            left: `${10 + i * 16}%`,
            background: darkMode
              ? 'rgba(56, 189, 248, 0.4)'
              : 'rgba(14, 165, 233, 0.25)',
            filter: 'blur(2px)',
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.8,
          }}
        />
      ))}
    </div>
  );
}
