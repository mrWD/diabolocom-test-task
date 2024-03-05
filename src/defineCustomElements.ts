import { defineCustomElement } from 'vue'

export const defineCustomElements = (components: Record<string, object>) => {
  for (const componentName in components) {
    const btn = defineCustomElement(components[componentName])

    customElements.define(componentName, btn)
  }
}
