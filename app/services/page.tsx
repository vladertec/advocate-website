"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import CTASection from "@/components/CTASection"
import { useLanguage } from "@/contexts/LanguageContext"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export default function ServicesPage() {
  const { t } = useLanguage()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 pt-20 sm:pt-24 md:pt-32 bg-dark-600">
        <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-3 sm:mb-4">
              {t.servicesPage.title}
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
              {t.servicesPage.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
          >
            {t.servicesPage.serviceItems.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <Link
                  href={`/services/${service.id}`}
                  className="group bg-dark-600 border border-gray-800 rounded-lg p-6 hover:border-white transition-all duration-300 hover: h-full block relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-serif text-white mb-3 group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <div className="flex items-center text-white group-hover:translate-x-2 transition-transform duration-300">
                      <span className="font-semibold text-sm">
                        {t.common.details}
                      </span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowRight size={18} className="ml-2 text-gold" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
