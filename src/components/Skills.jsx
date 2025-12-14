import skillsData from '../data/skills.json';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="skills__container container">
        <h2 className="section-title">Skills</h2>
        <div className="skills__grid">
          {skillsData.map((category) => (
            <div key={category.title} className="skills__category card">
              <h3 className="skills__category-title">{category.title}</h3>
              <ul className="skills__list">
                {category.skills.map((skill) => (
                  <li key={skill} className="skills__item">
                    <span className="skills__bullet">→</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
