"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import CTASection from "@/components/CTASection"
import { Award, Briefcase, Shield, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function AboutPage() {
  const { t } = useLanguage()
  const { ref: galleryRef, inView: galleryInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const { ref: contentRef, inView: contentInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const photos = [
    "/assets/IMG_1389.JPG",
    "/assets/IMG_3308.jpg",
    "/assets/IMG_3322.jpg",
  ]

  const iconMap = [Award, Clock, Briefcase, Shield]

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 pt-20 sm:pt-24 md:pt-32 bg-dark-600">
        <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
            {/* Photo Gallery */}
            <motion.div
              ref={galleryRef}
              initial={{ opacity: 0, x: -30 }}
              animate={galleryInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="space-y-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ scale: 1.02 }}
                className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden border border-white/20 shadow-2xl"
              >
                <Image
                  src={photos[0]}
                  alt={`${t.about.name} - ${t.about.experience.title}`}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-700/50 to-transparent" />
              </motion.div>

              {/* Additional Photos Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                {photos.slice(1).map((photo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={
                      galleryInView ? { opacity: 1, scale: 1, y: 0 } : {}
                    }
                    transition={{
                      delay: 0.2 + index * 0.1,
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    className="relative h-32 rounded-lg overflow-hidden border border-white/20"
                  >
                    <Image
                      src={photo}
                      alt={`${t.about.name} - фото ${index + 2}`}
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              ref={contentRef}
              initial={{ opacity: 0, x: 30 }}
              animate={contentInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <h1 className="text-4xl md:text-5xl font-serif text-white mb-2">
                  {t.about.name}
                </h1>
                <motion.div
                  initial={{ width: 0 }}
                  animate={contentInView ? { width: 80 } : {}}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="h-1 bg-gold mb-6"
                ></motion.div>
              </motion.div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
                {t.about.achievements.map((achievement, index) => {
                  const Icon = iconMap[index] || Award
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={
                        contentInView ? { opacity: 1, y: 0, scale: 1 } : {}
                      }
                      transition={{
                        delay: 0.3 + index * 0.1,
                        duration: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      whileHover={{
                        scale: 1.03,
                        y: -5,
                        transition: { duration: 0.3, ease: "easeOut" },
                      }}
                      className="bg-dark-600 border border-gray-800 rounded-lg p-4 flex items-center space-x-3 hover:border-white/50 transition-all duration-300"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/10 p-2 rounded-lg"
                      >
                        <Icon className="text-gold" size={24} />
                      </motion.div>
                      <span className="text-gray-300 text-xs sm:text-sm">
                        {achievement.text}
                      </span>
                    </motion.div>
                  )
                })}
              </div>

              <div className="space-y-4 text-gray-300">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.5,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <h2 className="text-xl sm:text-2xl font-serif text-white mb-2 sm:mb-3">
                    {t.about.experience.title}
                  </h2>
                  <p>{t.about.experience.text}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.6,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <h2 className="text-2xl font-serif text-white mb-3">
                    {t.about.specialization.title}
                  </h2>
                  <p>{t.about.specialization.text1}</p>
                  <p className="mt-3">{t.about.specialization.text2}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.7,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <h2 className="text-2xl font-serif text-white mb-3">
                    {t.about.approach.title}
                  </h2>
                  <p>{t.about.approach.text}</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
