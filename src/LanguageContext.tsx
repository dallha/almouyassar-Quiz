/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import stringsFr from './locales/strings_fr.json';
import stringsAr from './locales/strings_ar.json';
import stringsWo from './locales/strings_wo.json';

export type Language = 'fr' | 'ar' | 'wo';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, defaultValue?: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const dictionary: Record<Language, Record<string, string>> = {
  fr: stringsFr,
  ar: stringsAr,
  wo: stringsWo,
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const cached = localStorage.getItem('almouyassar_language');
    if (cached === 'fr' || cached === 'ar' || cached === 'wo') {
      return cached;
    }
    return 'fr';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('almouyassar_language', lang);
  };

  const t = (key: string, defaultValue?: string): string => {
    const strings = dictionary[language];
    if (strings && strings[key]) {
      return strings[key];
    }
    // Fallback to French if missing
    const frStrings = dictionary['fr'];
    if (frStrings && frStrings[key]) {
      return frStrings[key];
    }
    return defaultValue || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    // Update the document level dir attribute so that layout flips
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      <div dir={dir} className="w-full text-start">
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
