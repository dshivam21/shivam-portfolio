import { Mail, Download, Code, Cpu, Shield, Layers } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero-section container">
      <div className="hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span>Shivam Dwivedi</span>.
          </h1>
          <p className="hero-subtitle">
            I am a Computer Science Engineering student specializing in IoT with hands-on experience in web development and machine-learning projects. I build practical, user-focused applications.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Contact Me <Mail size={18} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Download Resume <Download size={18} />
            </a>
          </div>
          <div className="hero-socials">
            <a 
              href="https://github.com/dshivam21" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-link" 
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/shivamdwivedi21/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-link" 
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a 
              href="mailto:dwivedishivam464@gmail.com" 
              className="social-icon-link" 
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-illustration">
          <div className="tech-illustration-container">
            <svg className="illustration-svg-layer">
              <line x1="170" y1="170" x2="170" y2="42" className="glow-line" />
              <line x1="170" y1="170" x2="52" y2="288" className="glow-line" />
              <line x1="170" y1="170" x2="288" y2="288" className="glow-line" />
            </svg>

            <div className="center-node">
              <Code size={30} />
            </div>

            <div className="outer-node node-top">
              <Cpu size={22} />
              <span>IoT</span>
            </div>

            <div className="outer-node node-bottom-left">
              <Shield size={22} />
              <span>CSBT</span>
            </div>

            <div className="outer-node node-bottom-right">
              <Layers size={22} />
              <span>Web</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
