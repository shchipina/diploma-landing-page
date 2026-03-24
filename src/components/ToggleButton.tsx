import { useTranslation } from 'react-i18next';

/**
 * Пропси для компонента ToggleButton
 */
interface ToggleButtonProps {
    /**
     * Callback функція, яка викликається при зміні мови
     * @param lang - Код мови ('uk' або 'en')
     */
    onChange: (lang: string) => void;
}

/**
 * Компонент ToggleButton - перемикач мов інтерфейсу
 * 
 * Надає можливість користувачу переключатися між українською та англійською мовами.
 * Активна мова підсвічується візуально.
 * 
 * @component
 * @example
 * ```tsx
 * <ToggleButton onChange={(lang) => console.log('Змінено на:', lang)} />
 * ```
 * 
 * @param {ToggleButtonProps} props - Пропси компонента
 * @returns {JSX.Element} Перемикач мов з двома кнопками (UK/EN)
 */
const ToggleButton = ({ onChange }: ToggleButtonProps) => {
    const { i18n } = useTranslation();

    /**
     * Обробник зміни мови
     * Змінює поточну мову в i18n та викликає callback onChange
     * 
     * @param {string} lang - Код мови для активації ('uk' або 'en')
     */
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
