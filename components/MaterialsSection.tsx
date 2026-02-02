"use client"

import { Download, FileText } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useLanguage } from "@/contexts/LanguageContext"
import ConsultationModal from "./ConsultationModal"
import { useState } from "react"

const materialFiles = [
  "/materials/10-prichyn-191-kk.pdf",
  "/materials/yak-povodytys-pid-chas-obshuku.pdf",
  "/materials/chek-list-yurysta-pidryadnyka.pdf",
]

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
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function MaterialsSection() {
  const { t } = useLanguage()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null)

  const handleDownload = (materialIndex: number, fileName: string) => {
    setSelectedMaterial(fileName)
    setIsModalOpen(true)
  }

  return (
    <>
      <section
        ref={ref}
        className="py-12 sm:py-16 md:py-20 bg-dark-600 relative overflow-hidden"
      >
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
              {t.materials.title}
            </h2>
            <div className="h-0.5 sm:h-1 w-16 sm:w-20 bg-gold mx-auto"></div>
            <p className="text-gray-400 mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              {t.materials.subtitle}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto"
          >
            {t.materialsPage.materials.map((material, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="bg-dark-600 border border-gray-800 rounded-lg p-5 sm:p-6 md:p-7 lg:p-8 hover:border-white/50 transition-all duration-300 group relative overflow-hidden h-full flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white/10 p-2 sm:p-3 rounded-lg group-hover:bg-white/5 transition-colors duration-300 flex-shrink-0"
                    >
                      <FileText className="text-gold w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-serif text-white mb-2 group-hover:text-white transition-colors duration-300">
                        {material.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {material.description}
                      </p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() =>
                      handleDownload(index, materialFiles[index] || "")
                    }
                    whileHover={{
                      scale: 1.03,
                      y: -2,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-auto w-full flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 bg-white/10 hover:bg-white/5 border border-white/30 rounded-lg text-white font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base"
                  >
                    <Download
                      size={16}
                      className="sm:w-4 sm:h-4 md:w-5 md:h-5 text-gold flex-shrink-0"
                    />
                    <span>{t.materials.download}</span>
                  </motion.button>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        materialFile={selectedMaterial || undefined}
      />
    </>
  )
}
