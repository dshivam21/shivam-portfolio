import { ExternalLink, Box } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  shortName: string;
}

export default function Projects() {
  const projectsList: Project[] = [
    {
      title: 'Nashik Kumbh – Smart Pass Portal',
      description: 'Developed a smart-pass prototype for managing pilgrim flow during Kumbh 2027. Built modules for pass registration, identity mapping, and QR-based verification. Optimized validation workflows.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Flask', 'Python'],
      githubUrl: 'https://github.com/dshivam21',
      liveUrl: 'https://example.com',
      shortName: 'NK',
    },
    {
      title: 'AI Desktop Assistant',
      description: 'A voice-controlled desktop helper designed to execute system-level automations, launch applications, perform web lookups, and manage files.',
      tags: ['Python', 'Speech Recognition', 'OS Automation'],
      githubUrl: 'https://github.com/dshivam21',
      liveUrl: 'https://example.com',
      shortName: 'DA',
    },
    {
      title: 'House Price Prediction',
      description: 'Machine learning prediction model utilizing Ridge Regression with a Flask API backend to calculate estimated home values based on inputs.',
      tags: ['Python', 'Flask', 'Machine Learning', 'Ridge Regression'],
      githubUrl: 'https://github.com/dshivam21',
      liveUrl: 'https://example.com',
      shortName: 'HP',
    },
    {
      title: 'Pharmacy Management System',
      description: 'Desktop inventory database application for logging pharmaceutical medicine stock levels, tracking customer purchases, and rendering bills.',
      tags: ['Python', 'SQL', 'Tkinter / GUI'],
      githubUrl: 'https://github.com/dshivam21',
      liveUrl: 'https://example.com',
      shortName: 'PM',
    },
  ];

  return (
    <section id="projects" className="section container">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Demonstrations of my coding capabilities, academic projects, and software prototypes.
        </p>
      </div>

      <div className="projects-grid">
        {projectsList.map((project, index) => (
          <div key={index} className="project-card glass-card">
            <div className="project-image">
              <div className="project-image-fallback">
                <Box size={40} />
                <span>{project.shortName}</span>
              </div>
            </div>
            
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub Repository">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  Code
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live Demo">
                  <ExternalLink size={18} /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
