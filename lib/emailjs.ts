import emailjs from "emailjs-com";
import { EMAILJS_CONFIG } from "./constants";

export const initEmailJS = () => {
  if (typeof window !== "undefined") {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }
};

export const sendEmail = async (templateParams: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  return emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    {
      name: templateParams.name,
      email: templateParams.email,
      phone: templateParams.phone,
      message: `Нова заявка з сайту.\n\nІм'я: ${templateParams.name}\nТелефон: ${templateParams.phone}\nEmail: ${templateParams.email}\n\nПовідомлення:\n${templateParams.message}`,
    },
    EMAILJS_CONFIG.publicKey
  );
};

