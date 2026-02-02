"use client"

import { useState, useRef, useEffect } from "react"
import { Globe, ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { languages } from "@/lib/i18n"
import { motion, AnimatePresence } from "framer-motion"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const currentLang =
    languages.find((lang) => lang.code === language) || languages[0]

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 sm:space-x-1.5 md:space-x-2 px-2 sm:px-2.5 md:px-3 py-1.5 sm:py-2 rounded-lg bg-dark-600 border border-gold/50 hover:border-gold transition-colors"
      >
        <Globe
          size={14}
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-[18px] md:h-[18px] text-gold flex-shrink-0"
        />
        <span className="text-xs sm:text-sm text-white hidden sm:inline">
          {currentLang.flag}
        </span>
        <span className="text-xs sm:text-sm text-white hidden lg:inline">
          {currentLang.code.toUpperCase()}
        </span>
        <ChevronDown
          size={12}
          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-gold transition-transform flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.25,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="absolute top-full right-0 mt-2 bg-dark-700 border border-gold/30 rounded-lg shadow-xl overflow-hidden z-50 min-w-[140px] sm:min-w-[160px] md:min-w-[180px]"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-left hover:bg-gold/10 transition-colors duration-300 ${
                  language === lang.code
                    ? "bg-gold/5 text-white"
                    : "text-gray-300"
                }`}
              >
                <span className="text-base sm:text-lg">{lang.flag}</span>
                <span className="text-xs sm:text-sm font-medium">
                  {lang.name}
                </span>
                {language === lang.code && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className="ml-auto w-2 h-2 bg-gold rounded-full"
                  />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
