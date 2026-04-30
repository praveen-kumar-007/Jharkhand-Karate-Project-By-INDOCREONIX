import { motion } from 'framer-motion';
import './Rankings.css';

const beltData = [
  { color: 'white', name: 'White Belt', level: '10th Kyu - Beginner', duration: '0-3 Months' },
  { color: 'yellow', name: 'Yellow Belt', level: '9th Kyu - Novice', duration: '3-6 Months' },
  { color: 'orange', name: 'Orange Belt', level: '8th Kyu - Intermediate', duration: '6-9 Months' },
  { color: 'green', name: 'Green Belt', level: '7th Kyu - Advanced', duration: '9-12 Months' },
  { color: 'blue', name: 'Blue Belt', level: '4th - 6th Kyu', duration: '1-2 Years' },
  { color: 'brown', name: 'Brown Belt', level: '1st - 3rd Kyu', duration: '2-4 Years' },
  { color: 'black', name: 'Black Belt', level: 'Dan Ranks - Master', duration: '4+ Years' },
];

const Rankings = () => {
  return (
    <section className="rankings-section">
      <div className="container">
        <div className="section-header">
          <h4 className="section-subtitle">Progression</h4>
          <h2 className="section-title">THE BELT <span className="text-primary">SYSTEM</span></h2>
          <p className="section-desc">Trace your journey from a beginner to a true master of the martial arts.</p>
        </div>

        <div className="timeline">
          {beltData.map((belt, index) => (
            <motion.div 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              key={belt.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="timeline-content">
                <div className="belt-stripe-container">
                  <div className={`belt-stripe belt-${belt.color}`}></div>
                </div>
                <div className="timeline-info">
                  <h3>{belt.name}</h3>
                  <span className="belt-level">{belt.level}</span>
                  <p>Typical duration: {belt.duration}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Rankings;
