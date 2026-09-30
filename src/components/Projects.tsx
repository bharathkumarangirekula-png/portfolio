import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Github,
  ExternalLink,
  FolderGit2,
  Sparkles,
  CheckCircle2,
  Search,
  Terminal,
} from 'lucide-react';
import { PROJECTS, SOCIAL_LINKS } from '../data/portfolio.ts';
import { ProjectItem } from '../types.ts';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'AI/ML', 'Data Science', 'Full Stack', 'Web Development'];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const liveDeploymentsCount = useMemo(() => {
    return PROJECTS.filter((p) => Boolean(p.liveDemoUrl)).length;
  }, []);

  const getCategoryBadge = (category: ProjectItem['category']) => {
    switch (category) {
      case 'AI/ML':
        return 'bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      case 'Data Science':
        return 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      case 'Full Stack':
        return 'bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800';
      case 'Web Development':
        return 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800';
      default:
        return 'bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800';
    }
  };

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-cyan-600 dark:text-cyan-400 mb-2">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>GitHub Repositories & Deployments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Projects ({PROJECTS.length})
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3" />
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
              All projects pushed to GitHub with verified code repositories, documentation, and live deployed applications.
            </p>
          </div>

          {/* GitHub Profile Action Button */}
          <div className="flex items-center gap-3">
            <a
              id="github-profile-link"
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-md shadow-slate-900/10"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Profile</span>
              <span className="px-1.5 py-0.5 text-[10px] rounded bg-white/20 dark:bg-slate-900/20 font-mono">
                {PROJECTS.length} repos
              </span>
            </a>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === cat
                      ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      selectedCategory === cat
                        ? 'bg-cyan-700 text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or stack..."
              className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
            <Terminal className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <p className="text-base font-semibold text-slate-800 dark:text-slate-200">
              No projects found matching &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Try adjusting your category filter or search terms.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-1.5 rounded-lg text-xs font-semibold bg-cyan-600 text-white hover:bg-cyan-500 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
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
                    transition={{ duration: 0.35, delay: index * 0.03 }}
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
                          {String(index + 1).padStart(2, '0')}
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

                      {/* Live Demo Button */}
                      {project.liveDemoUrl && (
                        <a
                          id={`project-demo-${project.id}`}
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-3.5 py-1.5 rounded-lg shadow-sm shadow-cyan-600/20 hover:shadow-cyan-600/30 transition-all hover:scale-105"
                          aria-label={`View Live Demo for ${project.title}`}
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* Live Deployments Summary Footer */}
        <div className="mt-12 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-200 dark:border-cyan-800">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Live Cloud Deployments & Open Source
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                All models and applications are hosted with interactive user interfaces on Streamlit Community Cloud and Vercel.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>{liveDeploymentsCount} Live Deployed Apps</span>
            </div>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <div className="flex items-center gap-1.5">
              <FolderGit2 className="w-4 h-4" />
              <span>{PROJECTS.length} Repositories</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

