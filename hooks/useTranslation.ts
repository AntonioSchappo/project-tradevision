import { useCallback } from 'react';
import { getTranslation } from '@/lib/translations';

export function useTranslation(locale: string = 'pt-BR') {
  const t = useCallback((key: string) => {
    return getTranslation(locale, key);
  }, [locale]);

  return { t };
}
