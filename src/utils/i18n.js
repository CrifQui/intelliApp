import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import './assets/locales/fr/common.json';

const translationsGetters = {
  fr: () => require('./assets/locales/fr/common.json'),
};

i18n.use(initReactI18next).init({
  debug: false,
  lng: 'fr',
  fallbackLng: 'fr',
  ns: ['common'],
  defaultNS: 'common',
  preload: ['en'],
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    fr: {
      common: translationsGetters.fr(),
    },
  },
});

export default i18n;
