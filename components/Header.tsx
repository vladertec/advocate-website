"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ConsultationModal from "./ConsultationModal"
import LanguageSwitcher from "./LanguageSwitcher"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Header() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Закрываем мобильное меню при изменении маршрута
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    // { href: "/cases", label: t.nav.cases },
    { href: "/blog", label: t.nav.blog },
    { href: "/materials", label: t.nav.materials },
    { href: "/contact", label: t.nav.contact },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-dark-700/95 backdrop-blur-sm shadow-lg border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3 group flex-shrink-0"
            >
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 5,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.96 }}
                className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              >
                <Image
                  src="/assets/лого_адвокат_обрізаний_фон.png"
                  alt="Логотип"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-4 2xl:space-x-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <Link
                    href={link.href}
                    className="text-xs xl:text-sm 2xl:text-base font-medium text-gray-300 hover:text-white transition-colors relative group pb-1 focus:outline-none whitespace-nowrap"
                    aria-label={link.label}
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-[-6px] left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"
                      initial={false}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button & Language Switcher */}
            <div className="hidden xl:flex items-center space-x-2 2xl:space-x-4">
              <LanguageSwitcher />
              <a
                href={`tel:${process.env.NEXT_PUBLIC_PHONE || "+380XXXXXXXXX"}`}
                className="flex items-center space-x-1.5 2xl:space-x-2 text-white hover:text-gray-300 transition-colors group focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-dark-700 rounded"
                aria-label={`${t.nav.contact}: ${
                  process.env.NEXT_PUBLIC_PHONE || "+380XXXXXXXXX"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Phone
                    size={16}
                    className="xl:w-4 xl:h-4 2xl:w-[18px] 2xl:h-[18px] text-gold"
                    aria-hidden="true"
                  />
                </motion.div>
                <span className="text-xs xl:text-sm 2xl:text-base font-medium hidden 2xl:inline">
                  {t.nav.contact}
                </span>
              </a>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="px-3 xl:px-4 2xl:px-6 py-1.5 xl:py-2 2xl:py-2.5 bg-gold text-dark-700 font-semibold rounded hover:bg-gold-600 transition-all duration-300 glow-gold-sm relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-dark-700 text-xs xl:text-sm 2xl:text-base whitespace-nowrap"
                aria-label={t.nav.consultation}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    x: {
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1.5,
                      ease: "easeInOut",
                    },
                  }}
                />
                <span className="relative z-10">{t.nav.consultation}</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center space-x-1.5 sm:space-x-2 md:space-x-3">
              <LanguageSwitcher />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white transition-colors p-1.5 sm:p-2 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-dark-700 rounded"
                aria-label={isMobileMenuOpen ? "Закрити меню" : "Відкрити меню"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X
                    size={20}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    aria-hidden="true"
                  />
                ) : (
                  <Menu
                    size={20}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    aria-hidden="true"
                  />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[99] xl:hidden"
                />
                {/* Menu */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="xl:hidden pb-4 border-t border-gray-800 mt-4 overflow-hidden relative z-[101] bg-dark-700"
                >
                  {/* Close Button */}
                  <div className="flex justify-end px-3 sm:px-4 pt-3 sm:pt-4 pb-4 sm:pb-6">
                    <motion.button
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileHover={{
                        scale: 1.15,
                        rotate: 90,
                        transition: { duration: 0.3, ease: "easeOut" },
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-white transition-colors p-1.5 sm:p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-dark-700"
                      aria-label="Закрити меню"
                    >
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                          repeatDelay: 2,
                          ease: "easeInOut",
                        }}
                      >
                        <X size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
                      </motion.div>
                    </motion.button>
                  </div>
                  <nav className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4 pt-2 px-3 sm:px-4">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-sm sm:text-base md:text-lg font-medium text-gray-300 hover:text-white transition-colors block py-1.5 sm:py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-dark-700"
                          aria-label={link.label}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                    <a
                      href={`tel:${
                        process.env.NEXT_PUBLIC_PHONE || "+380XXXXXXXXX"
                      }`}
                      className="flex items-center space-x-2 text-white pt-1 sm:pt-2 px-2 py-1.5 sm:py-2 text-sm sm:text-base md:text-lg font-medium"
                    >
                      <Phone size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>{t.nav.contact}</span>
                    </a>
                    <motion.button
                      onClick={() => {
                        setIsModalOpen(true)
                        setIsMobileMenuOpen(false)
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 sm:px-6 py-2.5 sm:py-3 md:py-4 bg-gold text-dark-700 font-semibold rounded-lg hover:bg-gold-600 transition-colors text-left relative overflow-hidden text-sm sm:text-base md:text-lg mt-1 sm:mt-2"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gold-600"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10">
                        {t.nav.consultation}
                      </span>
                    </motion.button>
                  </nav>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
