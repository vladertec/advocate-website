"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ConsultationPage() {
  const { t } = useLanguage();
  
  return (
    <>
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
                {t.consultation.title}
              </h1>
              <div className="h-1 w-20 bg-gold mx-auto"></div>
              <p className="text-gray-400 mt-6 text-lg">
                {t.consultation.subtitle}
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {t.consultation.steps.map((step, index) => (
                <div key={index} className="bg-dark-600 border border-gray-800 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gold/10 p-3 rounded-lg">
                      <span className="text-gold font-serif text-2xl">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="bg-dark-600 border border-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-serif text-gold mb-6">
                {t.consultation.leaveRequest}
              </h2>
              <p className="text-gray-400 mb-4">{t.consultation.formDescription}</p>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

