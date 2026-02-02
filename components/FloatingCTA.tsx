"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ConsultationModal from "./ConsultationModal";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Показываем на mobile всегда после небольшого скролла, на desktop только при скролле
      const isMobile = window.innerWidth < 640;
      setIsVisible(isMobile ? window.scrollY > 100 : window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Проверяем при загрузке
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-3 px-4 py-3 bg-dark-700/95 backdrop-blur-sm border-t border-gold/20 shadow-2xl sm:hidden"
          >
            <motion.a
              href={`tel:${process.env.NEXT_PUBLIC_PHONE || "+380XXXXXXXXX"}`}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 15px rgba(255, 215, 0, 0.4)",
                  "0 0 25px rgba(255, 215, 0, 0.6)",
                  "0 0 15px rgba(255, 215, 0, 0.4)",
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="flex-1 flex items-center justify-center gap-2 bg-gold text-dark-700 px-6 py-4 rounded-lg shadow-lg hover:bg-gold-600 transition-colors glow-gold-sm relative overflow-hidden font-semibold text-base"
              aria-label="Подзвонити"
            >
              <motion.div
                className="absolute inset-0 bg-white/30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <Phone size={20} className="relative z-10" />
              <span className="relative z-10">Подзвонити</span>
            </motion.a>
            <motion.a
              href={`https://t.me/${process.env.NEXT_PUBLIC_TELEGRAM?.replace("@", "") || "your_telegram"}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-4 rounded-lg shadow-lg hover:bg-blue-600 transition-colors relative overflow-hidden font-semibold text-base"
              aria-label="Telegram"
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <MessageCircle size={20} className="relative z-10" />
              <span className="relative z-10">Telegram</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

