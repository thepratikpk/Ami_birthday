import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import CircularGallery from './CircularGallery';

// Import all photos
import photo1 from '../assets/1.jpg';
import photo2 from '../assets/2.jpg';
import photo3 from '../assets/3.jpg';
import photo4 from '../assets/4.jpg';
import photo5 from '../assets/5.jpg';
import photo6 from '../assets/6.jpg';
import photo7 from '../assets/7.jpg';
import photo8 from '../assets/8.jpg';
import photo9 from '../assets/9.jpg';
import photo10 from '../assets/10.jpg';

// Import cat decorations
import cat1 from '../assets/cat1.avif';
import cat2 from '../assets/cat2.jpg';
import cat3 from '../assets/cat3.jpg';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedPhoto, setSelectedPhoto] = useState(null);



  const floatingVariants = {
    animate: {
      y: [0, -8, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Photo data for 3D gallery with sweet captions and personalized messages
  const galleryItems = [
    { 
      image: photo1, 
      text: "Sweetheart",
      message: "Every moment with you feels like a fairytale. You light up my world with your beautiful smile! 💕"
    },
    { 
      image: photo2, 
      text: "Honey",
      message: "Your sweetness makes every day brighter. Thank you for being the most amazing person in my life! 🍯✨"
    },
    { 
      image: photo3, 
      text: "My Darling",
      message: "You are my heart, my soul, my everything. This photo captures just a glimpse of your incredible beauty! 💖"
    },
    { 
      image: photo4, 
      text: "Baby Girl",
      message: "Your innocence and joy inspire me every day. You're growing into such a wonderful person! 🌸"
    },
    { 
      image: photo5, 
      text: "Angel",
      message: "You truly are an angel sent from heaven. Your kindness and love make the world a better place! 👼💕"
    },
    { 
      image: photo6, 
      text: "Princess",
      message: "My beautiful princess, you deserve all the happiness in the world. Keep shining bright! 👑✨"
    },
    { 
      image: photo7, 
      text: "Cutie Pie",
      message: "Your adorable smile can melt anyone's heart. You bring so much joy and laughter to everyone around you! 🥧💖"
    },
    { 
      image: photo8, 
      text: "Beautiful",
      message: "Beauty radiates from within you. Your inner light shines brighter than any star in the sky! ⭐💫"
    },
    { 
      image: photo9, 
      text: "Sunshine",
      message: "You are my sunshine on cloudy days. Your warmth and love brighten every corner of my heart! ☀️💛"
    },
    { 
      image: photo10, 
      text: "Love",
      message: "This word doesn't even begin to describe how much you mean to me. You are my everything! 💕💖💗"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-heading text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-pink-500 drop-shadow-lg mb-3 sm:mb-4">
          Beautiful Memories 📸
        </h2>
        <p className="font-comfort text-base sm:text-lg md:text-xl text-purple-600 bg-white/60 rounded-full px-4 sm:px-6 py-2 inline-block shadow-lg">
          Every moment with you is picture perfect! 💕
        </p>
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div 
        className="absolute top-20 left-10 text-4xl opacity-60"
        variants={floatingVariants}
        animate="animate"
      >
        💖
      </motion.div>
      <motion.div 
        className="absolute top-32 right-16 text-3xl opacity-60"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        🌟
      </motion.div>
      <motion.div 
        className="absolute bottom-20 left-20 text-4xl opacity-60"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        🎀
      </motion.div>

      {/* Floating Cat Decorations */}
      <motion.div 
        className="absolute top-40 left-16 w-20 h-20 rounded-full overflow-hidden shadow-lg border-3 border-pink-300 opacity-80"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 0.2, duration: 3.5 }}
      >
        <img src={cat1} alt="Cute cat decoration" className="w-full h-full object-cover" />
      </motion.div>
      <motion.div 
        className="absolute top-60 right-20 w-16 h-16 rounded-full overflow-hidden shadow-lg border-3 border-purple-300 opacity-80"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 0.7, duration: 4 }}
      >
        <img src={cat2} alt="Cute cat decoration" className="w-full h-full object-cover" />
      </motion.div>
      <motion.div 
        className="absolute bottom-40 right-16 w-18 h-18 rounded-full overflow-hidden shadow-lg border-3 border-blue-300 opacity-80"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1.3, duration: 3.8 }}
      >
        <img src={cat3} alt="Cute cat decoration" className="w-full h-full object-cover" />
      </motion.div>

      {/* 3D Circular Gallery */}
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="relative">
          {/* Decorative corners for the gallery */}
          <div className="absolute -top-4 -left-4 text-4xl z-10">🌸</div>
          <div className="absolute -top-4 -right-4 text-4xl z-10">🦋</div>
          <div className="absolute -bottom-4 -left-4 text-4xl z-10">🎀</div>
          <div className="absolute -bottom-4 -right-4 text-4xl z-10">💝</div>
          
          <div className="h-[400px] sm:h-[500px] md:h-[600px] bg-pink-50 rounded-2xl sm:rounded-3xl shadow-2xl border-2 sm:border-4 border-pink-200 overflow-hidden relative">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-8 left-8 text-6xl">💕</div>
              <div className="absolute top-16 right-12 text-4xl">✨</div>
              <div className="absolute bottom-16 left-12 text-5xl">🌟</div>
              <div className="absolute bottom-8 right-8 text-6xl">💖</div>
            </div>
            
            <CircularGallery 
              items={galleryItems}
              bend={2.5}
              textColor="#8B5A83"
              borderRadius={0.08}
              font="bold 26px Caveat"
              scrollSpeed={1.8}
              scrollEase={0.08}
            />
          </div>
        </div>
        
        {/* Gallery Instructions */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="font-handwritten text-base sm:text-lg text-purple-500 mb-2">
            ✨ Drag or scroll to explore the 3D memories ✨
          </p>
          <div className="flex justify-center space-x-2">
            {['🖱️', '👆', '💕'].map((icon, i) => (
              <motion.span
                key={i}
                className="text-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              >
                {icon}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Clickable Photo Grid - Mobile Optimized */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 mt-8 sm:mt-12 px-2 sm:px-0"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedPhoto(item)}
            >
              <div className="bg-white p-1.5 sm:p-2 pb-6 sm:pb-8 rounded-lg shadow-lg border-2 border-pink-200 transform rotate-1 hover:rotate-0 transition-transform">
                <div className="w-full h-20 xs:h-24 sm:h-28 md:h-32 bg-pink-50 rounded flex items-center justify-center overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.text}
                    className="max-w-full max-h-full object-contain rounded"
                  />
                </div>
                <p className="text-center text-xs sm:text-sm font-handwritten text-purple-600 mt-1 sm:mt-2">
                  {item.text}
                </p>
              </div>
              <div className="absolute inset-0 bg-pink-200 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity"></div>
              
              {/* Click indicator - Mobile Optimized */}
              <motion.div 
                className="absolute top-1 sm:top-2 right-1 sm:right-2 bg-pink-500 text-white rounded-full w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                💌
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Alternative: Simple instruction for 3D gallery */}
        <motion.div 
          className="text-center mt-6 sm:mt-8 bg-white/80 rounded-2xl p-3 sm:p-4 mx-auto max-w-xs sm:max-w-md"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="font-handwritten text-base sm:text-lg text-purple-600 mb-2">
            💡 The 3D gallery above is for viewing
          </p>
          <p className="font-handwritten text-sm sm:text-base text-pink-500">
            👆 Click the photos below to read special messages!
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom decorative hearts */}
      <div className="flex justify-center mt-16 space-x-4">
        {['💕', '💖', '💗', '💝', '💘'].map((heart, i) => (
          <motion.div
            key={i}
            className="text-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3
            }}
          >
            {heart}
          </motion.div>
        ))}
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 max-w-sm sm:max-w-md md:max-w-lg w-full mx-2 sm:mx-4 relative max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-300 transition-colors"
            >
              ✕
            </button>

            {/* Decorative corners */}
            <div className="absolute -top-2 -left-2 text-2xl">🌸</div>
            <div className="absolute -top-2 -right-2 text-2xl">✨</div>
            <div className="absolute -bottom-2 -left-2 text-2xl">💖</div>
            <div className="absolute -bottom-2 -right-2 text-2xl">🦋</div>

            {/* Photo - Mobile Optimized */}
            <div className="bg-pink-50 p-3 sm:p-4 pb-6 sm:pb-8 rounded-2xl mb-4 sm:mb-6 shadow-inner">
              <div className="w-full h-48 xs:h-56 sm:h-64 md:h-80 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src={selectedPhoto.image} 
                  alt={selectedPhoto.text}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
              <motion.p 
                className="text-center text-lg sm:text-xl font-handwritten text-purple-600 mt-2 sm:mt-3"
                style={{ fontFamily: "'Great Vibes', cursive" }}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {selectedPhoto.text}
              </motion.p>
            </div>

            {/* Message - Mobile Optimized */}
            <motion.div
              className="bg-gradient-to-br from-pink-50 to-purple-50 p-4 sm:p-6 rounded-2xl border-2 border-pink-200"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="font-comfort text-sm sm:text-base md:text-lg text-purple-700 text-center leading-relaxed">
                {selectedPhoto.message}
              </p>
            </motion.div>

            {/* Floating hearts around modal */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl pointer-events-none"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 0.7, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              >
                {['💕', '💖', '✨', '🌸'][Math.floor(Math.random() * 4)]}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;