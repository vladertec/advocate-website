"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const menuLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/cases", label: t.nav.cases },
    { href: "/blog", label: t.nav.blog },
    { href: "/materials", label: t.nav.materials },
    { href: "/contact", label: t.nav.contact },
  ];

  const serviceLinks = [
    { href: "/services/anti-obshuk", id: "anti-obshuk" },
    { href: "/services/audit-191", id: "audit-191" },
    { href: "/services/zahyst-kerivnyka", id: "zahyst-kerivnyka" },
    { href: "/services/obshuky-vyimky", id: "obshuky-vyimky" },
  ].map(link => ({
    href: link.href,
    label: t.servicesPage.serviceItems.find(s => s.id === link.id)?.title || link.id
  }));

  return (
    <footer className="bg-dark-700 border-t border-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,215,0,0.1)_25%,rgba(255,215,0,0.1)_50%,transparent_50%,transparent_75%,rgba(255,215,0,0.1)_75%)] bg-[length:20px_20px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12 relative z-10">
        {/* Mobile Layout: Only Contacts */}
        <div className="md:hidden">
          {/* Contacts - Main focus on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <h3 className="text-white font-semibold mb-4 uppercase text-sm text-center">{t.footer.contact}</h3>
            <ul className="space-y-3">
              <motion.li
                whileHover={{ 
                  x: 4,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_PHONE || "+380XXXXXXXXX"}`}
                  className="flex items-center justify-center space-x-3 text-gray-300 hover:text-gold transition-colors duration-300 text-base group py-2"
                >
                  <motion.div 
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 12,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="flex-shrink-0"
                  >
                    <Phone size={20} />
                  </motion.div>
                  <span className="font-medium">{process.env.NEXT_PUBLIC_PHONE || "+380XXXXXXXXX"}</span>
                </a>
              </motion.li>
              <motion.li
                whileHover={{ 
                  x: 4,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || "sarnavsk2001@gmail.com"}`}
                  className="flex items-center justify-center space-x-3 text-gray-300 hover:text-gold transition-colors duration-300 text-base group py-2"
                >
                  <motion.div 
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 12,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="flex-shrink-0"
                  >
                    <Mail size={20} />
                  </motion.div>
                  <span className="break-all">{process.env.NEXT_PUBLIC_EMAIL || "sarnavsk2001@gmail.com"}</span>
                </a>
              </motion.li>
              <motion.li
                whileHover={{ 
                  x: 4,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <a
                  href={`https://t.me/${process.env.NEXT_PUBLIC_TELEGRAM?.replace("@", "") || "your_telegram"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 text-gray-300 hover:text-gold transition-colors duration-300 text-base group py-2"
                >
                  <motion.div 
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 12,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="flex-shrink-0"
                  >
                    <MessageCircle size={20} />
                  </motion.div>
                  <span className="font-medium">Telegram</span>
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Tablet & Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Brand Column - Only visible on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="hidden lg:block lg:col-span-1"
          >
            <Link href="/" className="flex items-center space-x-3 mb-3 group">
              <motion.div 
                whileHover={{ 
                  scale: 1.08, 
                  rotate: 5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className="relative w-10 h-10">
                  <Image
                    src="/assets/лого_адвокат_обрізаний_фон.png"
                    alt={`${t.hero.title} - Логотип`}
                    width={40}
                    height={40}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </motion.div>
              <span className="text-base md:text-lg font-serif text-gold group-hover:text-gold-400 transition-colors">
                {t.hero.title}
              </span>
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </motion.div>

          {/* Menu Column */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="md:col-span-1 lg:col-span-1"
          >
            <h3 className="text-white font-semibold mb-3 uppercase text-xs sm:text-sm">{t.footer.menu}</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {menuLinks.slice(0, 4).map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.04,
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors duration-300 text-xs sm:text-sm group flex items-center py-0.5"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300 ease-out inline-block">
                      {link.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services Column - Only on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="hidden lg:block lg:col-span-1"
          >
            <h3 className="text-white font-semibold mb-3 uppercase text-xs sm:text-sm">{t.footer.services}</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {serviceLinks.slice(0, 3).map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors text-xs sm:text-sm group flex items-center py-0.5"
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      {link.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="md:col-span-1 lg:col-span-1"
          >
            <h3 className="text-white font-semibold mb-3 uppercase text-xs sm:text-sm">{t.footer.contact}</h3>
            <ul className="space-y-2 sm:space-y-2.5">
              <motion.li
                whileHover={{ 
                  x: 4,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_PHONE || "+380XXXXXXXXX"}`}
                  className="flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors duration-300 text-xs sm:text-sm group py-1"
                >
                  <motion.div 
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 12,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="flex-shrink-0"
                  >
                    <Phone size={16} className="sm:w-4 sm:h-4" />
                  </motion.div>
                  <span className="break-all">{process.env.NEXT_PUBLIC_PHONE || "+380XXXXXXXXX"}</span>
                </a>
              </motion.li>
              <motion.li
                whileHover={{ 
                  x: 4,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || "sarnavsk2001@gmail.com"}`}
                  className="flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors duration-300 text-xs sm:text-sm group py-1"
                >
                  <motion.div 
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 12,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="flex-shrink-0"
                  >
                    <Mail size={16} className="sm:w-4 sm:h-4" />
                  </motion.div>
                  <span className="break-all">{process.env.NEXT_PUBLIC_EMAIL || "sarnavsk2001@gmail.com"}</span>
                </a>
              </motion.li>
              <motion.li
                whileHover={{ 
                  x: 4,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <a
                  href={`https://t.me/${process.env.NEXT_PUBLIC_TELEGRAM?.replace("@", "") || "your_telegram"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors duration-300 text-xs sm:text-sm group py-1"
                >
                  <motion.div 
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 12,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="flex-shrink-0"
                  >
                    <MessageCircle size={16} className="sm:w-4 sm:h-4" />
                  </motion.div>
                  <span>Telegram</span>
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            delay: 0.3,
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="border-t border-gray-800 mt-4 sm:mt-5 md:mt-6 lg:mt-8 pt-3 sm:pt-4 md:pt-6 lg:pt-8 text-center"
        >
          <p className="text-gray-400 text-xs sm:text-sm">
            {t.footer.copyright.replace("{year}", currentYear.toString())}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
