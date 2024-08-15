import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import '../pages/Styles/NavBar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    const offsetValue = -70; // Ajusta el valor según sea necesario para evitar que quede cortada la sección por el navbar

    const scrollToSection = () => {
      scroller.scrollTo(sectionId, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: offsetValue, // Este valor asegura que la sección no quede cortada por el navbar
      });
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToSection, 100); // Espera a que la navegación a la página de inicio ocurra antes de desplazarse
    } else {
      scrollToSection();
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <img className='navbar-logo1' src="\logo1.jpg" alt="" onClick={() => handleNavClick('home')} />
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="menu-icon-line"></div>
        <div className="menu-icon-line"></div>
        <div className="menu-icon-line"></div>
      </div>
      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={() => handleNavClick('services')}>Servicios</li>
          <li onClick={() => handleNavClick('testimonies')}>Testimonios</li>
          <li onClick={() => handleNavClick('blog')}>Blog</li>
          <li onClick={() => handleNavClick('contact')}>Contacto</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
