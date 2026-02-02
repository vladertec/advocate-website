"use client";

import Link from "next/link";
import { ArrowRight, Shield, FileText, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SERVICES } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

const iconMap: Record<string, typeof Shield> = {
  "anti-obshuk": Shield,
  "audit-191": FileText,
  "zahyst-kerivnyka": Briefcase,
};

export default function QuickOffersSection() {
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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
    <section ref={ref} className="py-12 sm:py-16 md:py-20 bg-dark-surface relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

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
            {t.quickOffers.title}
          </h2>
          <div className="h-0.5 sm:h-1 w-16 sm:w-20 bg-gold mx-auto"></div>
          <p className="text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg">
            {t.quickOffers.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          {SERVICES.slice(0, 3).map((service, index) => {
            const Icon = iconMap[service.id] || Shield;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="block bg-dark-600 border border-gray-800 rounded-lg p-5 sm:p-6 md:p-8 hover:border-gold transition-all hover:shadow-gold-glow-sm h-full relative overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ 
                      rotate: 360, 
                      scale: 1.15,
                      transition: { duration: 0.5, ease: "easeInOut" }
                    }}
                    className="text-gold mb-3 sm:mb-4 relative z-10"
                  >
                    <Icon size={32} className="sm:w-10 sm:h-10" />
                  </motion.div>

                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-serif text-white mb-2 sm:mb-3 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">{service.description}</p>
                    <div className="flex items-center text-gold group-hover:translate-x-2 transition-transform">
                      <span className="font-semibold">{t.quickOffers.details}</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <ArrowRight size={20} className="ml-2" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
