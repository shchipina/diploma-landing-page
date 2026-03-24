import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ukTranslation from '../locales/uk/translation.json';
import enTranslation from '../locales/en/translation.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            uk: {
                translation: ukTranslation
            },
            en: {
                translation: enTranslation
            }
        },
        lng: 'uk',
        fallbackLng: 'uk',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
