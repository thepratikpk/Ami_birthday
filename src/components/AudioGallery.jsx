import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

// Import audio files with correct names
import song1 from '../assets/song1 - Drive u insane.mp3';
import song2 from '../assets/Song 2 -Jugraafiya.mp3';
import song3 from '../assets/Song 3 -CO2.mp3';
import song4 from '../assets/Song 4 - Jhol.mp3';
import song5 from '../assets/song5 - Birds of the Feather.mp3';
import song6 from '../assets/song6 - Teso Naina Lage.mp3';

// Import cat decorations
import cat1 from '../assets/cat1.avif';
import cat2 from '../assets/cat2.jpg';
import cat3 from '../assets/cat3.jpg';
import cat4 from '../assets/cat4.png';
import cat5 from '../assets/cat5.webp';

const AudioGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  const songs = [
    { id: 1, src: song1, title: "Drive u insane" },
    { id: 2, src: song2, title: "Jugraafiya" },
    { id: 3, src: song3, title: "CO2" },
    { id: 4, src: song4, title: "Jhol" },
    { id: 5, src: song5, title: "Birds of the Feather" },
    { id: 6, src: song6, title: "Teso Naina Lage" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const handlePlayPause = (songId, audioElement) => {
    if (currentlyPlaying === songId) {
      audioElement.pause();
      setCurrentlyPlaying(null);
    } else {
      // Pause any currently playing audio
      const allAudio = document.querySelectorAll('audio');
      allAudio.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
      
      audioElement.play();
      setCurrentlyPlaying(songId);
    }
  };

  return (
    <motion.section
      ref={ref}
      className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: '#FFF8F0' }}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Floating Cat Decorations - Hidden on mobile for better performance */}
      <motion.div
        className="hidden sm:block absolute top-16 left-8 w-12 h-12 rounded-full overflow-hidden shadow-lg border-2 border-pink-300 opacity-60"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img src={cat1} alt="Floating cat" className="w-full h-full object-cover" />
      </motion.div>

      <motion.div
        className="hidden sm:block absolute top-32 right-12 w-10 h-10 rounded-full overflow-hidden shadow-lg border-2 border-purple-300 opacity-60"
        animate={{
          y: [0, -12, 0],
          rotate: [0, -8, 8, 0]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <img src={cat2} alt="Floating cat" className="w-full h-full object-cover" />
      </motion.div>

      <motion.div
        className="hidden sm:block absolute bottom-20 left-16 w-8 h-8 rounded-full overflow-hidden shadow-lg border-2 border-blue-300 opacity-60"
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <img src={cat3} alt="Floating cat" className="w-full h-full object-cover" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          variants={itemVariants}
        >
          <motion.h2
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6"
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
            Songs That Remind Me of You
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl"
            style={{
              fontFamily: "'Great Vibes', cursive",
              color: '#9333EA',
              textShadow: '1px 1px 2px rgba(147, 51, 234, 0.2)'
            }}
          >
            Every melody tells our story 🎵💕
          </motion.p>
        </motion.div>

        {/* Audio Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {songs.map((song, index) => (
            <motion.div
              key={song.id}
              className="relative group"
              variants={itemVariants}
            >
              <div className="audio-card bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 shadow-2xl border-2 border-pink-200 relative overflow-hidden">
                {/* Cat decoration in corner */}
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full overflow-hidden border-2 border-pink-400 bg-white shadow-md"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                >
                  <img src={[cat1, cat2, cat3, cat4, cat5][index % 5]} alt="Corner cat" className="w-full h-full object-cover" />
                </motion.div>

                {/* Audio Player */}
                <div className="text-center">
                  <motion.div
                    className="relative mb-4"
                    animate={{
                      scale: currentlyPlaying === song.id ? [1, 1.05, 1] : 1
                    }}
                    transition={{
                      duration: 1,
                      repeat: currentlyPlaying === song.id ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                  >
                    {/* Music Note Icon - Mobile Optimized */}
                    <motion.div
                      className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-2 sm:mb-3 rounded-full flex items-center justify-center text-xl sm:text-2xl lg:text-3xl shadow-lg border-2 border-pink-300"
                      style={{
                        background: currentlyPlaying === song.id 
                          ? 'linear-gradient(135deg, #FF69B4, #FF1493)' 
                          : 'linear-gradient(135deg, #F8BBD9, #E879F9)'
                      }}
                      animate={{
                        rotate: currentlyPlaying === song.id ? [0, 360] : 0
                      }}
                      transition={{
                        duration: 3,
                        repeat: currentlyPlaying === song.id ? Infinity : 0,
                        ease: "linear"
                      }}
                    >
                      {currentlyPlaying === song.id ? '🎵' : '🎶'}
                    </motion.div>

                    {/* Cute Play/Pause Button - Mobile Optimized */}
                    <motion.button
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg flex items-center justify-center text-lg sm:text-xl transition-all duration-200 mx-auto border-2 sm:border-3 border-white"
                      style={{
                        background: currentlyPlaying === song.id 
                          ? 'linear-gradient(135deg, #FF1493, #DC143C)' 
                          : 'linear-gradient(135deg, #FF69B4, #FF1493)',
                        color: 'white'
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: '0 6px 20px rgba(255, 105, 180, 0.4)'
                      }}
                      whileTap={{ scale: 0.85 }}
                      onClick={(e) => {
                        const audio = e.target.closest('.audio-card').querySelector('audio');
                        handlePlayPause(song.id, audio);
                      }}
                    >
                      {currentlyPlaying === song.id ? '⏸️' : '▶️'}
                    </motion.button>
                  </motion.div>

                  {/* Song Title - Mobile Optimized */}
                  <motion.h3
                    className="text-lg sm:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2 px-2"
                    style={{
                      fontFamily: "'Great Vibes', cursive",
                      color: '#9333EA',
                      textShadow: '1px 1px 2px rgba(147, 51, 234, 0.2)'
                    }}
                  >
                    {song.title}
                  </motion.h3>

                  {/* Hidden Audio Element */}
                  <audio
                    className="hidden"
                    onEnded={() => setCurrentlyPlaying(null)}
                    onPause={() => setCurrentlyPlaying(null)}
                  >
                    <source src={song.src} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>

                {/* Sparkle Effects when playing */}
                {currentlyPlaying === song.id && (
                  <>
                    <motion.div
                      className="absolute top-4 left-4 text-yellow-400 text-lg"
                      animate={{
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      ✨
                    </motion.div>
                    <motion.div
                      className="absolute bottom-4 right-4 text-pink-400 text-lg"
                      animate={{
                        scale: [0, 1, 0],
                        rotate: [0, -180, -360],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    >
                      💫
                    </motion.div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          variants={itemVariants}
        >
          <motion.p
            className="text-lg sm:text-xl md:text-2xl"
            style={{
              fontFamily: "'Great Vibes', cursive",
              color: '#FF69B4',
              textShadow: '1px 1px 2px rgba(255, 105, 180, 0.3)'
            }}
            animate={{
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Each song holds a piece of my heart for you 💖🎵
          </motion.p>
        </motion.div>
      </div>

      {/* Gentle Sparkle Effect - Reduced for mobile */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="hidden sm:block absolute text-xl pointer-events-none opacity-30"
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
          {['🎵', '🎶', '💕', '✨'][Math.floor(Math.random() * 4)]}
        </motion.div>
      ))}
    </motion.section>
  );
};

export default AudioGallery;