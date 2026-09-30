import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolio.ts';

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-cyan-600 dark:text-cyan-400 mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Academic qualifications and educational background in Computer Science and Engineering.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl relative pl-6 sm:pl-8 before:absolute before:left-3 sm:before:left-4 before:top-4 before:bottom-6 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 via-blue-500 before:to-indigo-500/30 space-y-8">
          {EDUCATION_DATA.map((edu, index) => {
            const isCurrentlyPursuing = edu.status === 'Currently Pursuing';

            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-6 sm:pl-8"
              >
                {/* Timeline Dot Icon */}
                <div
                  className={`absolute -left-[30px] sm:-left-[35px] top-1.5 w-8 h-8 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-slate-950 ${
                    isCurrentlyPursuing
                      ? 'bg-gradient-to-tr from-cyan-600 to-blue-600 text-white shadow-cyan-600/30'
                      : 'bg-slate-800 text-cyan-300 shadow-slate-900/30'
                  }`}
                >
                  <GraduationCap className="w-4 h-4" />
                </div>

                {/* Main Card */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300">
                  {/* Top row: Degree and Status / Score Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>

                    {edu.score ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                        <Award className="w-3.5 h-3.5" />
                        <span>Score: {edu.score}</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{edu.status}</span>
                      </span>
                    )}
                  </div>

                  {/* Institution banner */}
                  <div className="mb-4">
                    <div className="inline-block px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-semibold border border-slate-200 dark:border-slate-700/70">
                      {edu.institution}
                    </div>
                  </div>

                  {/* Meta details: Duration & Location */}
                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                    {edu.duration && (
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                        <span className="font-medium">{edu.duration}</span>
                      </div>
                    )}
                    {edu.location && (
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                        <span className="font-medium">{edu.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Overview description */}
                  {edu.description && (
                    <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                      {edu.description}
                    </p>
                  )}

                  {/* Coursework / Key study areas */}
                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-cyan-500" />
                        <span>Subjects / Key Focus:</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((subject) => (
                          <span
                            key={subject}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
