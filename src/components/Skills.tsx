import { Cpu, Layers } from 'lucide-react';

interface Skillset {
  title: string;
  icon: React.ReactNode;
  points: string[];
}

export default function Skills() {
  const skillset: Skillset[] = [
    {
      title: 'Web Development',
      icon: <Layers size={36} />,
      points: [
        '⚡ Developing clean, responsive, and interactive user interfaces using HTML5, CSS3, JavaScript, and Bootstrap.',
        '⚡ Constructing backend APIs and handling web templates using Python and Flask.',
        '⚡ Connecting and managing relational database schemas and writing queries with SQL.',
      ]
    },
    {
      title: 'AI/ML & Automation',
      icon: <Cpu size={36} />,
      points: [
        '⚡ Building predictive models and data analysis jobs using Python (Flask & Ridge Regression).',
        '⚡ Designing desktop voice automation interfaces and assistants for task automation.',
        '⚡ Setting up local and web automation flows using platforms like n8n Automation.',
      ]
    }
  ];

  return (
    <section id="skills" className="section container">
      <div className="section-header">
        <h2 className="section-title">What I Do</h2>
        <p className="section-subtitle">
          A concise overview of the core development and engineering capabilities I offer.
        </p>
      </div>

      <div className="skills-concise-grid">
        {skillset.map((item, idx) => (
          <div key={idx} className="skillset-card glass-card">
            <div className="skillset-icon-box">
              {item.icon}
            </div>
            <h3 className="skillset-title">{item.title}</h3>
            <ul className="skillset-points">
              {item.points.map((pt, pIdx) => (
                <li key={pIdx}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
