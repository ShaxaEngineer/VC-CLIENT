import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { i18nextLng } from './constants';
import { getLocalStorage } from './utils';

export const lng = getLocalStorage(i18nextLng) || 'uz';

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: lng,
  debug: false,
  lng,
  load: 'languageOnly',
});

export default i18n;
