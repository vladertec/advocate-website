"use client";

import CTASection from "@/components/CTASection";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CasesPage() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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
              {t.casesPage.title}
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
              {t.casesPage.subtitle}
            </motion.p>
          </motion.div>

          <div ref={ref} className="space-y-8 max-w-4xl mx-auto">
            {t.casesPage.cases.map((caseItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="bg-dark-600 border border-gray-800 rounded-lg p-6 md:p-8 hover:border-gold transition-all duration-300 hover:shadow-gold-glow-sm relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.1 }}
                  >
                    <h3 className="text-gold text-sm font-semibold mb-2">{t.casesPage.problem}</h3>
                    <p className="text-white text-lg">{caseItem.problem}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <h3 className="text-gold text-sm font-semibold mb-2">{t.casesPage.risks}</h3>
                    <p className="text-gray-300">{caseItem.risks}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <h3 className="text-gold text-sm font-semibold mb-2">{t.casesPage.actions}</h3>
                    <ul className="space-y-2">
                      {caseItem.actions.map((action, actionIndex) => (
                        <motion.li
                          key={actionIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.1 + 0.4 + actionIndex * 0.05 }}
                          className="text-gray-300 flex items-start"
                        >
                          <span className="text-gold mr-2">•</span>
                          {action}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="bg-gold/10 border border-gold/30 rounded-lg p-4"
                  >
                    <h3 className="text-gold text-sm font-semibold mb-2">{t.casesPage.result}</h3>
                    <p className="text-white font-semibold">{caseItem.result}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.6 }}
                    className="pt-4 border-t border-gray-800"
                  >
                    <h3 className="text-gold text-sm font-semibold mb-2">{t.casesPage.critical}</h3>
                    <p className="text-gray-300 italic">{caseItem.critical}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
