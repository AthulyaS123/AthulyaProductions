// import { useState, useEffect } from 'react';
// import { Play } from 'lucide-react';

// interface LandingPageProps {
//   onComplete: () => void;
// }

// export function LandingPage({ onComplete }: LandingPageProps) {
//   const [fadeOut, setFadeOut] = useState(false);

//   const handleEnter = () => {
//     setFadeOut(true);
//     setTimeout(() => {
//       onComplete();
//     }, 800);
//   };

//   return (
//     <div
//       className={`fixed inset-0 bg-black flex items-center justify-center transition-opacity duration-800 ${
//         fadeOut ? 'opacity-0' : 'opacity-100'
//       }`}
//     >
//       {/* Animated red glow background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[120px] animate-pulse" />
//       </div>

//       <div className="relative z-10 text-center space-y-12 px-4">
//         {/* Logo/Name */}
//         <div className="space-y-4">
//           <h1 className="text-6xl md:text-8xl text-red-600 tracking-[0.3em] animate-fade-in">
//             ATHULYA
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-400 tracking-widest animate-fade-in-delay">
//             PRODUCTIONS
//           </p>
//         </div>

//         {/* Enter Button */}
//         <button
//           onClick={handleEnter}
//           className="group relative px-12 py-5 bg-white/5 hover:bg-white/10 text-white rounded-full backdrop-blur-md transition-all duration-500 hover:scale-110 border border-white/20 shadow-2xl hover:shadow-red-500/50 animate-fade-in-delay-2"
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//           <span className="relative flex items-center gap-3 tracking-wider">
//             <Play className="w-5 h-5" />
//             ENTER
//           </span>
//         </button>

//         {/* Tagline */}
//         <p className="text-sm text-gray-500 tracking-widest animate-fade-in-delay-3">
//           CREATIVE • INNOVATIVE • CINEMATIC
//         </p>
//       </div>

//       <style>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 1s ease-out;
//         }

//         .animate-fade-in-delay {
//           animation: fade-in 1s ease-out 0.3s both;
//         }

//         .animate-fade-in-delay-2 {
//           animation: fade-in 1s ease-out 0.6s both;
//         }

//         .animate-fade-in-delay-3 {
//           animation: fade-in 1s ease-out 0.9s both;
//         }
//       `}</style>
//     </div>
//   );
// }

import { motion } from 'motion/react';
import { Play } from 'lucide-react';

interface LandingPageProps {
  onComplete: () => void;
}

export function LandingPage({ onComplete }: LandingPageProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-black to-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Multiple layered red glowing orbs */}
             <div className="absolute inset-0 overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[120px] animate-pulse" />
       </div>
      <motion.div
      
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.15, 0.25, 0.15],
          scale: [0.8, 1, 0.8]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.2, 0.3, 0.2],
          scale: [0.9, 1.1, 0.9]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-red-700/8 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [0.85, 1.05, 0.85]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Additional ambient red glows */}
      <motion.div
        className="absolute top-10 right-10 w-72 h-72 bg-red-600/8 rounded-full blur-3xl"
        animate={{ 
          opacity: [0.08, 0.15, 0.08],
          scale: [0.9, 1.1, 0.9],
          x: [0, 20, 0],
          y: [0, 30, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-red-500/6 rounded-full blur-3xl"
        animate={{ 
          opacity: [0.06, 0.12, 0.06],
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 w-56 h-56 bg-red-700/7 rounded-full blur-3xl"
        animate={{ 
          opacity: [0.07, 0.14, 0.07],
          scale: [0.95, 1.15, 0.95]
        }}
        transition={{ 
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5
        }}
      />



      {/* Radial pulse effects from center */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/50 rounded-full blur-[120px] animate-pulse"
        animate={{ 
          scale: [0.8, 1.5],
          opacity: [0.3, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/50 rounded-full blur-[120px] animate-pulse"
        animate={{ 
          scale: [0.8, 1.5],
          opacity: [0.3, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeOut",
          delay: 2
        }}
      />

      {/* Animated light rays */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(220, 38, 38, 0.15) 0%, transparent 50%)'
        }}
        animate={{ 
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 70% 80%, rgba(220, 38, 38, 0.12) 0%, transparent 50%)'
        }}
        animate={{ 
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Animated particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-red-500/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1, 1, 0],
              opacity: [0, 0.6, 0.6, 0],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight - 200,
              ],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Floating red sparkles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-2 h-2 bg-red-500/40 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5],
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        
        {/* Title animation */}
        <motion.h1
          className="text-6xl md:text-8xl text-red-600 mb-8 tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
            <h1 className="text-6xl md:text-8xl text-red-600 tracking-[0.3em] animate-fade-in">
            ATHULYA
          </h1>
        </motion.h1>

        {/* Subtitle animation */}
        <motion.div
          className="text-xl md:text-2xl text-gray-400 mb-12 tracking-wide leading-relaxed space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
                   <p className="text-sm text-gray-500 tracking-widest animate-fade-in-delay-3">
         CREATOR • INNOVATOR • DEVELOPER
        </p>
        </motion.div>




        {/* CTA Button */}
        <motion.button
          className="group relative px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105 border border-white/20 shadow-lg hover:shadow-2xl hover:shadow-red-500/50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: 1.5, 
            duration: 0.8,
            ease: [0.34, 1.56, 0.64, 1]
          }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
          }}
          whileTap={{ 
            scale: 0.95,
            transition: { duration: 0.1 }
          }}
          onClick={onComplete}
        >
          <span className="flex items-center gap-2 text-lg">
            <Play className="w-5 h-5" fill="currentColor" />
            Welcome
          </span>
        </motion.button>

        {/* CTA Button */}





        {/* Animated underline */}
        {/* <motion.div
          className="mx-auto mt-16 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '100%', opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
          style={{ maxWidth: '600px' }}
        /> */}
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}