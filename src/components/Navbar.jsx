import { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';
import LogoSvg from '../assets/profile/logo.svg';
import navLinks from '../data/navigation.json';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#home" className="navbar__logo" onClick={(e) => scrollToSection(e, '#home')}>
          <img src={LogoSvg} alt="PS Logo" className="navbar__logo-img" />
        </a>

        <div className={`navbar__menu ${isMobileMenuOpen ? 'navbar__menu--open' : ''}`}>
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="navbar__link"
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="navbar__dark-toggle-desktop">
            <DarkModeToggle />
          </div>
        </div>

        <div className="navbar__mobile-actions">
          <DarkModeToggle />
          <button 
            className={`navbar__mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
