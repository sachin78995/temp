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
      {/* Beautiful Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50"></div>
      
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 via-purple-100/20 to-rose-100/30"></div>
      
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-200/20 via-transparent to-lavender-200/20"></div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blush-300/30 to-transparent rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-lavender-300/40 to-transparent rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-br from-rosegold-300/30 to-transparent rounded-full blur-3xl" style={{animation: 'float 8s ease-in-out infinite'}}></div>
      <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-gradient-to-br from-pink-300/25 to-transparent rounded-full blur-2xl" style={{animation: 'float 7s ease-in-out infinite 1s'}}></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, #ff4081 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
      
      {/* Floating Hearts Background */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart-particle absolute text-pink-400 opacity-40"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${heart.size}px`,
          }}
        >
          ❤️
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1 
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blush-500 via-rosegold-500 to-lavender-500 mb-4 sm:mb-6 px-4"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "linear" 
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            Two Hearts, One Promise 💖
          </motion.h1>
        </motion.div>

        <motion.p
          className="font-elegant text-xl sm:text-2xl md:text-3xl text-rosegold-700 mb-8 sm:mb-10 md:mb-12 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Engagement on 30 January 2026
        </motion.p>

        {/* Countdown Timer */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12 px-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-xl border-2 border-blush-200 min-w-[70px] sm:min-w-[80px] md:min-w-[90px] lg:min-w-[100px]"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-blush-600">
                  {value}
                </span>
              </motion.div>
              <span className="font-elegant text-xs sm:text-sm md:text-base lg:text-lg text-rosegold-600 mt-2 capitalize">
                {unit}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blush-400 to-lavender-400 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 text-sm sm:text-base cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="font-elegant text-base sm:text-lg">
            Scroll for the Story 💕
          </span>
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaHeart className="text-3xl text-blush-400 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
