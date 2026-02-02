"use client";

import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import { SERVICES } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicePage({ params }: { params: { slug: string } }) {
  const { t } = useLanguage();
  const service = SERVICES.find((s) => s.slug === params.slug);
  const serviceItem = t.servicesPage.serviceItems.find((s) => s.id === params.slug);

  if (!service || !serviceItem) {
    notFound();
  }

  // Получаем переводы для деталей услуги из переводов
  const details = {
    title: serviceItem.title,
    description: serviceItem.description,
    howItWorks: [
      t.serviceDetails.howItWorks + " - " + serviceItem.description,
    ],
    whatToDo: [
      t.serviceDetails.whatToDo,
    ],
    faq: [
      {
        question: t.serviceDetails.faq,
        answer: serviceItem.description,
      },
    ],
  };

  return (
    <>
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
              {details.title}
            </h1>
            <div className="h-1 w-20 bg-gold mb-8"></div>

            <div className="prose prose-invert max-w-none space-y-8">
              <p className="text-lg text-gray-300">{details.description}</p>

              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">{t.serviceDetails.howItWorks}</h2>
                <ul className="space-y-2 text-gray-300">
                  {details.howItWorks.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">{t.serviceDetails.whatToDo}</h2>
                <ul className="space-y-2 text-gray-300">
                  {details.whatToDo.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">{t.serviceDetails.faq}</h2>
                <div className="space-y-4">
                  {details.faq.map((item, index) => (
                    <div key={index} className="border border-gray-800 rounded-lg p-4">
                      <h3 className="text-gold font-semibold mb-2">{item.question}</h3>
                      <p className="text-gray-300">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
