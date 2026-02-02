"use client";

import { useState } from "react";
import { Download, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CTASection from "@/components/CTASection";
import ConsultationModal from "@/components/ConsultationModal";
import { useLanguage } from "@/contexts/LanguageContext";

const materialFiles = [
  "/materials/10-prichyn-191-kk.pdf",
  "/materials/yak-povodytys-pid-chas-obshuku.pdf",
  "/materials/chek-list-yurysta-pidryadnyka.pdf",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

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
};

export default function MaterialsPage() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);

  const handleDownload = (materialIndex: number, fileName: string) => {
    setSelectedMaterial(fileName);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 pt-20 sm:pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-3 sm:mb-4">
              {t.materials.title}
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="h-0.5 sm:h-1 bg-gold mx-auto"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-400 mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg max-w-2xl mx-auto"
            >
              {t.materials.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {t.materialsPage.materials.map((material, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="bg-dark-600 border border-gray-800 rounded-lg p-6 hover:border-gold transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="bg-gold/10 p-3 rounded-lg group-hover:bg-gold/20 transition-colors duration-300"
                    >
                      <FileText className="text-gold" size={24} />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-serif text-white mb-2 group-hover:text-gold transition-colors duration-300">
                        {material.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{material.description}</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => handleDownload(index, materialFiles[index] || "")}
                    whileHover={{ 
                      scale: 1.03,
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gold/10 hover:bg-gold/20 border border-gold/30 rounded-lg text-gold font-semibold transition-all duration-300 group relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gold/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Download size={18} className="relative z-10" />
                    </motion.div>
                    <span className="relative z-10">{t.materials.download}</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 max-w-2xl mx-auto"
          >
            <div className="bg-dark-600 border border-gold/30 rounded-lg p-6">
              <p className="text-gray-300 text-center">{t.materials.description}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        materialFile={selectedMaterial || undefined}
      />

      <CTASection />
    </>
  );
}
