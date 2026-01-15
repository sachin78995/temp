import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EngagementHighlight = () => {
  const sectionRef = useRef(null);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (section) {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        onEnter: () => setShowConfetti(true),
        once: true
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Generate confetti/flowers
  const confetti = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    rotation: Math.random() * 360,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
    emoji: ['🌸', '🌺', '🌹', '💐', '🌷', '💮'][Math.floor(Math.random() * 6)]
  }));

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 px-4 bg-gradient-to-b from-blush-50 to-lavender-50 overflow-hidden"
    >
      {/* Confetti/Flower Burst */}
      {showConfetti && confetti.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-3xl pointer-events-none"
          style={{
            left: `${item.x}%`,
            top: '50%',
          }}
          initial={{ 
            y: 0,
            x: 0,
            rotate: 0,
            scale: 0,
            opacity: 1
          }}
          animate={{
            y: [0, -200, -400],
            x: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 400],
            rotate: [0, item.rotation, item.rotation * 2],
            scale: [0, 1, 0.5],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            ease: "easeOut"
          }}
        >
          {item.emoji}
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Content */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Date Display */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.h2
              className="font-serif text-4xl md:text-5xl text-rosegold-600 mb-4"
              animate={{
                textShadow: [
                  '0 0 20px rgba(212, 135, 107, 0.3)',
                  '0 0 40px rgba(212, 135, 107, 0.5)',
                  '0 0 20px rgba(212, 135, 107, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Save the Date
            </motion.h2>
            
            <motion.div
              className="inline-block bg-gradient-to-r from-blush-500 via-lavender-500 to-rosegold-500 p-1 rounded-3xl"
              animate={{
                boxShadow: [
                  '0 0 30px rgba(255, 64, 129, 0.3)',
                  '0 0 60px rgba(170, 130, 255, 0.5)',
                  '0 0 30px rgba(255, 64, 129, 0.3)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="bg-white px-8 md:px-16 py-6 md:py-10 rounded-3xl">
                <h1 className="font-serif text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blush-600 via-lavender-600 to-rosegold-600">
                  30
                </h1>
                <p className="font-elegant text-3xl md:text-4xl text-rosegold-600 mt-2">
                  January 2026
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Ring Animation */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              delay: 0.5
            }}
          >
            <motion.div
              className="relative"
              animate={{
                rotateZ: [0, 10, -10, 0],
                y: [0, -10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="text-9xl">💍</div>
              
              {/* Sparkle effects */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute text-4xl"
                  style={{
                    top: ['0%', '0%', '100%', '100%'][i],
                    left: ['0%', '100%', '0%', '100%'][i],
                  }}
                  animate={{
                    scale: [0, 1.5, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeOut"
                  }}
                >
                  ✨
                </motion.div>
              ))}

              {/* Glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                style={{
                  background: 'radial-gradient(circle, rgba(255, 64, 129, 0.4) 0%, transparent 70%)',
                }}
              />
            </motion.div>
          </motion.div>

          {/* Engagement Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="font-cursive text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blush-600 to-lavender-600 mb-4">
              The Engagement Ceremony
            </h3>
            <p className="font-elegant text-xl md:text-2xl text-rosegold-600 max-w-2xl mx-auto">
              Join us as we celebrate the union of two beautiful souls embarking on a journey of eternal love
            </p>
          </motion.div>

          {/* Decorative hearts */}
          <motion.div
            className="mt-12 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            {['💕', '💖', '💗', '💓', '💝'].map((heart, index) => (
              <motion.span
                key={index}
                className="text-5xl"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
              >
                {heart}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blush-300 rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-lavender-300 rounded-full blur-3xl opacity-20 animate-float-slow"></div>
    </section>
  );
};

export default EngagementHighlight;
