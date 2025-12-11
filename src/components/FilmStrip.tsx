import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const images = [
  { id: 1, url: `${import.meta.env.BASE_URL}home/D950685E-2189-45EB-A358-C78B8C83DC49_1_105_c.jpeg`, title: 'Memory 1' },
  { id: 2, url: `${import.meta.env.BASE_URL}home/1764651A-715E-4C80-B34A-8B4B8043DEED_1_105_c.jpeg`, title: 'Memory 2' },
  { id: 3, url: `${import.meta.env.BASE_URL}home/2F3DF2E5-6999-4A9E-8456-B55FEE087527_1_105_c.jpeg`, title: 'Memory 3' },

  { id: 4, url: `${import.meta.env.BASE_URL}home/D4525498-5E22-4097-9E79-F2A48E071362_4_5005_c.jpeg`, title: 'Memory 4' },
  { id: 5, url: `${import.meta.env.BASE_URL}home/hii.jpeg`, title: 'Memory 5' },
  { id: 6, url: `${import.meta.env.BASE_URL}home/1EE07EB4-72E9-47EB-961D-FB8D4098F3B0_4_5005_c.jpeg`, title: 'Memory 6' },

  { id: 7, url: `${import.meta.env.BASE_URL}home/9A425A81-CFD2-4A8B-A11D-12209EA94ECF_4_5005_c.jpeg`, title: 'Memory 7' },
  { id: 8, url: `${import.meta.env.BASE_URL}home/F22FC022-54E7-4F9B-8178-6319ECF387E8_4_5005_c.jpeg`, title: 'Memory 8' },

  { id: 10, url: `${import.meta.env.BASE_URL}home/DEB03312-4CC9-4A34-9D1E-B473C6BD769D_1_105_c.jpeg`, title: 'Memory 10' },
  { id: 12, url: `${import.meta.env.BASE_URL}home/D9CF54A7-B078-40E5-9F79-7D547F4B9218_1_105_c.jpeg`, title: 'Memory 12' },
  { id: 15, url: `${import.meta.env.BASE_URL}home/BB95E464-458E-4B1C-9F52-6ED9BAA2E8B3_4_5005_c.jpeg`, title: 'Memory 15' },

  { id: 18, url: `${import.meta.env.BASE_URL}home/6667B65E-27E3-4E9C-BBBA-FBAF800F48A7_1_105_c.jpeg`, title: 'Memory 18' },
  { id: 19, url: `${import.meta.env.BASE_URL}home/5ABAFDE2-2D19-4FE6-9AE1-1FF1D01BBEB0_1_105_c.jpeg`, title: 'Memory 19' },

  { id: 23, url: `${import.meta.env.BASE_URL}home/D2DD15D0-B35E-45D7-B4D0-52DFBE293FCB_4_5005_c.jpeg`, title: 'Memory 23' },
  { id: 24, url: `${import.meta.env.BASE_URL}home/BF19199A-FF7A-46FF-A6D7-E2E976B3A862_4_5005_c.jpeg`, title: 'Memory 24' },
  { id: 25, url: `${import.meta.env.BASE_URL}home/94C93D63-53CD-44AF-BDFE-F6D44E8CD684_4_5005_c.jpeg`, title: 'Memory 25' },

  { id: 27, url: `${import.meta.env.BASE_URL}home/B3D9E051-F0D6-4BA9-8BE6-671A3B9FC5EB.jpeg`, title: 'Memory 27' },
  { id: 28, url: `${import.meta.env.BASE_URL}home/6449B87B-7844-40FB-B7FD-7C2EB2F94137_4_5005_c.jpeg`, title: 'Memory 28' },

  { id: 29, url: `${import.meta.env.BASE_URL}home/26450043-EC3F-499E-88A1-40B171442D17_4_5005_c.jpeg`, title: 'Memory 29' },
  { id: 30, url: `${import.meta.env.BASE_URL}home/30FAA7DF-38C7-4B17-B53D-68D027973F34_1_105_c.jpeg`, title: 'Memory 30' },
  { id: 32, url: `${import.meta.env.BASE_URL}home/92D466AB-BF37-41DA-8001-19F6C302138F_4_5005_c.jpeg`, title: 'Memory 32' }
];


