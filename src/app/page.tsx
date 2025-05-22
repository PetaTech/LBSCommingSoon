'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import RainEffect from './components/RainEffect';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 15);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 relative">
      <RainEffect />
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 gold-text"
            animate={{ 
              textShadow: [
                "0 0 7px #D4AF37",
                "0 0 10px #D4AF37",
                "0 0 21px #D4AF37",
                "0 0 7px #D4AF37"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            LovedByStyle
          </motion.h1>
          
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl mb-4">Coming Soon</h2>
            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <motion.div
                  key={unit}
                  className="bg-black/30 p-4 rounded-lg border gold-border backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(212, 175, 55, 0.5)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl md:text-4xl font-bold gold-text">{value}</div>
                  <div className="text-sm uppercase">{unit}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="space-y-6 text-lg text-left backdrop-blur-sm bg-black/20 p-8 rounded-xl"
        >
          <motion.p 
            className="gold-text text-xl font-semibold"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Where Fashion Meets Mutual Support
          </motion.p>
          <motion.p variants={itemVariants}>
            LovedByStyle is a fashion-focused social network where men and women engage in authentic conversations about style. Through honest feedback and shared discovery, users learn about each other's tastes and grow together — not just in how they dress, but in how they connect and reflect on personal expression.
          </motion.p>
          <motion.p variants={itemVariants}>
            At our core, we believe fashion is more than appearance — it's a powerful means of communication. LovedByStyle was created for those who see style as a way to connect meaningfully, express individuality, and cultivate self-awareness.
          </motion.p>
          <motion.p variants={itemVariants}>
            We envision a more beautiful world by bringing women and men closer through mutual appreciation. In this space, each person's unique charm matters. We believe there are no unattractive people — only those who haven't yet learned how to present their best selves. A refined sense of style doesn't guarantee love, but it can open the door to connection, confidence, and admiration.
          </motion.p>
          <motion.p variants={itemVariants}>
            On LovedByStyle, your look becomes more than just an outfit — it becomes a conversation. Men can better understand how their style resonates with women, and women can do the same with men. This mutual exchange builds empathy, appreciation, and a richer fashion experience.
          </motion.p>
          <motion.p variants={itemVariants}>
            Unlike other platforms that emphasize exposure and surface-level validation, LovedByStyle champions thoughtful feedback and meaningful dialogue. We invite users to reflect, not just react; to appreciate, not compare.
          </motion.p>
          <motion.p variants={itemVariants}>
            LovedByStyle is not just a place to showcase your fashion — it's a community where you can explore, grow, and connect through diverse perspectives and shared experiences.
          </motion.p>
          <motion.p 
            className="gold-text font-semibold"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Join us in building a culture where style and support go hand in hand.
          </motion.p>
        </motion.div>
      </motion.div>
    </main>
  );
} 