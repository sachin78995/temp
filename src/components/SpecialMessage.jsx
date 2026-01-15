import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SpecialMessage = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const message = "Dear Sister, as you step into this beautiful new chapter of your life, my heart overflows with joy and happiness. Watching you find your soulmate and seeing the love you both share fills me with immense pride. May your journey together be filled with endless love, laughter, and cherished moments. You deserve all the happiness in the world. With all my love and blessings, your brother. 💕";

  useEffect(() => {
    if (currentIndex < message.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + message[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, message]);

  // Generate floating petals
  const petals = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 5,
  }));

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-cream-50 to-blush-50 overflow-hidden">
      {/* Floating Petals */}
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute text-4xl opacity-20"
          style={{
            left: `${petal.left}%`,
            top: '-50px',
          }}
          animate={{
            y: ['0vh', '120vh'],
            x: [0, Math.sin(petal.id) * 100, 0],
            rotate: [0, 360, 720],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          🌸
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blush-600 to-lavender-600 mb-4">
            A Message from the Heart
          </h2>
          <p className="font-cursive text-2xl text-rosegold-600">
            From brother to sister, with love
          </p>
        </motion.div>

        {/* Message Card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Glowing background effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blush-300 via-lavender-300 to-rosegold-300 rounded-3xl blur-2xl opacity-30 animate-pulse-slow"></div>

          {/* Message content */}
          <div className="relative bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-blush-200">
            {/* Decorative corner hearts */}
            <motion.div
              className="absolute top-4 left-4 text-3xl"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              💕
            </motion.div>
            <motion.div
              className="absolute top-4 right-4 text-3xl"
              animate={{ 
                rotate: [0, -10, 10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              💕
            </motion.div>
            <motion.div
              className="absolute bottom-4 left-4 text-3xl"
              animate={{ 
                rotate: [0, -10, 10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              💕
            </motion.div>
            <motion.div
              className="absolute bottom-4 right-4 text-3xl"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            >
              💕
            </motion.div>

            {/* Typewriter text */}
            <div className="relative z-10">
              <p className="font-cursive text-xl md:text-2xl text-gray-700 leading-relaxed text-center">
                {displayedText}
                <motion.span
                  className="inline-block w-0.5 h-6 md:h-8 bg-blush-500 ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </p>
            </div>

            {/* Signature */}
            <motion.div
              className="mt-8 text-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: currentIndex >= message.length ? 1 : 0 }}
              transition={{ delay: 1 }}
            >
              <p className="font-cursive text-2xl text-rosegold-600">
                Your Loving Brother
              </p>
              <motion.div
                className="inline-block text-4xl mt-2"
                animate={{ 
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ❤️
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom decorative text */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-elegant text-xl text-rosegold-600 italic">
            "Love is not just looking at each other, it's looking in the same direction together"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialMessage;
