import { motion } from 'motion/react';
import {
  Code2,
  Download,
  Mail,
  ArrowRight,
  Github,
  Linkedin,
  Terminal,
  Cpu,
  Database,
  Sparkles,
  Layers,
  FileCode2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio.ts';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Subtle ambient gradient mesh background */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none -z-10 opacity-30 dark:opacity-20 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl" />
        <div className="absolute top-12 right-1/4 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl" />
        <div className="absolute -top-10 right-1/3 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200/80 dark:border-cyan-800/60 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span>Available for internships & software roles</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Bharath Kumar
              </span>
            </h1>

            {/* Sub-headline / Role */}
            <p className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-300 mb-5 flex items-center flex-wrap gap-2">
              <span>Software Engineer</span>
              <span className="text-slate-400 dark:text-slate-600">|</span>
              <span className="text-cyan-600 dark:text-cyan-400">Python Developer</span>
              <span className="text-slate-400 dark:text-slate-600">|</span>
              <span className="text-indigo-600 dark:text-indigo-400">AI/ML Enthusiast</span>
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-8">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8">
              <button
                id="hero-view-projects-btn"
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-cyan-600/25 hover:shadow-cyan-600/35 hover:-translate-y-0.5 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="hero-download-resume-btn"
                href={`/${PERSONAL_INFO.resumeFileName}`}
                download={PERSONAL_INFO.resumeFileName}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-slate-800 dark:text-slate-200 font-semibold text-sm sm:text-base hover:bg-slate-50 dark:hover:bg-slate-800/70 hover:-translate-y-0.5 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                <Download className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <button
                id="hero-contact-me-btn"
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm sm:text-base hover:-translate-y-0.5 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2 border-t border-slate-200 dark:border-slate-800 w-full">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                Connect:
              </span>
              <a
                id="hero-github-link"
                href={PERSONAL_INFO.githubPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bharath Kumar's GitHub Profile"
                className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/70 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all hover:scale-105"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                id="hero-linkedin-link"
                href={PERSONAL_INFO.linkedinPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bharath Kumar's LinkedIn Profile"
                className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-100 dark:bg-slate-800/70 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                id="hero-email-quick-link"
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send email to Bharath Kumar"
                className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 bg-slate-100 dark:bg-slate-800/70 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all hover:scale-105"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Abstract Coding & AI Visual with Floating Elements */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-3xl blur-2xl -z-10" />

            {/* Central Developer Terminal / Code Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full max-w-md bg-slate-900/90 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-700/70 rounded-2xl shadow-2xl overflow-hidden text-slate-200 font-mono text-xs sm:text-sm"
            >
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-slate-800/90 border-b border-slate-700/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>bharath_agent.py</span>
                </div>
                <div className="text-[10px] text-slate-500">UTF-8</div>
              </div>

              {/* Code Snippet */}
              <div className="p-4 sm:p-5 space-y-2 leading-relaxed selection:bg-cyan-500/30">
                <div className="text-slate-500 flex items-center gap-1">
                  <span># Initializing AI/ML Pipeline</span>
                </div>
                <div className="text-pink-400">
                  <span className="text-purple-400">import</span> tensorflow <span className="text-purple-400">as</span> tf
                </div>
                <div className="text-pink-400">
                  <span className="text-purple-400">from</span> sklearn.model_selection <span className="text-purple-400">import</span> train_test_split
                </div>
                <div className="pt-1">
                  <span className="text-blue-400">class</span> <span className="text-amber-300">SoftwareEngineer</span>:
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-blue-400">def</span> <span className="text-emerald-400">__init__</span>(self):
                </div>
                <div className="pl-8 text-slate-300">
                  self.name = <span className="text-cyan-300">"Bharath Kumar"</span>
                </div>
                <div className="pl-8 text-slate-300">
                  self.degree = <span className="text-cyan-300">"B.Tech (2024-2028)"</span>
                </div>
                <div className="pl-8 text-slate-300">
                  self.core = [<span className="text-amber-300">"Python"</span>, <span className="text-amber-300">"AI/ML"</span>, <span className="text-amber-300">"React"</span>]
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-blue-400">def</span> <span className="text-emerald-400">build_solution</span>(self, problem):
                </div>
                <div className="pl-8 text-slate-300">
                  <span className="text-purple-400">return</span> self.innovate(problem)
                </div>

                {/* Simulated Terminal Execution Box */}
                <div className="mt-4 pt-3 border-t border-slate-800 bg-slate-950/60 p-2.5 rounded-lg">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>$ python bharath_agent.py --status</span>
                  </div>
                  <div className="text-[11px] text-cyan-300 mt-1">
                    ✓ Status: Ready to build impactful real-world software
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Element 1: Python */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-3 -left-3 sm:top-2 sm:left-2 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200 dark:border-slate-700/80 shadow-lg text-xs font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-md bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-xs">
                🐍
              </div>
              <span>Python</span>
            </motion.div>

            {/* Floating Element 2: Java */}
            <motion.div
              animate={{
                y: [0, 8, 0],
                rotate: [0, -2, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className="absolute top-1/4 -right-4 sm:-right-6 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200 dark:border-slate-700/80 shadow-lg text-xs font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-xs">
                ☕
              </div>
              <span>Java</span>
            </motion.div>

            {/* Floating Element 3: AI */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute -bottom-4 left-4 sm:left-8 px-3.5 py-1.5 rounded-xl bg-cyan-600 text-white shadow-lg shadow-cyan-600/30 text-xs font-semibold flex items-center gap-2"
            >
              <Cpu className="w-3.5 h-3.5 text-cyan-200" />
              <span>AI</span>
            </motion.div>

            {/* Floating Element 4: ML */}
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -3, 0],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.5,
              }}
              className="absolute bottom-6 -right-2 sm:bottom-8 sm:-right-4 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200 dark:border-slate-700/80 shadow-lg text-xs font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>ML</span>
            </motion.div>

            {/* Floating Element 5: GitHub */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 5.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.8,
              }}
              className="absolute top-2 right-8 sm:top-4 sm:right-16 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200 dark:border-slate-700/80 shadow-lg text-xs font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2"
            >
              <Github className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
              <span>GitHub</span>
            </motion.div>

            {/* Floating Element 6: SQL */}
            <motion.div
              animate={{
                y: [0, 9, 0],
                rotate: [0, -2, 0],
              }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.2,
              }}
              className="absolute bottom-1/3 -left-4 sm:-left-6 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200 dark:border-slate-700/80 shadow-lg text-xs font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2"
            >
              <Database className="w-3.5 h-3.5 text-emerald-500" />
              <span>SQL</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
