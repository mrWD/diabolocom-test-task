import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Btn, { btnTypes } from './Btn.ce.vue'

describe('Btn', () => {
  it('emits click event when clicked', async () => {
    const wrapper = mount(Btn)

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted().click).toBeTruthy()
  })

  it('renders button with default variant classes', () => {
    const wrapper = mount(Btn)

    expect(wrapper.find('button').classes()).toContain('enabled:hover:bg-blue-500')
  })

  it('renders button with danger variant classes', async () => {
    const wrapper = mount(Btn, {
      props: { variant: btnTypes.DANGER }
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.find('button').classes()).toContain('enabled:hover:bg-red-500')
  })
})
