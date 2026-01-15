import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery photos
  const photos = [
    { id: 1, src: '/divya1.png', title: 'Beautiful Moments', color: 'from-blush-200 to-rosegold-200' },
    { id: 2, src: '/divya2.png', title: 'Together Forever', color: 'from-lavender-200 to-blush-200' },
    { id: 3, src: '/divya3.png', title: 'Love Blooms', color: 'from-rosegold-200 to-cream-200' },
    { id: 4, src: '/divya4.png', title: 'Magical Times', color: 'from-blush-200 to-lavender-200' },
    { id: 5, src: '/vijay1.png', title: 'Precious Memories', color: 'from-cream-200 to-blush-200' },
    { id: 6, src: '/vijay2.png', title: 'Celebrations', color: 'from-lavender-200 to-rosegold-200' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-blush-50 to-lavender-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 text-9xl">💕</div>
        <div className="absolute bottom-20 right-10 text-9xl">💖</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 sm:mb-14 md:mb-16 px-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blush-600 to-lavender-600 mb-3 sm:mb-4">
            Captured Moments
          </h2>
          <p className="font-cursive text-xl sm:text-2xl text-rosegold-600">
            Every Picture Tells a Story
          </p>
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                rotateZ: index % 2 === 0 ? 2 : -2,
                y: -10
              }}
              className="cursor-pointer"
              onClick={() => setSelectedImage(photo)}
            >
              {/* Polaroid Style Card */}
              <div className="bg-white p-4 rounded-lg shadow-2xl transform hover:shadow-blush-300/50 transition-all duration-300">
                <div className={`relative aspect-square bg-gradient-to-br ${photo.color} rounded-lg overflow-hidden mb-4`}>
                  {/* Gallery Photo */}
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6"
                    whileHover={{ opacity: 1 }}
                  >
                    <p className="font-cursive text-white text-2xl">
                      Click to view
                    </p>
                  </motion.div>

                  {/* Floating hearts on hover */}
                  <motion.div
                    className="absolute top-2 right-2 text-2xl"
                    whileHover={{ 
                      scale: [1, 1.3, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    ❤️
                  </motion.div>
                </div>

                {/* Photo caption */}
                <div className="text-center">
                  <p className="font-cursive text-xl text-rosegold-700">{photo.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Floating hearts in modal */}
            {Array.from({ length: 15 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute text-blush-400 text-3xl"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: window.innerHeight + 50,
                  opacity: 0
                }}
                animate={{
                  y: -50,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              >
                ❤️
              </motion.div>
            ))}

            {/* Modal Content */}
            <motion.div
              className="relative max-w-4xl w-full bg-white p-8 rounded-2xl"
              initial={{ scale: 0, rotateZ: -10 }}
              animate={{ scale: 1, rotateZ: 0 }}
              exit={{ scale: 0, rotateZ: 10 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-blush-600 hover:text-blush-800 text-3xl z-10 bg-white rounded-full p-2 shadow-lg"
              >
                <FaTimes />
              </button>

              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden mb-6">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center">
                <h3 className="font-serif text-3xl text-blush-600 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="font-cursive text-xl text-rosegold-600">
                  A moment to cherish forever 💕
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
