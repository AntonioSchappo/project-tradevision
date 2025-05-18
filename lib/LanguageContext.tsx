'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type LanguageContextType = {
  locale: string;
  setLocale: (locale: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState('pt-BR'); // Definindo português brasileiro como padrão
  
  // Persistir a preferência de idioma no localStorage
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('locale', locale);
      }
    } catch (error) {
      console.error('Failed to save locale to localStorage:', error);
    }
  }, [locale]);
  
  // Recuperar a preferência de idioma do localStorage
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const savedLocale = localStorage.getItem('locale');
        if (savedLocale) {
          setLocale(savedLocale);
        }
      }
    } catch (error) {
      console.error('Failed to get locale from localStorage:', error);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
