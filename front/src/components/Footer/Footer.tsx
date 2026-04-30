import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container footer-content">
        <div className="footer-section brand">
          <Link to="/" className="footer-logo">
            JHSKA <span className="logo-accent">KARATE</span>
          </Link>
          <p className="footer-desc">
            The Jharkhand State Karate Association is dedicated to promoting traditional martial arts, modern self-defense, and athletic development across the state.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/classes">Our Classes</Link></li>
            <li><Link to="/instructors">Masters & Instructors</Link></li>
            <li><Link to="/schedule">Training Schedule</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>Barganda, Giridih, Jharkhand 815301, India</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>+91 98765 43210</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>info@jhskakarate.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} JHSKA Karate. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
