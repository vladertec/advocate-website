"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = ["🏗️", "📋", "🛡️"];

export default function CasesSection() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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
        type: "spring",
        stiffness: 150,
        damping: 12,
      },
    },
  };

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-3 sm:mb-4">
            {t.cases.title}
          </h2>
          <div className="h-0.5 sm:h-1 w-16 sm:w-20 bg-gold mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          {t.cases.items.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-dark-600 border border-gray-800 rounded-lg p-4 sm:p-5 md:p-6 hover:border-gold/50 transition-all hover:shadow-gold-glow-sm group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                  className="text-3xl sm:text-4xl mb-3 sm:mb-4"
                >
                  {icons[index]}
                </motion.div>

                <h3 className="text-lg sm:text-xl font-serif text-white mb-2 group-hover:text-gold transition-colors">
                  {caseItem.title}
                </h3>
                <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">{caseItem.description}</p>
                <div className="flex items-center justify-between">
                  <motion.span
                    initial={{ opacity: 0, y: 5 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ 
                      delay: index * 0.08 + 0.25,
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="flex items-center space-x-2 text-gold font-semibold"
                  >
                    <CheckCircle size={18} />
                    <span>{caseItem.result}</span>
                  </motion.span>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            delay: 0.6,
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <Link
            href="/cases"
            className="inline-flex items-center space-x-2 px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold/10 transition-colors group relative overflow-hidden text-sm sm:text-base"
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
            <span className="relative z-10">{t.cases.allCases}</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 4, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
