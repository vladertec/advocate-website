"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, ArrowRight, Shield, Scale, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import ConsultationModal from "./ConsultationModal";
import { useLanguage } from "@/contexts/LanguageContext";

const imageVariants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing для плавности
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Hero() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Выбираем лучшие фото для ротации
  const heroImages = [
    "/assets/IMG_1389.JPG",
    "/assets/IMG_3308.jpg",
    "/assets/IMG_3322.jpg",
    "/assets/IMG_3337.jpg",
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 md:pt-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-700 via-dark-600 to-dark-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4 sm:space-y-6 md:space-y-8"
            >
              <motion.div variants={itemVariants} className="h-0.5 sm:h-1 w-16 sm:w-20 bg-gold"></motion.div>
              
              <motion.h1
                variants={itemVariants}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-white leading-tight"
              >
                {t.hero.title} <motion.span
                  className="text-gold inline-block"
                  animate={{ 
                    textShadow: [
                      "0 0 20px rgba(255,215,0,0.5)",
                      "0 0 30px rgba(255,215,0,0.8)",
                      "0 0 20px rgba(255,215,0,0.5)",
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >{t.hero.name}</motion.span>
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="text-xl sm:text-2xl md:text-3xl font-serif text-gold"
              >
                {t.hero.subtitle}
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed"
              >
                {t.hero.description}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-2 sm:gap-3 md:gap-4"
              >
                {t.hero.slogan.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 0.6 + index * 0.12,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    className="text-gold font-semibold text-sm sm:text-base md:text-lg"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>

              {/* Feature Icons */}
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 pt-2 sm:pt-4"
              >
                {[Shield, Scale, Briefcase].map((Icon, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 5,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gold/10 rounded-lg flex items-center justify-center text-gold border border-gold/20 transition-all"
                  >
                    <Icon size={20} className="sm:w-6 sm:h-6" />
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
              >
                <motion.a
                  href={`tel:${process.env.NEXT_PUBLIC_PHONE || "+380XXXXXXXXX"}`}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(255, 215, 0, 0.5)",
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(255, 215, 0, 0.2)",
                      "0 0 20px rgba(255, 215, 0, 0.4)",
                      "0 0 10px rgba(255, 215, 0, 0.2)",
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gold text-dark-700 font-semibold rounded-lg hover:bg-gold-600 transition-all duration-300 shadow-lg relative overflow-hidden text-sm sm:text-base md:text-lg w-full sm:w-auto"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      x: {
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut",
                      },
                    }}
                  />
                  <Phone size={18} className="sm:w-5 sm:h-5 relative z-10" />
                  <span className="relative z-10">{t.hero.urgent}</span>
                </motion.a>
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ 
                    scale: 1.05,
                    x: 5,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all duration-300 shadow-lg group relative overflow-hidden text-sm sm:text-base md:text-lg w-full sm:w-auto"
                >
                  <motion.div
                    className="absolute inset-0 bg-gold/5"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <span className="relative z-10">{t.hero.consultation}</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10"
                  >
                    <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                  </motion.div>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden border border-gold/20 shadow-2xl mt-8 lg:mt-0"
            >
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="relative w-full h-full"
              >
                <Image
                  src={heroImages[currentImageIndex]}
                  alt={`${t.hero.name} - ${t.hero.subtitle}`}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                  loading="eager"
                />
              </motion.div>
              
              {/* Image Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImageIndex === index
                        ? "bg-gold w-8"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border-t border-r border-gold/30" />
              <div className="absolute bottom-4 left-4 w-20 h-20 border-b border-l border-gold/30" />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-3 bg-gold rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
