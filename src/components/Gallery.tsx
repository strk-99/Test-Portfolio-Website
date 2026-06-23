import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Props {
  darkMode: boolean;
}

const categoryColors: Record<string, string> = {
  Speaking: 'bg-sky-500/15 text-sky-300 border-sky-500/25',
  Conference: 'bg-violet-500/15 text-violet-300 border-violet-500/25',
  Leadership: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25',
  Project: 'bg-orange-500/15 text-orange-300 border-orange-500/25',
  Workshop: 'bg-rose-500/15 text-rose-300 border-rose-500/25',
  Milestone: 'bg-amber-500/15 text-amber-300 border-amber-500/25',
};

const categoryColorsLight: Record<string, string> = {
  Speaking: 'bg-sky-100 text-sky-700 border-sky-200',
  Conference: 'bg-violet-100 text-violet-700 border-violet-200',
  Leadership: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  Project: 'bg-orange-100 text-orange-700 border-orange-200',
  Workshop: 'bg-rose-100 text-rose-700 border-rose-200',
  Milestone: 'bg-amber-100 text-amber-700 border-amber-200',
};

const placeholderGradients = [
  'from-sky-500/30 to-blue-600/20',
  'from-violet-500/30 to-purple-600/20',
  'from-emerald-500/30 to-teal-600/20',
  'from-orange-500/30 to-amber-600/20',
  'from-rose-500/30 to-pink-600/20',
  'from-amber-500/30 to-yellow-600/20',
];

export default function Gallery({ darkMode }: Props) {
  const { ref, isInView } = useScrollAnimation(0.08);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : 0));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % galleryImages.length : 0));

  return (
    <section id="gallery" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`text-xs font-semibold tracking-widest uppercase mb-3 block
            ${darkMode ? 'text-sky-400' : 'text-sky-600'}`}>
            Highlights
          </span>
          <h2 className={`text-4xl sm:text-5xl font-bold tracking-tight mb-4
            ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Professional <span className="text-gradient">Gallery</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-300/70' : 'text-slate-500'}`}>
            Moments from conferences, workshops, and leadership milestones.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.03, y: -4 }}
              onClick={() => openLightbox(i)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300
                ${darkMode ? 'glass-card-dark' : 'glass-card'}
                hover:shadow-2xl aspect-[4/3]`}
            >
              {/* Placeholder image */}
              <div className={`absolute inset-0 bg-gradient-to-br ${placeholderGradients[i]} flex items-center justify-center`}>
                <div className="text-center">
                  <Camera size={32} className={darkMode ? 'text-sky-300/40' : 'text-sky-400/40'} />
                  <p className={`text-xs mt-2 ${darkMode ? 'text-sky-300/40' : 'text-sky-500/40'}`}>
                    Photo placeholder
                  </p>
                </div>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
                opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium border mb-2 w-fit
                  ${darkMode ? categoryColors[img.category] || categoryColors.Speaking : categoryColorsLight[img.category] || categoryColorsLight.Speaking}`}>
                  {img.category}
                </span>
                <p className="text-white text-sm font-medium leading-snug">
                  {img.caption}
                </p>
              </div>

              {/* Category badge (always visible) */}
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-0.5 rounded text-xs font-medium border
                  ${darkMode ? categoryColors[img.category] || categoryColors.Speaking : categoryColorsLight[img.category] || categoryColorsLight.Speaking}`}>
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full"
            >
              <div className={`rounded-2xl overflow-hidden bg-gradient-to-br ${placeholderGradients[lightboxIndex]} aspect-[4/3] flex items-center justify-center mb-4`}>
                <Camera size={48} className="text-white/30" />
              </div>
              <p className="text-white text-center font-medium">
                {galleryImages[lightboxIndex].caption}
              </p>
              <p className="text-white/50 text-center text-sm mt-1">
                {lightboxIndex + 1} / {galleryImages.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
