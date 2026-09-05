import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO, NAV_ITEMS } from '../data/portfolio.ts';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const el = document.getElementById(href.substring(1));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-200 dark:border-slate-800">
          {/* Personal branding */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white font-bold text-xs">
                BK
              </div>
              <span className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              {PERSONAL_INFO.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-slate-400">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              id="footer-github-link"
              href={PERSONAL_INFO.githubPlaceholder}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all hover:-translate-y-0.5"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="footer-linkedin-link"
              href={PERSONAL_INFO.linkedinPlaceholder}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all hover:-translate-y-0.5"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="footer-email-link"
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              id="footer-back-to-top"
              onClick={scrollToTop}
              title="Back to top"
              aria-label="Scroll back to top"
              className="p-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white shadow-md shadow-cyan-600/20 transition-all hover:-translate-y-0.5 ml-2 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 text-center text-xs text-slate-500 dark:text-slate-500">
          <p>© 2026 Bharath Kumar Angirekula. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
