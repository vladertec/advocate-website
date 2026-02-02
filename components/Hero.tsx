"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, ArrowRight, Shield, Scale, Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import ConsultationModal from "./ConsultationModal"
import { useLanguage } from "@/contexts/LanguageContext"

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
}

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
}

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
}

export default function Hero() {
  const { t } = useLanguage()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-screen flex flex-col pt-16 sm:pt-20 md:pt-24 overflow-hidden bg-dark-600">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-dark-600"></div>

        <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4 sm:space-y-6 md:space-y-8"
            >
              <motion.div
                variants={itemVariants}
                className="h-0.5 sm:h-1 w-16 sm:w-20 bg-gold"
              ></motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-serif text-white leading-tight"
              >
                {t.hero.title}{" "}
                <motion.span
                  className="text-white inline-block"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(255,215,0,0.5)",
                      "0 0 30px rgba(255,215,0,0.8)",
                      "0 0 20px rgba(255,215,0,0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {t.hero.name}
                </motion.span>
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-white"
              >
                {t.hero.subtitle}
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed"
              >
                {t.hero.description}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 lg:gap-4"
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
                    className="text-white font-semibold text-xs sm:text-sm md:text-base lg:text-lg"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>

              {/* Feature Icons */}
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 pt-2 sm:pt-4"
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
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gold/10 rounded-lg flex items-center justify-center text-gold border border-gold/30 transition-all flex-shrink-0"
                  >
                    <Icon
                      size={16}
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 pt-2 sm:pt-4"
              >
                <a
                  href={`tel:${
                    process.env.NEXT_PUBLIC_PHONE || "+380XXXXXXXXX"
                  }`}
                  className="flex items-center justify-center space-x-1.5 sm:space-x-2 px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-white text-dark-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200 shadow-lg text-xs sm:text-sm md:text-base lg:text-lg w-full sm:w-auto"
                >
                  <Phone
                    size={16}
                    className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 flex-shrink-0"
                  />
                  <span className="whitespace-nowrap">{t.hero.urgent}</span>
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center justify-center space-x-1.5 sm:space-x-2 px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 shadow-lg text-xs sm:text-sm md:text-base lg:text-lg w-full sm:w-auto"
                >
                  <span className="whitespace-nowrap">
                    {t.hero.consultation}
                  </span>
                  <ArrowRight
                    size={16}
                    className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 text-gold flex-shrink-0"
                  />
                </button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] rounded-lg shadow-2xl mt-8 lg:mt-0 overflow-hidden"
            >
              <Image
                src="/assets/IMG_1389_without_background.png"
                alt={`${t.hero.name} - ${t.hero.subtitle}`}
                width={800}
                height={1200}
                className="object-contain w-full h-full"
                priority
                loading="eager"
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="relative z-10 flex justify-center items-center pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-10 md:pb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gold rounded-full flex justify-center items-start pt-1.5 sm:pt-2"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-2 sm:h-3 bg-white rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
