import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hero-subtitle"
          >
            Discipline • Respect • Strength
          </motion.h2>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            MASTER THE ART <br />
            <span className="text-accent">OF KARATE</span>
          </motion.h1>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Join the elite Japan Shotokan Karate Association. Train with certified masters,
            develop indomitable spirit, and achieve excellence in mind and body.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a href="/join" className="btn btn-primary-large">
              Start Your Journey <ArrowRight size={20} />
            </a>
            <a href="/about" className="btn btn-outline-large">
              Discover Our Legacy
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <p>Scroll Down</p>
        <ChevronDown size={24} className="bounce" />
      </motion.div>
    </div>
  );
};

export default Hero;
