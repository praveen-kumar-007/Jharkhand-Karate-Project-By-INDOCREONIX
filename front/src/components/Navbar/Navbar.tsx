import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          JHSKA <span className="logo-accent">KARATE</span>
        </Link>
        
        <div className="menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
        
        <ul className={isMobileMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMobileMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={toggleMobileMenu}>About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/classes" className="nav-links" onClick={toggleMobileMenu}>Classes</Link>
          </li>
          <li className="nav-item">
            <Link to="/instructors" className="nav-links" onClick={toggleMobileMenu}>Instructors</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links btn-primary" onClick={toggleMobileMenu}>Join Now</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
