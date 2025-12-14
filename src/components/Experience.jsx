import experienceData from '../data/experience.json';
import './Experience.css';

const Experience = () => {
  const { experience, education } = experienceData;

  return (
    <section id="experience" className="experience section">
      <div className="experience__container container">
        <div className="experience__grid">
          <div className="experience__column">
            <h2 className="section-title">Experience</h2>
            <div className="experience__timeline">
              {experience.map((exp, index) => (
                <div key={index} className="experience__item card">
                  <div className="experience__header">
                    <span className="experience__period">{exp.period}</span>
                  </div>
                  <h3 className="experience__title">{exp.title}</h3>
                  <p className="experience__org">{exp.organization}</p>
                  <p className="experience__desc">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="experience__column">
            <h2 className="section-title">Education</h2>
            <div className="experience__timeline">
              {education.map((edu, index) => (
                <div key={index} className="experience__item card">
                  <div className="experience__header">
                    <span className="experience__period">{edu.period}</span>
                  </div>
                  <h3 className="experience__title">{edu.degree}</h3>
                  <p className="experience__org">{edu.institution}</p>
                  <p className="experience__grade">{edu.grade}</p>
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
