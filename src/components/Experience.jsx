import experienceData from '../data/experience.json';
import './Experience.css';

const Experience = () => {
  const { experience, education } = experienceData;

  return (
    <section id="experience" className="experience section">
      <div className="experience__container container">
        <div className="experience__section-header">
          <h2 className="section-title">EXPERIENCE & EDUCATION</h2>
          <p className="experience__section-subtitle">
            A schematic overview of professional engagements and academic foundation.
          </p>
        </div>

        <div className="experience__grid">
          {/* Work Experience Column */}
          <div className="experience__column">
            <div className="experience__column-header">
              <span className="experience__column-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </span>
              <h3 className="experience__column-title">WORK EXPERIENCE</h3>
            </div>

            <div className="experience__timeline">
              <div className="experience__timeline-wire"></div>
              {experience.map((exp, index) => (
                <div key={index} className="experience__item card">
                  <div className="experience__timeline-node"></div>
                  <div className="experience__item-header">
                    <div>
                      <h4 className="experience__title">{exp.title}</h4>
                      <p className="experience__org">{exp.organization}</p>
                    </div>
                    <span className="experience__period">{exp.period}</span>
                  </div>
                  <p className="experience__desc">{exp.description}</p>
                  {exp.skills && (
                    <div className="experience__skills">
                      {exp.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="tag">{skill}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="experience__column">
            <div className="experience__column-header">
              <span className="experience__column-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </span>
              <h3 className="experience__column-title">EDUCATION HISTORY</h3>
            </div>

            <div className="experience__timeline">
              <div className="experience__timeline-wire"></div>
              {education.map((edu, index) => (
                <div key={index} className="experience__item card">
                  <div className="experience__timeline-node"></div>
                  <div className="experience__item-header">
                    <div>
                      <h4 className="experience__title">{edu.degree}</h4>
                      <p className="experience__org">{edu.institution}</p>
                    </div>
                    <span className="experience__period">{edu.period}</span>
                  </div>
                  {edu.grade && (
                    <div className="experience__grade-wrapper">
                      {edu.grade.includes('CGPA') ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="experience__grade-icon">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="experience__grade-icon">
                          <line x1="19" y1="5" x2="5" y2="19"/>
                          <circle cx="6.5" cy="6.5" r="2.5"/>
                          <circle cx="17.5" cy="17.5" r="2.5"/>
                        </svg>
                      )}
                      <span className="experience__grade">{edu.grade}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
