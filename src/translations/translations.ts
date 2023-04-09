import { getLocales } from 'expo-localization';
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import en from "./en";
import sk from "./sk";
import cz from "./cz";


i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        compatibilityJSON: 'v3',
        resources: {
            en,
            cz,
            sk,
        },
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });


// const deviceLocale = getLocales()[0].languageCode;
// i18n.locale = deviceLocale === 'sk' || deviceLocale === 'cz' ? deviceLocale : 'en';
