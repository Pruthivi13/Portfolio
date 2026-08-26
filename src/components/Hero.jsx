import AvatarSvg from '../assets/profile/avatar.svg';
import heroData from '../data/hero.json';
import AnimatedBackground from './AnimatedBackground';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <AnimatedBackground />
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              {heroData.title}<br />
              I'm <span className="hero__name">{heroData.name}.</span>
            </h1>
            <p className="hero__subtitle">
              {heroData.subtitle}
            </p>
            <p className="hero__description">
              {heroData.description}
            </p>
            <div className="hero__buttons">
              {heroData.buttons.map((button, index) => (
                <a 
                  key={index}
                  href={button.href} 
                  className={`btn ${button.isPrimary ? 'btn-filled' : ''}`}
                  target={button.isExternal ? '_blank' : undefined}
                  rel={button.isExternal ? 'noopener noreferrer' : undefined}
                  download={button.download ? 'Pruthiviraj_Sahu_Resume.pdf' : undefined}
                >
                  {button.text}
                  {!button.isPrimary && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
          <div className="hero__image">
            <div className="hero__image-wrapper">
              <div className="hero__avatar">
                <img src={AvatarSvg} alt="Profile Avatar" className="hero__avatar-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
