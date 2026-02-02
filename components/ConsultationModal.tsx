"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ConsultationForm from "./ConsultationForm";
import { useLanguage } from "@/contexts/LanguageContext";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: {
      duration: 0.2,
    },
  },
};

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const { t } = useLanguage();
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-4"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-dark-700 border border-gold/30 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 max-w-2xl w-full mx-2 sm:mx-4 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-4 sm:mb-5 md:mb-6">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl sm:text-2xl md:text-3xl font-serif text-gold"
                >
                  {t.modal.consultation}
                </motion.h2>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="text-gray-400 hover:text-gold transition-colors p-1.5 sm:p-2 rounded-lg hover:bg-gold/10"
                  aria-label="Закрити"
                >
                  <X size={20} className="sm:w-6 sm:h-6" />
                </motion.button>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <ConsultationForm onSuccess={onClose} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
