import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const translationsGetters = {
  es: () => require('../../public/locales/es/common.json'),
  en: () => require('../../public/locales/en/common.json'),
};

i18n.use(initReactI18next).init({
  debug: false,
  lng: 'es',
  fallbackLng: 'es',
  ns: ['common'],
  defaultNS: 'common',
  preload: ['es'],
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    es: {
      common: translationsGetters.es(),
    },
    en: {
      common: translationsGetters.en(),
    },
  },
});

export default i18n;
