import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';
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
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3" />
        </div>

        {/* Education Card & Timeline Layout */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 sm:pl-10 before:absolute before:left-3 sm:before:left-4 before:top-4 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-blue-500 before:to-transparent"
          >
            {/* Timeline Dot Icon */}
            <div className="absolute left-0 sm:left-1 top-1.5 w-7 h-7 rounded-full bg-cyan-600 text-white flex items-center justify-center shadow-lg shadow-cyan-600/30 ring-4 ring-white dark:ring-slate-950">
              <GraduationCap className="w-4 h-4" />
            </div>

            {/* Main Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              {/* Top row: Degree and Status Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {EDUCATION_DATA.degree}
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  <CheckCircle2 className="w-3 h-3" />
                  {EDUCATION_DATA.status}
                </span>
              </div>

              {/* Editable College Placeholder Banner */}
              <div className="mb-4">
                <div className="inline-block px-3.5 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 text-amber-900 dark:text-amber-200 text-sm font-semibold">
                  {EDUCATION_DATA.college}
                </div>
                <span className="block text-[11px] text-slate-400 dark:text-slate-500 mt-1">
                  (Editable directly in <code className="font-mono">src/data/portfolio.ts</code>)
                </span>
              </div>

              {/* Meta details: Duration & Location */}
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span className="font-medium">{EDUCATION_DATA.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span className="font-medium">{EDUCATION_DATA.location}</span>
                </div>
              </div>

              {/* Program Overview */}
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                {EDUCATION_DATA.description}
              </p>

              {/* Key Coursework and Focus Areas */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Key Engineering Study Focus:</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Structures & Algorithms',
                    'Object-Oriented Programming (Java/Python)',
                    'Database Management Systems (SQL)',
                    'Artificial Intelligence & ML',
                    'Computer Networks',
                    'Operating Systems',
                  ].map((subject) => (
                    <span
                      key={subject}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
