/**
 * TypeScript типізація для i18next
 * 
 * Розширює типи i18next для забезпечення автодоповнення та type-safety
 * при використанні функції перекладу t() в компонентах.
 * 
 * Використовує українську локаль як базову для типів,
 * що надає автодоповнення для всіх ключів перекладу.
 * 
 * @module i18n.d
 */

import 'i18next';
import ukTranslation from './locales/uk/translation.json';

declare module 'i18next' {
    /**
     * Розширення типів i18next для кастомних налаштувань
     */
    interface CustomTypeOptions {
        /** Простір імен за замовчуванням для перекладів */
        defaultNS: 'translation';
        /** Ресурси з типами на основі української локалі */
        resources: {
            translation: typeof ukTranslation;
        };
    }
}
