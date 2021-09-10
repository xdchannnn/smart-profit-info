import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import landingTranslationEN from "../translations/en/landingTranslationEN.json";
import landingTranslationRU from "../translations/ru/landingTranslationRU.json";

const resources = {
  en: {
    landing: landingTranslationEN,
  },
  ru: {
    landing: landingTranslationRU,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
