import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { defineCustomElements } from './defineCustomElements'

import Counter from './components/Counter.ce.vue'
import LocalePicker from './components/LocalePicker.ce.vue'
import Metrics from './components/Metrics.ce.vue'
import Reset from './components/Reset.ce.vue'

defineCustomElements({
  'counter-widget': Counter,
  'locale-picker-widget': LocalePicker,
  'metrics-widget': Metrics,
  'reset-widget': Reset,
});

createApp(App).mount('#app')
