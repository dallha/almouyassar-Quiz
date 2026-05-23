import fr from './fr';
import ar from './ar';
import wo from './wo';

export type Language = 'fr' | 'ar' | 'wo';

export const dictionary = {
  fr,
  ar,
  wo
};

export type TranslationCatalog = typeof fr;
export type TranslationKey = keyof TranslationCatalog;
