import Link from 'next/link';
import WaitlistForm from '@/components/WaitlistForm';

const projects = [
  {
    name: 'The Daily Ship',
    tagline: 'Personalised content pipeline for devs on X',
    description:
      'Daily post ideas tailored to your stack, trends and git commits. One-click threads from your GitHub commits. Trained on your voice. Mobile-first PWA for devs who ship daily and want to to grow',
    status: 'In Development',
    statusColor: 'accent',
    featured: true,
    tech: ['Next.js','FastAPI', 'Grok API', 'GitHub API'],
    links: {},
  },
  {
    name: 'XRA',
    tagline: 'AI-powered replies assistant for X',
    description:
      'A Chrome extension that helps you craft better replies on X. Generates contextual, personalised responses to help grow your engagement authentically.',
    status: 'Live',
    statusColor: 'green',
    featured: false,
    tech: ['Chrome Extension', 'Anthropic API', 'React', 'FastAPI'],
    stats: '27 installs',
    links: {
      chrome: 'https://chromewebstore.google.com/detail/x-reply-assistant/hbmamdchbkbfppdkckcboajfmdlgefjd', 
    },
  },
{
    name: 'Program-Pit',
    tagline: 'Learn to code through daily challenges and XP.',
    description:
      'A gamified coding platform with XP, leaderboards, daily challenges, and AI-generated questions. Built to make coding practice feel fun and rewarding.',
    status: 'Coming Soon',
    statusColor: 'yellow',
    featured: false,
    tech: ['React', 'FastAPI', 'Supabase', 'Anthropic API', 'Clerk'],
    links: {},
  },
  {
    name: 'Bentley Motors',
    tagline: 'Professional site for a local mechanic business.',
    description:
      'A clean, responsive website built for a friend\'s mechanic business. Features contact forms, location map, and service listings.',
    status: 'Live',
    statusColor: 'green',
    featured: false,
    tech: ['HTML', 'CSS', 'JavaScript', 'Formspree', 'Leaflet.js'],
    links: {
      mechanic: 'https://conor-code.github.io/bentley-motors/'
    },
  },
];

function StatusBadge({ status, color }) {
  const colorMap = {
    accent: 'bg-accent/15 text-accent border-accent/20',
    green: 'bg-green-500/15 text-green-400 border-green-500/20',
    yellow: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/20',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono border ${colorMap[color]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${
        color === 'accent' ? 'bg-accent animate-pulse-subtle' :
        color === 'green' ? 'bg-green-400' :
        'bg-yellow-400'
      }`} />
      {status}
    </span>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <div className="max-w-3xl mx-auto px-5 pt-12 sm:pt-12 pb-20">
      {/* Header */}
      <div className="mb-10 opacity-0 animate-fade-up">
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-text-primary tracking-tight mb-2">
          Projects
        </h1>
      </div>

      {/* Featured - The Daily Ship */}
      {featured && (
        <div className="mb-8 opacity-0 animate-fade-up stagger-1">
          <div className="bg-bg-secondary/60 border border-accent/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden card-hover">
            <div className="relative">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <StatusBadge status={featured.status} color={featured.statusColor} />
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-text-primary mt-3">
                    {featured.name}
                  </h2>
                  <p className="text-accent font-body text-sm mt-1">{featured.tagline}</p>
                </div>
              </div>

              <p className="text-text-secondary font-body text-sm leading-relaxed mb-6 max-w-lg">
                {featured.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {featured.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-bg-tertiary text-text-muted text-xs font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Other Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {others.map((project, i) => (
          <div
            key={project.name}
            className={`bg-bg-secondary/60 border border-border rounded-2xl p-5 card-hover opacity-0 animate-fade-up stagger-${i + 2}`}
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <StatusBadge status={project.status} color={project.statusColor} />
              {project.stats && (
                <span className="text-xs text-text-muted font-mono">{project.stats}</span>
              )}
            </div>

            <h3 className="font-display font-semibold text-base text-text-primary mb-1">
              {project.name}
            </h3>
            <p className="text-sm text-accent/80 font-body mb-2">{project.tagline}</p>
            <p className="text-sm text-text-secondary font-body leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded-md bg-bg-tertiary text-text-muted text-xs font-mono">
                  {t}
                </span>
              ))}
            </div>

            {project.links.chrome && (
              <a
                href={project.links.chrome}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-xs text-accent hover:text-accent-hover transition-colors font-body"
              >
                Chrome Web Store
                <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            {project.links.mechanic && (
              <a
                href={project.links.mechanic}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-xs text-accent hover:text-accent-hover transition-colors font-body"
              >
                Check it out
                <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
