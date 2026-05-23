/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { dictionary, Language } from './i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, defaultValue?: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

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
    const keys = key.split('.');
    
    // Helper to walk through the dictionary
    const getValue = (dict: any, path: string[]): any => {
      let current = dict;
      for (const k of path) {
        if (current && typeof current === 'object' && k in current) {
          current = current[k];
        } else {
          return undefined;
        }
      }
      return current;
    };

    // Get localized value
    const localized = getValue(dictionary[language], keys);
    if (typeof localized === 'string') return localized;

    // Fallback to French if missing
    const fallback = getValue(dictionary['fr'], keys);
    if (typeof fallback === 'string') return fallback;

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

