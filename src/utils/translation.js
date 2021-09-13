import i18n from "../../node_modules/i18next";
import { initReactI18next } from "react-i18next";

import landingTranslationEN from "../translations/en/landingTranslationEN.json";
import landingTranslationRU from "../translations/ru/landingTranslationRU.json";
import loginEN from "../translations/en/loginEN.json";
import loginRU from "../translations/ru/loginRU.json";
import joinEN from "../translations/en/joinEN.json";
import joinRU from "../translations/ru/joinRU.json";
import resetPasswordEN from "../translations/en/resetPasswordEN.json";
import resetPasswordRU from "../translations/ru/resetPasswordRU.json";
import forgotEN from "../translations/en/forgotEN.json";
import forgotRU from "../translations/ru/forgotRU.json";
import footerEN from "../translations/en/footerEN.json";
import footerRU from "../translations/ru/footerRU.json";
import headerEN from "../translations/en/headerEN.json";
import headerRU from "../translations/ru/headerRU.json";
import dashboardEN from "../translations/en/dashboardEN.json";
import dashboardRU from "../translations/ru/dashboardRU.json";

const resources = {
  en: {
    landing: landingTranslationEN,
    login: loginEN,
    join: joinEN,
    resetPassword: resetPasswordEN,
    forgot: forgotEN,
    footer: footerEN,
    header: headerEN,
    dashboard: dashboardEN,
  },
  ru: {
    landing: landingTranslationRU,
    login: loginRU,
    join: joinRU,
    resetPassword: resetPasswordRU,
    forgot: forgotRU,
    footer: footerRU,
    header: headerRU,
    dashboard: dashboardRU,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  interpolation: { escapeValue: false },
});

export default i18n;
