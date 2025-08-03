import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "./locales/en.json";
import siCommon from "./locales/si.json";


i18n.use(initReactI18next).init({
    resources: {
        en:{
            translation:enCommon,
        },
        si:{
            translation:siCommon,
        }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;