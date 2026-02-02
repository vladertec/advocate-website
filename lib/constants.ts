export const CONTACT_INFO = {
  phone: "+380XXXXXXXXX",
  email: "sarnavsk2001@gmail.com",
  telegram: "@your_telegram",
  viber: "+380XXXXXXXXX",
};

export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_a7nlbge",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_a21vh6v",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "b-9jRpofu0_GJSdEI",
};

export const SERVICES = [
  {
    id: "anti-obshuk",
    title: "Анти-обшук",
    slug: "anti-obshuk",
    description: "Захист під час обшуків та вилучень документів",
  },
  {
    id: "audit-191",
    title: "Аудит 191 КК",
    slug: "audit-191",
    description: "Аудит ризиків за статтею 191 КК України",
  },
  {
    id: "zahyst-kerivnyka",
    title: "Захист керівника",
    slug: "zahyst-kerivnyka",
    description: "Комплексний захист керівників підприємств",
  },
  {
    id: "obshuky-vyimky",
    title: "Обшуки та вилучення",
    slug: "obshuky-vyimky",
    description: "Супровід під час обшуків та вилучень",
  },
];

export const ADVANTAGES = [
  {
    title: "24/7",
    description: "Доступність цілодобово",
    icon: "clock",
  },
  {
    title: "30+ років",
    description: "Досвід роботи",
    icon: "award",
  },
  {
    title: "Конфіденційність",
    description: "Повна таємниця",
    icon: "shield",
  },
  {
    title: "Досвід в органах",
    description: "Колишній слідчий",
    icon: "briefcase",
  },
];

