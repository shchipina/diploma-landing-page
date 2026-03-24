/**
 * Конфігурація інтернаціоналізації (i18n) для додатку
 * 
 * Налаштовує i18next для підтримки багатомовності:
 * - Підтримувані мови: українська (uk) та англійська (en)
 * - Мова за замовчуванням: українська
 * - Fallback мова: українська
 * 
 * Переклади зберігаються в JSON файлах у папці locales/
 * 
 * @module i18n/config
 * @see {@link https://www.i18next.com/|i18next Documentation}
 */

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
        /** Мова за замовчуванням */
        lng: 'uk',
        /** Резервна мова, якщо переклад не знайдено */
        fallbackLng: 'uk',
        interpolation: {
            /** Вимкнути екранування для React (захист від XSS вбудований) */
            escapeValue: false
        }
    });

export default i18n;
