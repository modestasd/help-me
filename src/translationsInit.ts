import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en/translation.json';
import lt from '../locales/lt/translation.json';

i18n
 .use(initReactI18next)
   .init({
    fallbackLng: 'en',
    lng: 'en',
    resources: {
        en: { // translation is the default namespace
          translation: en
        },
        lt: {
          translation: lt
        }
      },
    debug: true,
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;