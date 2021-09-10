import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import landingTranslationEN from "../translations/en/landingTranslationEN.json";
import landingTranslationRU from "../translations/ru/landingTranslationRU.json";
import loginEN from "../translations/en/loginEN.json";
import loginRU from "../translations/ru/loginRU.json";

const resources = {
  en: {
    landing: landingTranslationEN,
    login: loginEN,
  },
  ru: {
    landing: landingTranslationRU,
    login: loginRU,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  interpolation: { escapeValue: false },
});

export default i18n;
