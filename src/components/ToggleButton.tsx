import { useTranslation } from 'react-i18next';

interface ToggleButtonProps {
    onChange: (lang: string) => void;
}

const ToggleButton = ({ onChange }: ToggleButtonProps) => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang);
        onChange(lang);
    };

    return (
        <nav aria-label="Вибір мови" className="flex bg-slate-100 p-1 rounded-full">
            <button
                className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all ${i18n.language === 'uk'
                        ? 'bg-white shadow-sm text-blue-600'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                onClick={() => handleLanguageChange('uk')}
                aria-label="Українська мова"
            >
                UK
            </button>
            <button
                className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all ${i18n.language === 'en'
                        ? 'bg-white shadow-sm text-blue-600'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                onClick={() => handleLanguageChange('en')}
                aria-label="English language"
            >
                EN
            </button>
        </nav>
    );
};

export default ToggleButton;
