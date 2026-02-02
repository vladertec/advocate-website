import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import QuickOffersSection from "@/components/QuickOffersSection";
import CasesSection from "@/components/CasesSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Адвокат Анатолій Сарнавський | Захист по економічним злочинам",
  description: "Професійний захист по економічним злочинам. Досвід роботи зі слідчими, прокуратурою, СБУ, ДБР. Фокус на будівництві та держзакупівлях.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AdvantagesSection />
      <QuickOffersSection />
      <CasesSection />
      <BlogSection />
      <CTASection />
    </>
  );
}

