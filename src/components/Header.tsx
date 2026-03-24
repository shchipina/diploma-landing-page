import { useTranslation } from 'react-i18next';
import ToggleButton from './ToggleButton';

const Header = () => {
    const { t } = useTranslation();

    return (
        <header
            className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-100"
            role="banner"
        >
            <div className="flex items-center space-x-2">
                <div
                    className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold"
                    aria-hidden="true"
                >
                    Є
                </div>
                <span
                    className="text-xl font-bold tracking-tight text-slate-900"
                    aria-label="Логотип"
                >
                    {t('university')}
                </span>
            </div>
            <ToggleButton onChange={() => { }} />
        </header>
    );
};

export default Header;
