import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LoveStoryTimeline = () => {
  const timelineRef = useRef(null);
  const lineRef = useRef(null);

  const events = [
    {
      id: 1,
      emoji: '✨',
      title: 'First Meet',
      date: 'Where it all began',
      description: 'Two paths crossed at the perfect moment',
      color: 'blush'
    },
    {
      id: 2,
      emoji: '💝',
      title: 'Shared Moments',
      date: 'Memories in the making',
      description: 'Small moments that slowly became special',
      color: 'lavender'
    },
    {
      id: 3,
      emoji: '💍',
      title: 'The Promise',
      date: 'A beautiful beginning',
      description: 'A promise for a lifetime ahead',
      color: 'rosegold'
    },
    {
      id: 4,
      emoji: '💖',
      title: 'Engagement',
      date: '30 January 2026',
      description: 'A day to celebrate togetherness',
      color: 'blush'
    }
  ];

  useEffect(() => {
    const timeline = timelineRef.current;
    const line = lineRef.current;

    if (timeline && line) {
      gsap.fromTo(
        line,
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: timeline,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/divya.png" 
          alt="Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/80 to-white/85"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/60 via-purple-100/50 to-lavender-100/60"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto">{/* Section Title */}
        <motion.div
          className="text-center mb-16 sm:mb-18 md:mb-20 px-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blush-600 to-lavender-600 mb-3 sm:mb-4">
            💫 Our Story
          </h2>
          <p className="font-cursive text-xl sm:text-2xl text-rosegold-600">
            A journey guided by destiny
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-blush-200 transform -translate-x-1/2">
            <div
              ref={lineRef}
              className="w-full bg-gradient-to-b from-blush-500 via-lavender-500 to-rosegold-500"
              style={{ height: '0%' }}
            />
          </div>

          {/* Timeline Events */}
          <div className="space-y-16 sm:space-y-20 md:space-y-24">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  delay: 0.2
                }}
              >
                {/* Content Card */}
                <motion.div
                  className="w-full md:w-5/12 px-4 md:px-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`bg-white p-5 sm:p-6 rounded-2xl shadow-xl border-2 border-${event.color}-200 hover:shadow-2xl transition-shadow duration-300`}>
                    <div className="text-center mb-4">
                      <motion.div
                        className="text-6xl mb-3"
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
                        {event.emoji}
                      </motion.div>
                      <h3 className="font-serif text-2xl font-bold text-blush-600 mb-2">
                        {event.title}
                      </h3>
                      <p className="font-elegant text-sm text-rosegold-500 mb-3">
                        {event.date}
                      </p>
                    </div>
                    <p className="font-elegant text-center text-gray-600">
                      {event.description}
                    </p>
                  </div>
                </motion.div>

                {/* Center Circle */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <motion.div
                    className={`w-6 h-6 bg-gradient-to-br from-${event.color}-400 to-${event.color}-600 rounded-full border-4 border-white shadow-lg z-10`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      delay: 0.3
                    }}
                    whileHover={{ scale: 1.5 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-blush-400"
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                    />
                  </motion.div>
                </div>

                {/* Empty space on other side */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Decoration */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block text-6xl"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            💕
          </motion.div>
          <p className="font-cursive text-2xl text-rosegold-600 mt-4">
            And the journey continues…
          </p>
          <p className="font-elegant text-lg text-gray-600 mt-2">
            With dreams, hope, and blessings for the future
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveStoryTimeline;
