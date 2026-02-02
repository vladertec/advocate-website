"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <h1 className="text-6xl font-serif text-gold mb-4">{t.notFound.title}</h1>
        <h2 className="text-2xl font-serif text-white mb-4">{t.notFound.subtitle}</h2>
        <p className="text-gray-400 mb-8">{t.notFound.description}</p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-gold text-dark-700 font-semibold rounded hover:bg-gold-600 transition-colors glow-gold-sm"
        >
          {t.notFound.backHome}
        </Link>
      </div>
    </div>
  );
}
