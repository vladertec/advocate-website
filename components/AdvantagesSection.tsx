"use client"

import { Clock, Award, Shield, Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useLanguage } from "@/contexts/LanguageContext"

const iconMap = {
  clock: Clock,
  award: Award,
  shield: Shield,
  briefcase: Briefcase,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 12,
    },
  },
}

export default function AdvantagesSection() {
  const { t } = useLanguage()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 bg-dark-600 relative">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-3 sm:mb-4">
            {t.advantages.title}
          </h2>
          <div className="h-0.5 sm:h-1 w-16 sm:w-20 bg-gold mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8"
        >
          {t.advantages.items.map((advantage, index) => {
            const iconKeys = ["clock", "award", "shield", "briefcase"] as const
            const Icon = iconMap[iconKeys[index] || "briefcase"]
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{
                    rotate: 360,
                    scale: 1.08,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  }}
                  className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full mb-3 sm:mb-4 text-gold border border-gold/30 group-hover:border-gold group-hover:shadow-gold-glow-sm transition-all duration-300"
                >
                  <Icon size={28} className="sm:w-8 sm:h-8 md:w-9 md:h-9" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 5 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: index * 0.1 + 0.2,
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="text-xl sm:text-2xl font-serif text-white mb-2"
                >
                  {advantage.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: index * 0.1 + 0.3,
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="text-gray-400 text-sm sm:text-base"
                >
                  {advantage.description}
                </motion.p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
