import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Flag, CalendarDays, ShieldCheck } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <div className="hero-grid">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              State Sports Promotion Program
            </motion.div>
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
              Join the official state sports initiative for Karate. Train under certified masters, build strength,
              and represent your community with pride.
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

          <motion.div
            className="hero-aside"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="hero-card hero-notice-card"  >
              <div className="hero-card-tag">Notices</div>
              <h3>Latest updates from state karate programs</h3>
              <p>Stay informed with the newest training schedules, registration deadlines, and government-backed initiatives.</p>

              <div className="hero-update-list">
                <div className="hero-update-item">
                  <Flag size={18} className="update-icon" />
                  <div>
                    <strong>Championship Registration</strong>
                    <p>Register by 25 May for government-supported training batches and scholarship support.</p>
                  </div>
                </div>
                <div className="hero-update-item">
                  <CalendarDays size={18} className="update-icon" />
                  <div>
                    <strong>Assessment Camp</strong>
                    <p>Next assessment camp: 1 June at the State Sports Complex.</p>
                  </div>
                </div>
                <div className="hero-update-item">
                  <ShieldCheck size={18} className="update-icon" />
                  <div>
                    <strong>Certified Curriculum</strong>
                    <p>Official state-certified karate curriculum now available for beginners.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ delay: 1.5, duration: 3, times: [0, 0.3, 0.7, 1], ease: 'easeInOut' }}
        style={{ pointerEvents: 'none' }}
      >
        <p>Scroll Down</p>
        <ChevronDown size={24} className="bounce" />
      </motion.div>
    </div>
  );
};

export default Hero;
