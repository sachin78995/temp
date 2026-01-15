import { motion } from 'framer-motion';

const ClosingBlessing = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Beautiful Light Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-lavender-100"></div>
      
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-pink-200/30 via-purple-200/30 to-blue-200/30"
        animate={{
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Soft Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20"></div>

      {/* Floating elements - reduced and more elegant */}
      {Array.from({ length: 12 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.sin(i) * 25, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        >
          {['🌸', '💖', '🌹', '✨'][Math.floor(Math.random() * 4)]}
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Decorative Top Border */}
          <motion.div
            className="text-3xl md:text-4xl mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              💖 🌸 💕
            </motion.span>
          </motion.div>

          {/* Main Message */}
          <motion.h1
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 mb-5 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.03 }}
            style={{
              textShadow: "0 2px 20px rgba(168, 85, 247, 0.15)"
            }}
          >
            With Love and Blessings
          </motion.h1>

          <motion.div
            className="font-cursive text-2xl md:text-4xl text-pink-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            From Our Family 💕
          </motion.div>

          {/* Decorative divider */}
          <motion.div
            className="flex justify-center items-center gap-4 mb-10"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <motion.div 
              className="h-0.5 w-24 bg-gradient-to-r from-transparent via-purple-400 to-pink-400"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <motion.span 
              className="text-5xl cursor-pointer"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.6, rotate: 180 }}
            >
              ❤️
            </motion.span>
            <motion.div 
              className="h-0.5 w-24 bg-gradient-to-l from-transparent via-pink-400 to-purple-400"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
          </motion.div>

          {/* Blessing Message */}
          <motion.div
            className="font-elegant text-lg md:text-xl lg:text-2xl text-gray-800 mb-10 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <motion.p 
              className="mb-5 text-purple-900/90"
              whileHover={{ scale: 1.02, color: "#9333ea" }}
              transition={{ duration: 0.3 }}
            >
              May your journey together be filled with joy, laughter, and countless beautiful moments.
            </motion.p>
            <motion.p 
              className="mb-5 text-purple-900/90"
              whileHover={{ scale: 1.02, color: "#9333ea" }}
              transition={{ duration: 0.3 }}
            >
              May you grow side by side with understanding, respect, and unwavering support for one another.
            </motion.p>
            <motion.p
              className="text-purple-900/90"
              whileHover={{ scale: 1.02, color: "#9333ea" }}
              transition={{ duration: 0.3 }}
            >
              Wishing you both a lifetime of happiness, prosperity, and boundless love.
            </motion.p>
          </motion.div>

          {/* Animated hearts - interactive */}
          <motion.div
            className="flex justify-center gap-6 mb-10 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
          >
            {['💕', '💖', '💗', '💝'].map((heart, index) => (
              <motion.span
                key={index}
                className="text-4xl cursor-pointer"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.5,
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                {heart}
              </motion.span>
            ))}
          </motion.div>

          {/* Final blessing */}
          <motion.div
            className="font-cursive text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 }}
          >
            <motion.p
              className="cursor-pointer"
              animate={{
                opacity: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.1,
                textShadow: "0 0 30px rgba(255, 182, 193, 0.9)",
                transition: { duration: 0.3 }
              }}
            >
              ✨ Forever begins on 30th January 2026 ✨
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative gradient */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-purple-200/40 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2 }}
      />
    </section>
  );
};

export default ClosingBlessing;
