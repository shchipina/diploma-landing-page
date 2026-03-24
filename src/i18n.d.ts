import 'i18next';
import ukTranslation from './locales/uk/translation.json';

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: 'translation';
        resources: {
            translation: typeof ukTranslation;
        };
    }
}
