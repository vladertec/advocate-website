"use client";

import Link from "next/link";
import { Shield, FileText, Briefcase, Scale } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";

const iconMap = [Shield, FileText, Briefcase, Scale];
const colors = [
  "from-blue-500/20 to-blue-600/10",
  "from-purple-500/20 to-purple-600/10",
  "from-gold/20 to-gold/10",
  "from-green-500/20 to-green-600/10",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function ServicesSection() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 bg-dark-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,215,0,0.1)_25%,rgba(255,215,0,0.1)_50%,transparent_50%,transparent_75%,rgba(255,215,0,0.1)_75%)] bg-[length:20px_20px]" />
      </div>

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
            {t.services.title}
          </h2>
          <div className="h-0.5 sm:h-1 w-16 sm:w-20 bg-gold mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
        >
          {t.services.items.map((service, index) => {
            const Icon = iconMap[index] || Shield;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-dark-600 border border-gray-800 rounded-lg p-4 sm:p-5 md:p-6 hover:border-gold/50 transition-all hover:shadow-gold-glow-sm h-full relative overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ 
                        rotate: 360, 
                        scale: 1.08,
                        transition: { duration: 0.5, ease: "easeInOut" }
                      }}
                      className="text-gold mb-3 sm:mb-4 inline-block"
                    >
                      <Icon size={28} className="sm:w-8 sm:h-8" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-serif text-white mb-2 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">{service.description}</p>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              </motion.div>
            );
          })}
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
            href="/services"
            className="inline-flex items-center space-x-2 px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold/10 transition-colors group relative overflow-hidden text-sm sm:text-base"
          >
            <motion.div
              className="absolute inset-0 bg-gold/10"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">{t.services.allServices}</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 4, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
