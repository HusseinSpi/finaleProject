import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEn from './locale/en.json'
import translationAr from './locale/ar.json'
import translationHe from './locale/he.json'

const resources = {
  en: {
    translation: translationEn,
  },
  ar: {
    translation: translationAr,
  },
  he: {
    translation: translationHe,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
})

export default i18n
