"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, CheckCircle } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LandingPage() {
  const { t } = useLanguage();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 md:pt-24 bg-gradient-to-b from-dark-700 to-dark-500">
        <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-white leading-tight">
                {t.landing.title} <span className="text-gold">{t.landing.titleHighlight}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-gold">
                {t.landing.subtitle}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                {t.landing.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_PHONE || "+380XXXXXXXXX"}`}
                  className="flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gold text-dark-700 font-semibold rounded hover:bg-gold-600 transition-colors glow-gold-sm text-sm sm:text-base md:text-lg w-full sm:w-auto"
                >
                  <Phone size={20} className="sm:w-6 sm:h-6" />
                  <span>{t.landing.callNow}</span>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden border border-gold/20 mt-8 lg:mt-0">
              <Image
                src="/assets/IMG_1389.JPG"
                alt={`${t.hero.name} - ${t.landing.subtitle}`}
                width={600}
                height={600}
                className="object-cover w-full h-full"
                priority
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                {t.consultation.leaveRequest}
              </h2>
              <div className="h-1 w-20 bg-gold mx-auto"></div>
              <p className="text-gray-400 mt-6">
                {t.consultation.formDescription}
              </p>
            </div>

            <div className="bg-dark-600 border border-gray-800 rounded-lg p-8">
              <ConsultationForm onSuccess={() => setIsFormSubmitted(true)} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {t.landing.features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4 text-gold">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-serif text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
