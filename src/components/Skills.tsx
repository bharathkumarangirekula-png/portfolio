import { motion } from 'motion/react';
import {
  Terminal,
  Cpu,
  Layout,
  Wrench,
  Code,
  Sparkles,
  Database,
  Layers,
  CheckCircle2,
  Boxes,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolio.ts';

export default function Skills() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return Terminal;
      case 'Cpu':
        return Cpu;
      case 'Layout':
        return Layout;
      case 'Wrench':
        return Wrench;
      default:
        return Code;
    }
  };

  const getSkillBadgeColor = (categoryIndex: number) => {
    switch (categoryIndex) {
      case 0:
        return 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-900/60 hover:bg-blue-100 dark:hover:bg-blue-900/60';
      case 1:
        return 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-900/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60';
      case 2:
        return 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-900/60 hover:bg-cyan-100 dark:hover:bg-cyan-900/60';
      case 3:
        return 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60';
      default:
        return 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-cyan-600 dark:text-cyan-400 mb-2">
            <Boxes className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Skills
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mt-3 mb-4" />
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl mx-auto">
            Practical programming capabilities, machine learning frameworks, modern web toolchains, and developer environments.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, catIdx) => {
            const Icon = getCategoryIcon(category.iconName);
            const badgeStyle = getSkillBadgeColor(catIdx);

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {category.skills.length} competencies
                      </span>
                    </div>
                  </div>

                  {/* Skills Pill List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 cursor-default ${badgeStyle}`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 opacity-70 shrink-0" />
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer category highlight */}
                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-400 dark:text-slate-500 font-mono flex items-center justify-between">
                  <span>Category {catIdx + 1}/4</span>
                  <span>Active stack</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
