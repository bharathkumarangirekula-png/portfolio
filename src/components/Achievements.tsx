import { motion } from 'motion/react';
import { Trophy, Rocket, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolio.ts';

export default function Achievements() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy':
        return Trophy;
      case 'Rocket':
        return Rocket;
      case 'TrendingUp':
        return TrendingUp;
      default:
        return Trophy;
    }
  };

  const getCardTheme = (index: number) => {
    switch (index) {
      case 0:
        return {
          badge: 'Hackathons',
          iconColor: 'text-amber-500 dark:text-amber-400',
          bgColor: 'bg-amber-500/10',
          borderAccent: 'border-amber-200 dark:border-amber-900/50',
        };
      case 1:
        return {
          badge: 'Innovation',
          iconColor: 'text-cyan-500 dark:text-cyan-400',
          bgColor: 'bg-cyan-500/10',
          borderAccent: 'border-cyan-200 dark:border-cyan-900/50',
        };
      case 2:
        return {
          badge: 'Growth',
          iconColor: 'text-emerald-500 dark:text-emerald-400',
          bgColor: 'bg-emerald-500/10',
          borderAccent: 'border-emerald-200 dark:border-emerald-900/50',
        };
      default:
        return {
          badge: 'Milestone',
          iconColor: 'text-blue-500',
          bgColor: 'bg-blue-500/10',
          borderAccent: 'border-blue-200',
        };
    }
  };

  return (
    <section id="achievements" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-cyan-600 dark:text-cyan-400 mb-2">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hackathons & Achievements
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Highlights from collaborative sprint challenges, practical engineering builds, and self-driven skill progression.
          </p>
        </div>

        {/* 3 Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS_DATA.map((item, index) => {
            const Icon = getIcon(item.iconName);
            const theme = getCardTheme(index);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -5 }}
                className={`bg-white dark:bg-slate-900 rounded-2xl p-7 border ${theme.borderAccent} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* Top Bar: Icon and Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl ${theme.bgColor} flex items-center justify-center ${theme.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {theme.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom confirmation metric / highlight */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  <span>Real-world practical impact</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
