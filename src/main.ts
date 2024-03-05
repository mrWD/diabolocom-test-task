import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: {
      message: {
        hello: 'hello world',
      },
    },
    fr: {
      message: {
        hello: 'salut le monde',
      },
    },
  },
});

createApp(App)
  .use(i18n)
  .mount('#app')
