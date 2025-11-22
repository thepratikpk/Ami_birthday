import { motion } from 'framer-motion';
import mainPhoto from '../assets/1.jpg';

// Custom Balloon Component
const FloatingBalloon = ({ delay, color, size, left, top }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{
      left: `${left}%`,
      top: `${top}%`,
    }}
    animate={{
      y: [0, -15, 0],
      x: [0, 8, -8, 0],
      rotate: [0, 3, -3, 0]
    }}
    transition={{
      duration: 5 + Math.random() * 3,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
  >
    {/* Balloon */}
    <div
      className="rounded-full shadow-xl border-2 border-white/30"
      style={{ 
        backgroundColor: color,
        width: `${size}px`,
        height: `${size * 1.3}px`,
        opacity: 0.8
      }}
    />
    {/* Balloon string */}
    <div 
      className="absolute left-1/2 bg-gray-400 opacity-60"
      style={{ 
        width: '2px', 
        height: '80px', 
        transform: 'translateX(-50%)',
        top: `${size * 1.3}px`
      }}
    />
    {/* String end */}
    <div 
      className="absolute left-1/2 w-1 h-1 bg-gray-500 rounded-full opacity-60"
      style={{ 
        transform: 'translateX(-50%)',
        top: `${size * 1.3 + 80}px`
      }}
    />
  </motion.div>
);

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
                delayChildren: 0.3
            }
        }
    };

    const photoVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -10 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: -3,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 15,
                bounce: 0.4
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    const sparkleVariants = {
        animate: {
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 0.8, 0],
            transition: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.section
            className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
            style={{ backgroundColor: '#FFF8F0' }} // Soft cream/baby white background
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Custom Floating Balloons Background */}
            <div className="absolute inset-0 z-0">
                <FloatingBalloon delay={0} color="#FFB6C1" size={60} left={8} top={15} />
                <FloatingBalloon delay={1} color="#E6E6FA" size={55} left={88} top={20} />
                <FloatingBalloon delay={2} color="#F0E6FF" size={65} left={12} top={65} />
                <FloatingBalloon delay={3} color="#FFE4E1" size={58} left={85} top={70} />
                <FloatingBalloon delay={4} color="#FFF0F5" size={52} left={45} top={8} />
                <FloatingBalloon delay={5} color="#FFB6C1" size={62} left={20} top={40} />
                <FloatingBalloon delay={6} color="#E6E6FA" size={56} left={78} top={42} />
                <FloatingBalloon delay={7} color="#F0E6FF" size={59} left={3} top={85} />
                <FloatingBalloon delay={8} color="#FFE4E1" size={54} left={92} top={88} />
                <FloatingBalloon delay={9} color="#FFF0F5" size={61} left={35} top={75} />
            </div>

            {/* Soft Confetti/Sparkles */}
            <div className="absolute inset-0 z-1">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-lg opacity-40"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        variants={sparkleVariants}
                        animate="animate"
                        transition={{ delay: Math.random() * 4 }}
                    >
                        {['✨', '🌸', '💕', '🦋'][Math.floor(Math.random() * 4)]}
                    </motion.div>
                ))}
            </div>



            {/* Main Content Layout */}
            <div className="z-10 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
                    
                    {/* Left Side - Polaroid Photo */}
                    <motion.div 
                        className="flex justify-center lg:justify-start order-1"
                        variants={photoVariants}
                    >
                        <motion.div 
                            className="relative"
                            whileHover={{ 
                                scale: 1.02,
                                rotate: -1,
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Polaroid Frame */}
                            <div className="bg-white p-4 pb-16 rounded-lg shadow-2xl transform -rotate-3 border border-gray-100">
                                <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 overflow-hidden rounded-md">
                                    <img 
                                        src={mainPhoto} 
                                        alt="Beautiful Amii" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                
                                {/* "My BBG" text at bottom of Polaroid */}
                                <motion.div 
                                    className="absolute bottom-4 left-0 right-0 text-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.2 }}
                                >
                                    <p className="font-handwritten text-2xl text-gray-600">
                                        My BBG 💖
                                    </p>
                                </motion.div>
                            </div>

                            {/* Soft shadow behind polaroid */}
                            <div className="absolute inset-0 bg-pink-200 rounded-lg blur-xl opacity-20 transform rotate-2 scale-105 -z-10"></div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Typography */}
                    <motion.div 
                        className="text-center lg:text-left space-y-6 order-2"
                        variants={textVariants}
                    >
                        {/* Happy Birthday - Great Vibes Calligraphy */}
                        <motion.h1 
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                type: "spring",
                                stiffness: 100,
                                damping: 12,
                                delay: 0.5
                            }}
                            style={{
                                fontFamily: "'Great Vibes', cursive",
                                background: 'linear-gradient(135deg, #FF69B4 0%, #FF1493 25%, #DC143C 50%, #B22222 75%, #8B0000 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textShadow: '4px 4px 8px rgba(255, 105, 180, 0.4)',
                                filter: 'drop-shadow(3px 3px 6px rgba(255, 20, 147, 0.3))'
                            }}
                        >
                            Happy Birthday
                        </motion.h1>
                        
                        {/* Amii - Great Vibes Calligraphy Style */}
                        <motion.h2 
                            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8rem] mt-4 relative"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                                type: "spring",
                                stiffness: 120,
                                damping: 15,
                                delay: 0.8
                            }}
                            style={{
                                fontFamily: "'Great Vibes', cursive",
                                color: '#9333EA',
                                textShadow: '3px 3px 6px rgba(147, 51, 234, 0.3)',
                                filter: 'drop-shadow(2px 2px 4px rgba(147, 51, 234, 0.2))'
                            }}
                        >
                            <span className="relative inline-block">
                                Amii
                                {/* Decorative flourish */}
                                <motion.span 
                                    className="absolute -top-4 -right-8 text-4xl"
                                    animate={{ 
                                        rotate: [0, 10, -10, 0],
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{ 
                                        duration: 3, 
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    💖
                                </motion.span>
                                {/* Sparkle effects */}
                                <motion.span 
                                    className="absolute -top-6 left-1/4 text-2xl"
                                    animate={{ 
                                        opacity: [0.5, 1, 0.5],
                                        scale: [0.8, 1.2, 0.8]
                                    }}
                                    transition={{ 
                                        duration: 2, 
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.5
                                    }}
                                >
                                    ✨
                                </motion.span>
                                <motion.span 
                                    className="absolute -bottom-4 right-1/3 text-2xl"
                                    animate={{ 
                                        opacity: [0.5, 1, 0.5],
                                        scale: [0.8, 1.2, 0.8]
                                    }}
                                    transition={{ 
                                        duration: 2.5, 
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1
                                    }}
                                >
                                    🌸
                                </motion.span>
                            </span>
                        </motion.h2>

                        {/* Optional cute message */}
                        <motion.p 
                            className="font-handwritten text-xl text-pink-500 mt-8 opacity-80"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            transition={{ delay: 1.2 }}
                        >
                            You're the sweetest! ✨
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;