export function FilmStrip() {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [spotlightFading, setSpotlightFading] = useState(false);
  
  // Spotlight image (id 3) - calculate initial position to center it
  const spotlightImageIndex = 2; // id 3 is at index 1
  const imageWidth = 245; // Reduced from 360px
  const gap = 12; // Reduced from 16px
  const initialOffset = -(spotlightImageIndex * (imageWidth + gap)) + (typeof window !== 'undefined' ? window.innerWidth / 2 - imageWidth / 2 : 400);
  
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images, ...images];

  // Start animation after spotlight
  useEffect(() => {
    // Start fading out spotlight
    const fadeTimer = setTimeout(() => {
      setSpotlightFading(true);
    }, 1800); // Start fading at 2.5 seconds
    
    // Start scroll animation
    const scrollTimer = setTimeout(() => {
      setAnimationStarted(true);
    }, 2200); // Start scrolling at 3.5 seconds

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <div className="w-full py-5 relative">
      {/* Film strip perforations (top) */}
      {/* <div className="absolute top-0 left-0 right-0 h-6 bg-zinc-900 flex items-center justify-around z-10 border-b border-zinc-800">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={`perf-top-${i}`} className="w-3 h-3 bg-zinc-700 rounded-sm" />
        ))}
      </div> */}

      {/* Film strip perforations (bottom) */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-6 bg-zinc-900 flex items-center justify-around z-10 border-t border-zinc-800">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={`perf-bottom-${i}`} className="w-3 h-3 bg-zinc-700 rounded-sm" />
        ))}
      </div> */}

      {/* Scrolling images container */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-3 px-3"
          initial={{ x: initialOffset }}
          animate={{
            x: animationStarted 
              ? [initialOffset, -1 * (images.length * imageWidth + images.length * gap)]
              : initialOffset,
          }}
          transition={{
            x: {
              duration: animationStarted ? 60 : 0,
              repeat: animationStarted ? Infinity : 0,
              ease: 'linear',
              delay: animationStarted ? 0 : 0,
            },
          }}
        >
          {duplicatedImages.map((image, index) => {
            const isSpotlight = image.id === 3 && index === spotlightImageIndex && !animationStarted;
            
            return (
              <motion.div
                key={`${image.id}-${index}`}
                className="flex-shrink-0 relative group"
                style={{ 
                  width: `${imageWidth}px`,
                  height: '150px',
                  zIndex: isSpotlight ? 50 : 1 
                }}
                initial={{ scale: 1, opacity: 1 }}
                animate={{
                  scale: isSpotlight ? (spotlightFading ? 1 : 1.1) : 1,
                  opacity: 1,
                }}
                transition={{
                  scale: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
                  opacity: { duration: 0.5 },
                }}
              >
                {/* Spotlight red glow effect */}
                {isSpotlight && (
                  <motion.div
                    className="absolute -inset-4 bg-red-500/40 rounded-lg blur-xl z-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: spotlightFading ? [0.7, 0] : [0, 0.5, 0.7, 0.5],
                      scale: spotlightFading ? [1.1, 1] : [0.9, 1, 1.15, 1],
                    }}
                    transition={{
                      duration: spotlightFading ? 1 : 3,
                      repeat: spotlightFading ? 0 : Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                
                <img
                  src={image.url}
                  alt={image.title}
                  className={`w-full h-full object-cover rounded-md shadow-2xl transition-all duration-500 ease-out ${
                    isSpotlight 
                      ? 'ring-4 ring-red-500 shadow-[0_0_40px_rgba(239,68,68,0.6)]' 
                      : 'group-hover:scale-105'
                  }`}
                  style={{ position: 'relative', zIndex: isSpotlight ? 20 : 1 }}
                />
                <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <h3 className="text-sm">{image.title}</h3>
                </div>
                {/* Frame border */}
                <motion.div 
                  className={`absolute inset-0 rounded-md pointer-events-none ${
                    isSpotlight ? 'border-4 border-red-500' : 'border-2 border-gray-900'
                  }`}
                  animate={{
                    opacity: isSpotlight && spotlightFading ? 0 : 1,
                  }}
                  transition={{
                    duration: 1,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Vignette effect - dimmed during spotlight */}
      <motion.div 
        className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black via-transparent to-black"
        animate={{
          opacity: animationStarted ? 1 : 0.3,
        }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
      
      {/* Spotlight overlay - darkens everything except the spotlight image */}
      {!animationStarted && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ 
            zIndex: 40,
            background: 'radial-gradient(circle 250px at center, transparent 0%, rgba(0,0,0,0.8) 60%)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: spotlightFading ? 0 : 1 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        />
      )}
    </div>
  );
}