import { motion } from 'motion/react';
import { GraduationCap, Code2, Bot, Sparkles, MapPin, Calendar, HeartHandshake } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio.ts';

export default function About() {
  const cards = [
    {
      icon: GraduationCap,
      badge: '🎓',
      title: 'B.Tech Student',
      subtitle: 'Currently Pursuing',
      description: 'Computer Science student with hands-on experience in Python, Machine Learning, Deep Learning, SQL, and application development.',
      accent: 'from-blue-500/20 to-cyan-500/20 border-blue-200 dark:border-blue-900/60',
      iconBg: 'bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400',
    },
    {
      icon: Code2,
      badge: '💻',
      title: 'Software Development',
      subtitle: 'Python, Java & SQL',
      description: 'Building robust applications with clean code, REST APIs, and reactive web interfaces using FastAPI & Streamlit.',
      accent: 'from-cyan-500/20 to-teal-500/20 border-cyan-200 dark:border-cyan-900/60',
      iconBg: 'bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400',
    },
    {
      icon: Bot,
      badge: '🤖',
      title: 'AI & Machine Learning',
      subtitle: 'Scikit-learn & TensorFlow',
      description: 'Developing predictive models, neural networks, and deploying practical applications in healthcare, security, and analytics.',
      accent: 'from-indigo-500/20 to-purple-500/20 border-indigo-200 dark:border-indigo-900/60',
      iconBg: 'bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400',
    },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-cyan-600 dark:text-cyan-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career Summary</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            {PERSONAL_INFO.aboutText.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Quick Badges Info */}
            <div className="pt-4 flex flex-wrap gap-4 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80">
                <MapPin className="w-4 h-4 text-cyan-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span>B.Tech (Currently Pursuing)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80">
                <HeartHandshake className="w-4 h-4 text-indigo-500" />
                <span>VIT-AP Hackathon Finalist</span>
              </div>
            </div>
          </motion.div>

          {/* 3 Information Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -3 }}
                  className={`p-5 rounded-2xl bg-white dark:bg-slate-900 border ${card.accent} shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${card.iconBg} flex items-center justify-center shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base">{card.badge}</span>
                        <h3 className="font-bold text-slate-900 dark:text-white text-base">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mt-0.5 mb-1.5">
                        {card.subtitle}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-normal">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
