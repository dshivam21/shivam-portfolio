interface TimelineItem {
  date: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function Experience() {
  const experiences: TimelineItem[] = [
    {
      date: '3rd Year (B.E.)',
      title: 'NIIT Foundation Cyber Smart AI Prime Intern',
      subtitle: 'Internship',
      description: 'Worked with Cisco Packet Tracer to build and configure network simulations, gain troubleshooting expertise, and understand network security principles.',
    },
    {
      date: '2024 - 2027',
      title: 'B.E. in Computer Science (IoT & CSBT)',
      subtitle: 'Lokmanya Tilak College of Engineering, Mumbai',
      description: 'Pursuing Bachelor of Engineering in Computer Science specializing in Internet of Things and Cybersecurity & Block Chain Technology.',
    },
    {
      date: '2nd Year (B.E.)',
      title: 'Edunet AI/ML Intern',
      subtitle: 'Internship',
      description: 'Collaborated on testing, configuring, and training machine learning models. Built and evaluated dataset parameters for target ML flows.',
    },
    {
      date: '2022 - 2024',
      title: 'MSBTE Diploma in Computer Engineering',
      subtitle: 'Mumbai',
      description: 'Completed Diploma in Computer Engineering with an aggregate score of 74.97%, studying computer networks, database structures, and programming.',
    },
  ];

  return (
    <section id="experience" className="section container">
      <div className="section-header">
        <h2 className="section-title">Education & Experience</h2>
        <p className="section-subtitle">
          My academic qualifications, specializations, and professional engineering internships.
        </p>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-card glass-card">
              <span className="timeline-date">{exp.date}</span>
              <h3 className="timeline-title">{exp.title}</h3>
              <div className="timeline-company">{exp.subtitle}</div>
              <p className="timeline-desc">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
