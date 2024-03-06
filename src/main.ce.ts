import { defineCustomElement } from 'vue'

import Counter from './components/Counter.ce.vue'
import LocalePicker from './components/LocalePicker.ce.vue'
import Metrics from './components/Metrics.ce.vue'
import Reset from './components/Reset.ce.vue'

export const defineCustomElements = (components: Record<string, object>) => {
  for (const componentName in components) {
    const element = defineCustomElement(components[componentName])

    customElements.define(componentName, element)
  }
}

defineCustomElements({
  'counter-widget': Counter,
  'locale-picker-widget': LocalePicker,
  'metrics-widget': Metrics,
  'reset-widget': Reset,
})
