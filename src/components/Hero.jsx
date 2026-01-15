import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const engagementDate = new Date('2026-01-30T00:00:00');
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = engagementDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Generate floating hearts
  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
    size: 20 + Math.random() * 20
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Animated Gradient Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-lavender-100"
        animate={{
          background: [
            'linear-gradient(to bottom right, #fce7f3, #f3e8ff, #e0e7ff)',
            'linear-gradient(to bottom right, #fce7f3, #fae8ff, #ddd6fe)',
            'linear-gradient(to bottom right, #fbcfe8, #f3e8ff, #e0e7ff)',
            'linear-gradient(to bottom right, #fce7f3, #f3e8ff, #e0e7ff)',
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Animated Gradient Overlay */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.15), transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(167, 139, 250, 0.15), transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(244, 114, 182, 0.15), transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.15), transparent 50%)',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Premium Floating Gradient Orbs */}
      <motion.div 
        className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-pink-300/40 to-purple-300/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-10 right-0 w-56 sm:w-80 h-56 sm:h-80 bg-gradient-to-br from-purple-300/40 to-blue-300/20 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-pink-300/30 to-rose-300/20 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Elegant Sparkle Overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'radial-gradient(circle, #ec4899 1.5px, transparent 1.5px)', backgroundSize: '60px 60px'}}></div>
      
      {/* Refined Floating Hearts */}
      {hearts.slice(0, 12).map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-400"
          style={{
            left: `${heart.left}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "easeInOut"
          }}
        >
          <span style={{ fontSize: `${heart.size}px` }}>❤️</span>
        </motion.div>
      ))}

      {/* Main Content - Optimized for Mobile */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Premium Title with Stagger Animation */}
          <motion.h1 
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 mb-3 sm:mb-5 px-2 leading-tight"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "linear" 
            }}
            style={{
              backgroundSize: '200% 200%',
              textShadow: '0 2px 20px rgba(236, 72, 153, 0.2)',
            }}
          >
            Two Hearts, One Promise
          </motion.h1>

          {/* Animated Heart Icon */}
          <motion.div
            className="inline-block mb-4 sm:mb-6"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-4xl sm:text-5xl md:text-6xl">💖</span>
          </motion.div>
        </motion.div>

        <motion.p
          className="font-elegant text-lg sm:text-xl md:text-2xl lg:text-3xl text-pink-700 mb-8 sm:mb-10 md:mb-12 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Engagement on 30 January 2026
        </motion.p>

        {/* Premium Countdown Timer */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-8 sm:mb-10 md:mb-12 px-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <motion.div 
              key={unit} 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <motion.div
                className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-2xl border border-pink-200/50 min-w-[65px] sm:min-w-[75px] md:min-w-[85px] lg:min-w-[100px] relative overflow-hidden"
                whileHover={{ 
                  scale: 1.1, 
                  y: -8,
                  boxShadow: '0 25px 50px -12px rgba(236, 72, 153, 0.4)'
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 opacity-0"
                  whileHover={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />
                
                <span className="relative font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-purple-600">
                  {value}
                </span>
              </motion.div>
              <span className="font-elegant text-xs sm:text-sm md:text-base lg:text-lg text-pink-600 mt-2 capitalize font-medium">
                {unit}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium CTA Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 text-sm sm:text-base md:text-lg cursor-pointer overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundSize: '200% 100%',
          }}
        >
          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 1
            }}
          />
          
          <span className="relative font-elegant font-semibold tracking-wide">
            Scroll for the Story 💕
          </span>
        </motion.button>

        {/* Animated Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block"
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <FaHeart className="text-2xl sm:text-3xl text-pink-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
