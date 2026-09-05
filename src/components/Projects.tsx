import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Github,
  ExternalLink,
  FolderGit2,
  Cpu,
  Globe,
  Database,
  Layers,
  Sparkles,
  Info,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolio.ts';
import { ProjectItem } from '../types.ts';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'AI/ML', 'Web Development', 'Data Science', 'Full Stack'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const getCategoryBadge = (category: ProjectItem['category']) => {
    switch (category) {
      case 'AI/ML':
        return 'bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      case 'Web Development':
        return 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'Data Science':
        return 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      case 'Full Stack':
        return 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-cyan-600 dark:text-cyan-400 mb-2">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Engineered Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Projects
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3" />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5"
                >
                  {/* Card Body */}
                  <div className="p-6">
                    {/* Top Row: Category badge & Index */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase border ${getCategoryBadge(
                          project.category
                        )}`}
                      >
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-3 leading-snug">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technologies Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/60 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="px-6 py-4 bg-slate-50/80 dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                    {/* GitHub Button */}
                    <a
                      id={`project-github-${project.id}`}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 py-1.5 transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-4 h-4" />
                      <span>Code Repository</span>
                    </a>

                    {/* Live Demo Button (or placeholder status) */}
                    {project.liveDemoUrl ? (
                      <a
                        id={`project-demo-${project.id}`}
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 py-1.5 transition-colors"
                        aria-label={`View Live Demo for ${project.title}`}
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400 dark:text-slate-500"
                        title="Live demo URL configurable in portfolio.ts"
                      >
                        <Info className="w-3 h-3" />
                        <span>Demo Configurable</span>
                      </span>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Note on easily configurable variables */}
        <div className="mt-10 p-4 rounded-xl bg-cyan-50/60 dark:bg-cyan-950/20 border border-cyan-200/60 dark:border-cyan-900/40 flex items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          <Info className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0" />
          <p>
            Project links use customizable placeholder variables (e.g.{' '}
            <code className="font-mono font-semibold text-cyan-700 dark:text-cyan-300">
              GITHUB_PROJECT_1
            </code>
            ) defined cleanly in <code className="font-mono">portfolio.ts</code> for instant updates.
          </p>
        </div>
      </div>
    </section>
  );
}
