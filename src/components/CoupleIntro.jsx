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
    <section className="relative py-20 px-4 bg-gradient-to-b from-cream-50 to-blush-50">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Section Title */}
        <motion.h2
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-center mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blush-600 to-lavender-600 px-4"
          variants={cardVariants}
        >
          The Beautiful Couple
        </motion.h2>
        
        <motion.p
          className="font-cursive text-2xl text-center text-rosegold-600 mb-20"
          variants={cardVariants}
        >
          Two souls united by destiny
        </motion.p>

        {/* Couple Cards */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
          {/* Bride Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              boxShadow: "0 25px 50px -12px rgba(255, 64, 129, 0.3)"
            }}
            className="relative group"
          >
            <div className="relative w-72 sm:w-80 md:w-80 aspect-[3/4] bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-blush-100">
              {/* Bride photo */}
              <img 
                src="/divya.png" 
                alt="Divya - The Radiant Bride" 
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-blush-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                <div className="text-center text-white">
                  <p className="font-serif text-3xl font-bold">Divya</p>
                  <p className="font-cursive text-xl mt-2">The Radiant Bride</p>
                </div>
              </div>
            </div>

            {/* Decorative hearts */}
            <motion.div
              className="absolute -top-4 -left-4 text-4xl"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              💕
            </motion.div>
          </motion.div>

          {/* Connecting Heart */}
          <motion.div
            className="absolute md:relative z-20"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              delay: 0.5
            }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <FaHeart className="text-7xl text-blush-500 drop-shadow-2xl" />
              
              {/* Animated ring around heart */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-blush-300"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Groom Card */}
          <motion.div
            variants={cardVariantsRight}
            whileHover={{ 
              scale: 1.05, 
              rotateY: -5,
              boxShadow: "0 25px 50px -12px rgba(170, 130, 255, 0.3)"
            }}
            className="relative group"
          >
            <div className="relative w-72 sm:w-80 md:w-80 aspect-[3/4] bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-lavender-100">
              {/* Groom photo */}
              <img 
                src="/vijay.png" 
                alt="Vijay - The Groom" 
                className="w-full h-full object-cover object-top"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-lavender-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                <div className="text-center text-white">
                  <p className="font-serif text-3xl font-bold">Vijay</p>
                  <p className="font-cursive text-xl mt-2">The Charming Groom</p>
                </div>
              </div>
            </div>

            {/* Decorative hearts */}
            <motion.div
              className="absolute -top-4 -right-4 text-4xl"
              animate={{ 
                rotate: [0, -10, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              💖
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="font-cursive text-3xl text-rosegold-600">
            Made for each other ✨
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CoupleIntro;
