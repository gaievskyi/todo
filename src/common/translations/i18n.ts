import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { English, Polish, Ukrainian } from './languages'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: English },
      pl: { translation: Polish },
      ua: { translation: Ukrainian }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

const setHTMLAttrLangTag = (lang: string) =>
  document.documentElement.setAttribute('lang', lang)

export { i18n, setHTMLAttrLangTag }
