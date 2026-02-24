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

  const change = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'uz', name: 'O\'zbek', flag: '🇺🇿' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'kk', name: 'Қазақша', flag: '🇰🇿' }
  ];

  return (
    <div className="lang-selector-wrapper">
      <select 
        value={lang}
        onChange={(e) => change(e.target.value)}
        className="lang-select"
        aria-label="Select language"
      >
        {languages.map(l => (
          <option key={l.code} value={l.code}>
            {l.flag} {l.name} ({l.code.toUpperCase()})
          </option>
        ))}
      </select>
    </div>
  );
}










































































































































































