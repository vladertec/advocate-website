export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Анатолій Сарнавський",
    jobTitle: "Адвокат",
    description: "Професійний захист по економічним злочинам",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com",
    telephone: process.env.NEXT_PUBLIC_PHONE || "+380XXXXXXXXX",
    email: process.env.NEXT_PUBLIC_EMAIL || "sarnavsk2001@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "UA",
    },
    sameAs: [
      `https://t.me/${process.env.NEXT_PUBLIC_TELEGRAM?.replace("@", "") || "your_telegram"}`,
    ],
  };
}

export function generateLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Адвокат Анатолій Сарнавський",
    description: "Професійний захист по економічним злочинам. Досвід роботи зі слідчими, прокуратурою, СБУ, ДБР.",
    provider: {
      "@type": "Person",
      name: "Анатолій Сарнавський",
    },
    areaServed: {
      "@type": "Country",
      name: "Україна",
    },
    serviceType: [
      "Захист по економічним злочинам",
      "Анти-обшук",
      "Аудит ризиків",
      "Захист керівників",
    ],
  };
}

