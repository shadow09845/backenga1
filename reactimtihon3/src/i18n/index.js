import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../locales/en/translation.json";
import ru from "../locales/ru/translation.json";
import uz from "../locales/uzb/translation.json";
import tr from "../locales/tr/translation.json";
import ar from "../locales/ar/translation.json";
import zh from "../locales/zh/translation.json";
import kk from "../locales/kk/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      uz: { translation: uz },
      tr: { translation: tr },
      ar: { translation: ar },
      zh: { translation: zh },
      kk: { translation: kk },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
