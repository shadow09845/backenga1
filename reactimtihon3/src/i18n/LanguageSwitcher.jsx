import React, { useState, useEffect } from "react";
import i18n from "i18next";
import './Language.css'

export default function LanguageSwitcher(){
  const [lang, setLang] = useState(i18n.language || 'en');

  useEffect(() => {
    const handler = (lng) => setLang(lng);
    i18n.on('languageChanged', handler);
    return () => i18n.off('languageChanged', handler);
  }, []);

  const change = (lng) => i18n.changeLanguage(lng);

  return (
    <div className="lang-switcher" role="tablist" aria-label="Language selector">
      <button
        className={lang === 'en' ? 'active' : ''}
        onClick={() => change('en')}
        aria-pressed={lang === 'en'}
        aria-label="English"
      >EN</button>

      <button
        className={lang === 'ru' ? 'active' : ''}
        onClick={() => change('ru')}
        aria-pressed={lang === 'ru'}
        aria-label="Russian"
      >RU</button>

      <button
        className={lang === 'uz' ? 'active' : ''}
        onClick={() => change('uz')}
        aria-pressed={lang === 'uz'}
        aria-label="Uzbek"
      >UZ</button>
    </div>
  );
}










































































































































































