import { motion } from 'framer-motion';
import { Shield, Users, Award, Zap } from 'lucide-react';
import './Features.css';

const featuresData = [
  {
    id: 1,
    icon: <Shield size={40} />,
    title: 'Self-Defense',
    description: 'Learn practical, effective self-defense techniques applicable to real-world situations while building confidence.',
  },
  {
    id: 2,
    icon: <Award size={40} />,
    title: 'Expert Masters',
    description: 'Train under globally recognized senseis with decades of experience mapping back to the Japanese origins.',
  },
  {
    id: 3,
    icon: <Users size={40} />,
    title: 'Community',
    description: 'Join a disciplined, respectful community of martial artists that support mutual growth and development.',
  },
  {
    id: 4,
    icon: <Zap size={40} />,
    title: 'Mind & Body',
    description: 'Enhance your physical fitness, flexibility, and mental fortitude through our rigorous training regimens.',
  }
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header">
          <h4 className="section-subtitle">Why Choose JHSKA</h4>
          <h2 className="section-title">THE PATH OF THE <span className="text-primary">WARRIOR</span></h2>
          <p className="section-desc">We offer traditional training adapted for the modern world. Our curriculum focuses on kihon (basics), kata (forms), and kumite (sparring).</p>
        </div>

        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <motion.div 
              key={feature.id}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="feature-icon-wrapper">
                <div className="feature-icon">{feature.icon}</div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
