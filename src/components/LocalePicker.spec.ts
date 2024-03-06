import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import LocalePicker from './LocalePicker.ce.vue'
import { i18n, languages } from '../locales/i18n' // Assuming i18n is imported properly

describe('LocalePicker', () => {
  it('renders select options correctly', async () => {
    const wrapper = mount(LocalePicker)
    const select = wrapper.find('select')

    expect(select.exists()).toBe(true)

    const options = wrapper.findAll('option')

    expect(options.length).toBe(Object.keys(languages).length)

    options.forEach((option, index) => {
      const lang = Object.keys(languages)[index]
      expect(option.text()).toBe(lang)
      expect(option.attributes('value')).toBe(lang)
    })
  })

  it('updates locale when a new language is selected', async () => {
    const wrapper = mount(LocalePicker)
    const select = wrapper.find('select')

    await select.setValue(languages.FR)

    expect(i18n.global.locale.value).toBe(languages.FR)
  })
})
