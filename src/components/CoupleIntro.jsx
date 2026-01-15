import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const CoupleIntro = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="relative py-16 sm:py-20 px-4 bg-gradient-to-b from-pink-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 bg-pink-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section Title */}
        <motion.h2
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-2 sm:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 px-4"
          variants={cardVariants}
        >
          The Beautiful Couple
        </motion.h2>
        
        <motion.p
          className="font-cursive text-xl sm:text-2xl text-center text-pink-600 mb-12 sm:mb-16"
          variants={cardVariants}
        >
          Two souls united by destiny
        </motion.p>

        {/* Couple Cards - Mobile Optimized Layout */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          {/* Bride Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              scale: 1.03, 
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.4)"
            }}
            className="relative group w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px]"
          >
            <div className="relative aspect-[3/4] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border-2 border-pink-200/50">
              {/* Bride photo */}
              <img 
                src="/divya.png" 
                alt="Divya - The Radiant Bride" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Name Badge - Visible on Hover */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-pink-600/95 to-pink-600/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <div className="text-center text-white">
                  <p className="font-serif text-2xl sm:text-3xl font-bold">Divya</p>
                  <p className="font-cursive text-base sm:text-lg mt-1">The Radiant Bride</p>
                </div>
              </motion.div>
            </div>

            {/* Floating Heart Decoration */}
            <motion.div
              className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 text-3xl sm:text-4xl z-10"
              animate={{ 
                rotate: [0, 15, -15, 0],
                y: [0, -5, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              💕
            </motion.div>
          </motion.div>

          {/* Center Connection - Premium Design */}
          <motion.div
            className="relative my-4 md:my-0"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              delay: 0.5,
              duration: 0.8
            }}
            viewport={{ once: true }}
          >
            {/* Main Heart Container */}
            <motion.div
              className="relative flex items-center justify-center"
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Glowing Background Circle */}
              <motion.div
                className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-xl opacity-60"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* White Circle Background */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full shadow-2xl flex items-center justify-center">
                <FaHeart className="text-3xl sm:text-4xl md:text-5xl text-pink-500" />
              </div>
              
              {/* Pulsing Rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border-2 border-pink-400"
                  animate={{ 
                    scale: [1, 2, 2],
                    opacity: [0.6, 0.2, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: i * 1,
                  }}
                  style={{
                    width: '64px',
                    height: '64px',
                  }}
                  className="sm:w-20 sm:h-20 md:w-24 md:h-24"
                />
              ))}

              {/* Sparkle Elements */}
              <motion.div
                className="absolute -top-2 -right-2 text-xl sm:text-2xl"
                animate={{
                  rotate: [0, 180, 360],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ✨
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-2 text-xl sm:text-2xl"
                animate={{
                  rotate: [360, 180, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                ✨
              </motion.div>
            </motion.div>

            {/* Connecting Lines for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 transform -translate-y-1/2 -z-10"></div>
          </motion.div>

          {/* Groom Card */}
          <motion.div
            variants={cardVariantsRight}
            whileHover={{ 
              scale: 1.03, 
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.4)"
            }}
            className="relative group w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px]"
          >
            <div className="relative aspect-[3/4] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border-2 border-purple-200/50">
              {/* Groom photo */}
              <img 
                src="/vijay.png" 
                alt="Vijay - The Charming Groom" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Name Badge - Visible on Hover */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-purple-600/95 to-purple-600/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <div className="text-center text-white">
                  <p className="font-serif text-2xl sm:text-3xl font-bold">Vijay</p>
                  <p className="font-cursive text-base sm:text-lg mt-1">The Charming Groom</p>
                </div>
              </motion.div>
            </div>

            {/* Floating Heart Decoration */}
            <motion.div
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 text-3xl sm:text-4xl z-10"
              animate={{ 
                rotate: [0, -15, 15, 0],
                y: [0, -5, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            >
              💖
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.p 
            className="font-cursive text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600"
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
            Made for each other ✨
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CoupleIntro;
