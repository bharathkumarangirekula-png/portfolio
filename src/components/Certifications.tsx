import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Calendar, Building, ExternalLink, Sparkles, X, Info } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolio.ts';
import { CertificationItem } from '../types.ts';

export default function Certifications() {
  const [activeModalCert, setActiveModalCert] = useState<CertificationItem | null>(null);

  return (
    <section
      id="certifications"
      className="py-16 md:py-24 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-cyan-600 dark:text-cyan-400 mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Structured course certifications and technical competencies.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS_DATA.map((cert, index) => {
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Badge Icon & Index */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200/60 dark:border-cyan-800/60 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Certificate Name */}
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 leading-snug">
                    {cert.name}
                  </h3>

                  {/* Issuing Organization */}
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-2">
                    <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="font-medium">{cert.issuer}</span>
                  </div>

                  {/* Year */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{cert.year}</span>
                  </div>
                </div>

                {/* View Certificate Button */}
                <div>
                  <button
                    id={`view-cert-btn-${cert.id}`}
                    onClick={() => setActiveModalCert(cert)}
                    className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-cyan-50 dark:hover:bg-cyan-950/50 hover:text-cyan-600 dark:hover:text-cyan-400 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 text-xs sm:text-sm font-semibold transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certificate Modal Dialog */}
        <AnimatePresence>
          {activeModalCert && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm"
              onClick={() => setActiveModalCert(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl relative"
              >
                <button
                  onClick={() => setActiveModalCert(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-950/70 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white">
                      {activeModalCert.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {activeModalCert.issuer} • {activeModalCert.year}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 mb-5 text-xs text-slate-600 dark:text-slate-300 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-300 font-semibold">
                    <Info className="w-4 h-4" />
                    <span>Editable Certificate Card</span>
                  </div>
                  <p>
                    Update certificate titles, credential IDs, verification links, or PDF URLs inside{' '}
                    <code className="font-mono text-cyan-600 dark:text-cyan-400 font-bold">
                      src/data/portfolio.ts
                    </code>
                    .
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setActiveModalCert(null)}
                    className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs sm:text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
