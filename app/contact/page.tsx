"use client";

import { Phone, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ConsultationForm from "@/components/ConsultationForm";
import { useLanguage } from "@/contexts/LanguageContext";
import { CONTACT_INFO } from "@/lib/constants";

const contactItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function ContactPage() {
  const { t } = useLanguage();
  const { ref: infoRef, inView: infoInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: formRef, inView: formInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 pt-20 sm:pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-3 sm:mb-4">
              {t.contact.title}
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="h-1 bg-gold mx-auto"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto"
            >
              {t.contact.subtitle}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: -30 }}
              animate={infoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={infoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-xl sm:text-2xl font-serif text-gold mb-4 sm:mb-5 md:mb-6">
                  {t.contact.quickContacts}
                </h2>
                <div className="space-y-4">
                  {[
                    { icon: Phone, href: `tel:${CONTACT_INFO.phone}`, label: t.contact.phone, value: CONTACT_INFO.phone },
                    { icon: Mail, href: `mailto:${CONTACT_INFO.email}`, label: t.contact.email, value: CONTACT_INFO.email },
                    { icon: MessageCircle, href: `https://t.me/${CONTACT_INFO.telegram.replace("@", "")}`, label: t.contact.telegram, value: CONTACT_INFO.telegram, target: "_blank" },
                  ].map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <motion.a
                        key={index}
                        href={contact.href}
                        target={contact.target}
                        rel={contact.target ? "noopener noreferrer" : undefined}
                        variants={contactItemVariants}
                        initial="hidden"
                        animate={infoInView ? "visible" : "hidden"}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ 
                          x: 5,
                          transition: { duration: 0.3, ease: "easeOut" }
                        }}
                        className="flex items-center space-x-4 p-4 bg-dark-600 border border-gray-800 rounded-lg hover:border-gold transition-all duration-300 group relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="bg-gold/10 p-3 rounded-lg group-hover:bg-gold/20 transition-colors duration-300 relative z-10"
                        >
                          <Icon className="text-gold" size={24} />
                        </motion.div>
                        <div className="relative z-10">
                          <p className="text-gray-400 text-sm">{contact.label}</p>
                          <p className="text-white font-semibold">{contact.value}</p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={infoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="bg-dark-600 border border-gray-800 rounded-lg p-6"
              >
                <h3 className="text-gold font-semibold mb-2">{t.contact.workingHours}</h3>
                <p className="text-gray-300">{t.contact.workingHoursText}</p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-2xl font-serif text-gold mb-6"
              >
                {t.contact.sendMessage}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={formInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
              >
                <ConsultationForm />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
