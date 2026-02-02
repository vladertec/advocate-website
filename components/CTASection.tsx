"use client"

import { useState } from "react"
import { Phone, Mail, MessageCircle, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import ConsultationModal from "./ConsultationModal"
import { useLanguage } from "@/contexts/LanguageContext"

export default function CTASection() {
  const { t } = useLanguage()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 bg-dark-600 relative">
        <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
          <div className="bg-dark-600 border border-white/30 rounded-lg p-5 sm:p-6 md:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-3 sm:mb-4">
              {t.cta.title}
            </h2>
            <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg">
              {t.cta.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <motion.a
                href={`tel:${process.env.NEXT_PUBLIC_PHONE || "+380XXXXXXXXX"}`}
                whileHover={{
                  scale: 1.08,
                  rotate: 2,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 pl-4 sm:pl-5 pr-6 sm:pr-7 py-2.5 sm:py-3 bg-dark-600 border border-gold/50 text-white font-semibold rounded hover:border-gold hover:bg-gold/10 transition-all duration-300 relative overflow-hidden group text-sm sm:text-base w-full sm:w-auto"
              >
                <motion.div
                  className="absolute inset-0 bg-gold/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <Phone
                  size={18}
                  className="sm:w-5 sm:h-5 relative z-10 text-gold"
                />
                <span className="relative z-10">{t.cta.call}</span>
              </motion.a>
              <motion.a
                href={`mailto:${
                  process.env.NEXT_PUBLIC_EMAIL || "sarnavsk2001@gmail.com"
                }`}
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 pl-4 sm:pl-5 pr-6 sm:pr-7 py-2.5 sm:py-3 border-2 border-gold/50 text-white font-semibold rounded hover:border-gold hover:bg-gold/10 transition-all duration-300 relative overflow-hidden text-sm sm:text-base w-full sm:w-auto"
              >
                <motion.div
                  className="absolute inset-0 bg-gold/10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <Mail
                  size={18}
                  className="sm:w-5 sm:h-5 relative z-10 text-gold"
                />
                <span className="relative z-10">{t.cta.email}</span>
              </motion.a>
              <motion.a
                href={`https://t.me/${
                  process.env.NEXT_PUBLIC_TELEGRAM?.replace("@", "") ||
                  "your_telegram"
                }`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  rotate: -2,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 pl-4 sm:pl-5 pr-6 sm:pr-7 py-2.5 sm:py-3 border-2 border-gold/50 text-white font-semibold rounded hover:border-gold hover:bg-gold/10 transition-all duration-300 relative overflow-hidden text-sm sm:text-base w-full sm:w-auto"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    x: {
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                      ease: "easeInOut",
                    },
                  }}
                />
                <MessageCircle
                  size={18}
                  className="sm:w-5 sm:h-5 relative z-10 text-gold"
                />
                <span className="relative z-10">{t.cta.telegram}</span>
              </motion.a>
              <motion.a
                href={`https://wa.me/${(
                  process.env.NEXT_PUBLIC_WHATSAPP ||
                  process.env.NEXT_PUBLIC_PHONE ||
                  "+380XXXXXXXXX"
                ).replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 pl-4 sm:pl-5 pr-6 sm:pr-7 py-2.5 sm:py-3 border-2 border-gold/50 text-white font-semibold rounded hover:border-gold hover:bg-gold/10 transition-all duration-300 relative overflow-hidden text-sm sm:text-base w-full sm:w-auto"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-green-500/20 to-green-500/10"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    x: {
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                      ease: "easeInOut",
                    },
                  }}
                />
                <MessageSquare
                  size={18}
                  className="sm:w-5 sm:h-5 relative z-10 text-green-400"
                />
                <span className="relative z-10">{t.cta.whatsapp}</span>
              </motion.a>
            </div>

            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(184, 134, 11, 0.5)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 15px rgba(184, 134, 11, 0.3)",
                  "0 0 25px rgba(184, 134, 11, 0.5)",
                  "0 0 15px rgba(184, 134, 11, 0.3)",
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gold text-dark-700 font-semibold rounded hover:bg-gold-600 transition-colors  text-base sm:text-lg relative overflow-hidden w-full sm:w-auto"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/30 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  x: {
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 0.8,
                    ease: "easeInOut",
                  },
                }}
              />
              <span className="relative z-10">{t.cta.getConsultation}</span>
            </motion.button>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
