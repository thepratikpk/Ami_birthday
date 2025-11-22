import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Import cute cat decorations and hangings
import cat4 from '../assets/cat4.png';
import cat5 from '../assets/cat5.webp';
import cat1 from '../assets/cat1.avif';
import cat2 from '../assets/cat2.jpg';
import cat3 from '../assets/cat3.jpg';
import hangings from '../assets/Hangings.png';

const FinalSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.section 
      ref={ref}
      className="pt-48 sm:pt-56 md:pt-64 lg:pt-80 xl:pt-96 pb-20 px-4 text-center relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Happy Birthday Hangings at the top - Made bigger with gentle animations */}
      <motion.div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ 
          opacity: 1, 
          y: [0, -25, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          opacity: { type: "spring", stiffness: 100, damping: 15, delay: 0.3 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
        }}
      >
        <motion.img 
          src={hangings} 
          alt="Happy Birthday Hangings" 
          className="w-80 sm:w-96 md:w-lg lg:w-160 xl:w-3xl h-auto object-contain drop-shadow-lg"
          style={{
            filter: 'drop-shadow(3px 3px 8px rgba(236, 72, 153, 0.4)) saturate(1.2) brightness(1.1)'
          }}
          animate={{
            rotate: [0, 2, -2, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>

      {/* Beautiful Calligraphic Message below Hangings - Moved further down */}
      <motion.div 
        className="absolute top-40 sm:top-48 md:top-56 lg:top-64 xl:top-72 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 120,
          damping: 15,
          delay: 0.8
        }}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-2xl border-3 border-pink-300 relative">
          {/* Decorative corners with cats */}
          <motion.div 
            className="absolute -top-3 -left-3 w-6 h-6 rounded-full overflow-hidden border-2 border-pink-400 bg-white"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={cat1} alt="Corner cat" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            className="absolute -top-3 -right-3 w-6 h-6 rounded-full overflow-hidden border-2 border-purple-400 bg-white"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <img src={cat2} alt="Corner cat" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full overflow-hidden border-2 border-blue-400 bg-white"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <img src={cat3} alt="Corner cat" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full overflow-hidden border-2 border-pink-400 bg-white"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <img src={cat4} alt="Corner cat" className="w-full h-full object-cover" />
          </motion.div>
          
          <motion.div
            className="text-center"
            animate={{ 
              scale: [1, 1.02, 1],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.p 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2"
              style={{ 
                fontFamily: "'Great Vibes', cursive",
                background: 'linear-gradient(135deg, #FF69B4 0%, #FF1493 25%, #DC143C 50%, #B22222 75%, #8B0000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '2px 2px 4px rgba(255, 105, 180, 0.3)',
                filter: 'drop-shadow(1px 1px 2px rgba(255, 20, 147, 0.2))'
              }}
            >
              Another Year of Magic
            </motion.p>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl"
              style={{ 
                fontFamily: "'Great Vibes', cursive",
                color: '#9333EA',
                textShadow: '1px 1px 2px rgba(147, 51, 234, 0.2)'
              }}
            >
              May your dreams sparkle brighter than ever! ✨💖
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
      {/* Floating Cat Decorations - More cats, fewer emojis */}
      <motion.div 
        className="absolute top-32 left-8 w-16 h-16 rounded-full overflow-hidden shadow-lg border-3 border-pink-300 opacity-75"
        animate={{ 
          y: [0, -12, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img src={cat1} alt="Cute cat decoration" className="w-full h-full object-cover" />
      </motion.div>
      
      <motion.div 
        className="absolute top-20 right-8 w-18 h-18 rounded-full overflow-hidden shadow-lg border-3 border-purple-300 opacity-75"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, -3, 3, 0]
        }}
        transition={{ 
          duration: 3.5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <img src={cat2} alt="Cute cat decoration" className="w-full h-full object-cover" />
      </motion.div>

      <motion.div 
        className="absolute top-40 left-1/3 w-14 h-14 rounded-full overflow-hidden shadow-lg border-3 border-blue-300 opacity-75"
        animate={{ 
          y: [0, -8, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <img src={cat3} alt="Cute cat decoration" className="w-full h-full object-cover" />
      </motion.div>

      <motion.div 
        className="absolute bottom-20 left-12 w-16 h-16 rounded-full overflow-hidden shadow-lg border-3 border-pink-300 opacity-75"
        animate={{ 
          y: [0, -12, 0],
          rotate: [0, 8, -8, 0]
        }}
        transition={{ 
          duration: 4.2, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3
        }}
      >
        <img src={cat4} alt="Cute cat decoration" className="w-full h-full object-cover" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-16 right-16 w-14 h-14 rounded-full overflow-hidden shadow-lg border-3 border-purple-300 opacity-75"
        animate={{ 
          y: [0, -8, 0],
          x: [0, 4, -4, 0]
        }}
        transition={{ 
          duration: 3.5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8
        }}
      >
        <img src={cat5} alt="Cute cat decoration" className="w-full h-full object-cover" />
      </motion.div>

      <motion.div 
        className="absolute bottom-32 right-1/3 w-15 h-15 rounded-full overflow-hidden shadow-lg border-3 border-blue-300 opacity-75"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, -5, 5, 0]
        }}
        transition={{ 
          duration: 3.8, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2
        }}
      >
        <img src={cat1} alt="Cute cat decoration" className="w-full h-full object-cover" />
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10 mt-16 sm:mt-20 md:mt-24 lg:mt-32">
        {/* Main Heading - Great Vibes Style - Brought to front */}
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-12 relative z-50"
          variants={itemVariants}
          style={{ 
            fontFamily: "'Great Vibes', cursive",
            background: 'linear-gradient(135deg, #9333EA 0%, #7C3AED 25%, #6366F1 50%, #3B82F6 75%, #06B6D4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '3px 3px 6px rgba(147, 51, 234, 0.3)',
            filter: 'drop-shadow(2px 2px 4px rgba(124, 58, 237, 0.2))'
          }}
        >
          Thank you for being you 💕
        </motion.h2>

        {/* Final Message */}
        <motion.div 
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl mb-16 relative"
          variants={itemVariants}
        >
          {/* Cat decorations in corners instead of emojis */}
          <motion.div 
            className="absolute top-4 left-4 w-8 h-8 rounded-full overflow-hidden shadow-md border-2 border-pink-200 opacity-60"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={cat2} alt="Corner cat" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            className="absolute top-4 right-4 w-8 h-8 rounded-full overflow-hidden shadow-md border-2 border-purple-200 opacity-60"
            animate={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <img src={cat3} alt="Corner cat" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            className="absolute bottom-4 left-4 w-8 h-8 rounded-full overflow-hidden shadow-md border-2 border-blue-200 opacity-60"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <img src={cat4} alt="Corner cat" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            className="absolute bottom-4 right-4 w-8 h-8 rounded-full overflow-hidden shadow-md border-2 border-pink-200 opacity-60"
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <img src={cat5} alt="Corner cat" className="w-full h-full object-cover" />
          </motion.div>
          
          <motion.div 
            className="text-center"
            animate={{ 
              scale: [1, 1.01, 1],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.p 
              className="text-xl md:text-2xl mb-4"
              style={{ 
                fontFamily: "'Great Vibes', cursive",
                background: 'linear-gradient(135deg, #9333EA 0%, #7C3AED 50%, #6366F1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '2px 2px 4px rgba(147, 51, 234, 0.3)',
                filter: 'drop-shadow(1px 1px 2px rgba(124, 58, 237, 0.2))'
              }}
            >
              Sweet Amii, My Precious One
            </motion.p>
            <p className="font-comfort text-lg md:text-xl text-purple-700 leading-relaxed mb-4">
              On this special day, I want you to know how incredibly blessed I feel to have you in my life. Your smile lights up every room, your laughter is music to my soul, and your kind heart makes the world a more beautiful place.
            </p>
            <p className="font-comfort text-lg md:text-xl text-purple-700 leading-relaxed mb-4">
              As you celebrate another year of being absolutely amazing, remember that you are loved beyond measure. May this new chapter bring you endless adventures, sweet surprises, and all the happiness your heart can hold.
            </p>
            <motion.p 
              className="text-lg md:text-xl"
              style={{ 
                fontFamily: "'Great Vibes', cursive",
                color: '#FF69B4',
                textShadow: '1px 1px 2px rgba(255, 105, 180, 0.3)'
              }}
            >
              You deserve all the magic in the world, beautiful! ✨💖🌟
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Replay Button */}
        <motion.button 
          className="cute-button text-xl px-10 py-5 mb-16"
          variants={itemVariants}
          onClick={scrollToTop}
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -2, 2, -2, 0],
            transition: { duration: 0.5 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          Replay the Magic ✨
        </motion.button>

        {/* Floating Cat Hearts Animation */}
        <motion.div 
          className="flex justify-center space-x-4 mb-12"
          variants={itemVariants}
        >
          {[cat1, cat2, cat3, cat4, cat5].map((catImg, i) => (
            <motion.div
              key={i}
              className="w-12 h-12 rounded-full overflow-hidden shadow-lg border-2 border-pink-300"
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            >
              <img src={catImg} alt="Floating cat" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer - Great Vibes Style */}
        <motion.div 
          className="border-t border-pink-200 pt-8"
          variants={itemVariants}
        >
          <motion.p 
            className="text-2xl sm:text-3xl md:text-4xl mb-6"
            style={{ 
              fontFamily: "'Great Vibes', cursive",
              background: 'linear-gradient(135deg, #FF69B4 0%, #FF1493 50%, #DC143C 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '2px 2px 4px rgba(255, 105, 180, 0.3)',
              filter: 'drop-shadow(1px 1px 2px rgba(255, 20, 147, 0.2))'
            }}
            animate={{ 
              scale: [1, 1.02, 1],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Made with endless love just for you 💖
          </motion.p>
          <div className="flex justify-center space-x-4">
            {[cat1, cat2, cat3, cat4, cat5].map((catImg, i) => (
              <motion.div
                key={i}
                className="w-10 h-10 rounded-full overflow-hidden shadow-lg border-3 border-pink-300"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                  y: [0, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              >
                <img src={catImg} alt="Footer cat" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Gentle Sparkle Effect - Reduced */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl pointer-events-none opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        >
          {['✨', '💕', '🌸'][Math.floor(Math.random() * 3)]}
        </motion.div>
      ))}
    </motion.section>
  );
};

export default FinalSection;