import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';

/**
 * Головний компонент додатку - лендінг сторінка бакалаврської роботи
 * 
 * Відображає повну структуру landing page з наступними секціями:
 * - Header з навігацією та перемикачем мови
 * - Hero секція з описом проєкту та CTA кнопками
 * - Секція з ключовими технологіями
 * - Сітка завдань проєкту (Feature Grid)
 * - Секція очікуваних результатів
 * - Footer з контактною інформацією
 * 
 * Використовує react-i18next для підтримки української та англійської мов.
 * Всі текстові дані локалізовані та зберігаються в JSON файлах.
 * 
 * @component
 * @example
 * ```tsx
 * import App from './App';
 * 
 * // В main.tsx або index.tsx
 * <App />
 * ```
 * 
 * @returns {JSX.Element} Повна структура лендінг сторінки
 */
function App() {
  const { t } = useTranslation();

  return (
    <div className="font-sans text-slate-800 bg-white selection:bg-blue-200">
      <Header />

      <main role="main">
        <section className="relative overflow-hidden bg-slate-50 pt-16 pb-24 lg:pt-24 lg:pb-32" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="max-w-2xl">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6 uppercase tracking-wider">
                {t('badge')}
              </span>
              <h1 id="hero-heading" className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                {t('title')}
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {t('shortDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:-translate-y-0.5 shadow-lg shadow-blue-600/30">
                  {t('ctaPrimary')}
                </button>
                <button className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-sm">
                  {t('ctaSecondary')}
                </button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none" aria-label="Графічне представлення об'єкту дослідження" role="img">
              <div className="absolute inset-0 bg-linear-to-tr from-blue-100 to-indigo-50 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
              <div className="bg-white rounded-xl shadow-2xl border border-slate-200/60 overflow-hidden flex flex-col h-100">
                <div className="bg-slate-100 h-10 flex items-center px-4 space-x-2 border-b border-slate-200">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-4 bg-white px-4 py-1 rounded text-xs text-slate-400 font-mono w-1/2 flex items-center">
                    <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path></svg>
                    medium-clone.local
                  </div>
                </div>

                <div className="flex-1 p-6 bg-slate-50 flex flex-col gap-4">
                  <div className="w-1/3 h-6 bg-slate-200 rounded animate-pulse"></div>
                  <div className="w-full h-32 bg-slate-200 rounded animate-pulse"></div>
                  <div className="flex gap-4">
                    <div className="w-1/2 h-20 bg-blue-100 rounded"></div>
                    <div className="w-1/2 h-20 bg-indigo-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-8" aria-label="Ключові слова">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t('keywordsTitle')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {(t('keywords', { returnObjects: true }) as string[]).map((word: string, i: number) => (
                <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-slate-600 font-medium text-sm">
                  {word}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white" aria-labelledby="tasks-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="tasks-heading" className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">{t('tasksTitle')}</h2>
              <p className="text-lg text-slate-600">{t('tasksSubtitle')}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(t('tasks', { returnObjects: true }) as Array<{ title: string; desc: string }>).map((task, index: number) => (
                <div key={index} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-6 shadow-md">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{task.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{task.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-slate-900 text-white relative overflow-hidden" aria-labelledby="results-heading">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 id="results-heading" className="text-3xl lg:text-5xl font-extrabold mb-8">{t('expectedTitle')}</h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed font-light">
              <strong className="text-white font-semibold block mb-4">{t('goalTitle')}: {t('goalDesc')}</strong>
              {t('expectedDesc')}
            </p>
            <a href='https://github.com/shchipina/diploma-landing-page' target='_blank' className="bg-blue-500 hover:bg-blue-400 text-white px-10 py-5 rounded-lg font-bold text-xl transition-all shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] hover:scale-105">
              {t('ctaPrimary')}
            </a>
          </div>
        </section>
      </main>

      <Footer />

    </div>
  );
}

export default App;