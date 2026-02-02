import { Language, Translations } from "./types";
import { uk } from "./uk";
import { en } from "./en";
import { de } from "./de";
import { fr } from "./fr";
import { pl } from "./pl";
import { sv } from "./sv";

export type { Language, Translations };

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: "uk", name: "Українська", flag: "🇺🇦" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "pl", name: "Polski", flag: "🇵🇱" },
  { code: "sv", name: "Svenska", flag: "🇸🇪" },
];

export const translations: Record<Language, Translations> = {
  uk,
  en,
  de,
  fr,
  pl,
  sv,
};

export function getTranslation(lang: Language): Translations {
  return translations[lang] || translations.uk;
}

