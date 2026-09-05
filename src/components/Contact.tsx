import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio.ts';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      subject || `Connecting with Bharath Kumar - Opportunity / Inquiry`
    );
    const mailBody = encodeURIComponent(
      `Hi Bharath,\n\n${message}\n\nBest regards,\n${senderName || 'A Recruiter / Collaborator'}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-slate-100/60 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle Final Call To Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-950 text-white relative overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-cyan-200 text-xs font-semibold backdrop-blur-md mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Collaborate</span>
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-2">
              Have a project or opportunity in mind?
            </h3>
            <p className="text-cyan-100/90 text-base sm:text-lg mb-6">
              Let's build something useful together.
            </p>
            <a
              id="cta-get-in-touch-btn"
              href={`mailto:${PERSONAL_INFO.email}?subject=Project%20or%20Opportunity%20Inquiry`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-bold hover:bg-cyan-50 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4 text-cyan-600" />
            </a>
          </div>
        </motion.div>

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-cyan-600 dark:text-cyan-400 mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Connect
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            I'm always interested in learning, building innovative projects, and exploring software engineering and AI opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Details & Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Contact Details Cards */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              {/* Email */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-200/60 dark:border-cyan-800/60">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="block text-slate-900 dark:text-white font-bold text-base sm:text-lg hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-2.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-start justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/60 dark:border-blue-800/60">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                      Phone
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="block text-slate-900 dark:text-white font-bold text-base sm:text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      +91 {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  title="Copy phone to clipboard"
                  className="p-2.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-200/60 dark:border-indigo-800/60">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                    Location
                  </span>
                  <div className="text-slate-900 dark:text-white font-bold text-base sm:text-lg">
                    {PERSONAL_INFO.location}
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Vijayawada / Open to remote & relocations
                  </span>
                </div>
              </div>
            </div>

            {/* Required Action Buttons: Email Me, LinkedIn, GitHub */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                id="contact-email-me-btn"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-sm shadow-md shadow-cyan-600/25 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </a>

              <a
                id="contact-linkedin-btn"
                href={PERSONAL_INFO.linkedinPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm shadow-sm transition-all hover:-translate-y-0.5"
              >
                <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                id="contact-github-btn"
                href={PERSONAL_INFO.githubPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm shadow-sm transition-all hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Quick In-App Message Dispatcher */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-100 dark:border-slate-800">
              <MessageSquare className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                Quick Message Composer
              </h3>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Alex (Engineering Manager)"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Internship opportunity / Project collaboration"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Bharath, we came across your portfolio and would like to talk regarding..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                />
              </div>

              <button
                type="submit"
                id="send-message-client-btn"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-all cursor-pointer shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Open in Email Client</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
