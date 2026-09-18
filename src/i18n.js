
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: { "lang": "English" } },
      es: { translation: { "lang": "Español" } }
    },
    supportedLngs: ['en', 'es'], // Restrict to supported languages
    load: 'languageOnly', // e.g., 'es-ES' becomes 'es'
    fallbackLng: 'en',
    detection: {
      order: ['querystring', 'localStorage', 'navigator'], // Prioritize URL, then user preference, then browser
      caches: ['localStorage'], // Remember user's manual choice
    },
    interpolation: { escapeValue: false }
  });

export default i18n;
