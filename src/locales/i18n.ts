import { createI18n } from 'vue-i18n'

const LANG_STORAGE_KEY = 'lang'

export enum languages {
  EN = 'EN',
  FR = 'FR',
}

export enum messagesKeys {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
  COUNTER = 'counter',
  RESET = 'reset',
}

export const getDefaultLanguage = (): languages => {
  const systemLang = localStorage.getItem(LANG_STORAGE_KEY) ?? navigator.language?.toUpperCase()

  if (systemLang && systemLang in languages) {
    return systemLang as languages
  }

  return languages.EN
}

export const setDefaultLanguage = (lang: languages) => {
  localStorage.setItem(LANG_STORAGE_KEY, lang)
}

export const i18n = createI18n({
  legacy: false,
  locale: getDefaultLanguage(),
  fallbackLocale: languages.EN,
  messages: {
    [languages.EN]: {
      [messagesKeys.INCREMENT]: 'Increment',
      [messagesKeys.DECREMENT]: 'Decrement',
      [messagesKeys.COUNTER]: 'Counter',
      [messagesKeys.RESET]: 'Reset',
    },
    [languages.FR]: {
      [messagesKeys.INCREMENT]: 'Incrémenter',
      [messagesKeys.DECREMENT]: 'Décrémenter',
      [messagesKeys.COUNTER]: 'Compteur',
      [messagesKeys.RESET]: 'Réinitial',
    },
  },
})
