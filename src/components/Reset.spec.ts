import { describe, expect, it, vi, beforeEach, Mock } from 'vitest'
import { mount } from '@vue/test-utils'
import Reset from './Reset.ce.vue'
import Btn from './Btn.ce.vue'
import { getters, mutations } from '../store'

describe('Reset', () => {
  vi.spyOn(getters, 'count').mockReturnValue(1)
  vi.spyOn(mutations, 'reset')

  beforeEach(() => {
    vi.clearAllMocks();

    (getters.count as Mock).mockReturnValue(1)
  })

  it('renders the button correctly', async () => {

    const wrapper = mount(Reset, {
      props: { namespace: 'example' }
    })

    const btnComponent = wrapper.findComponent(Btn)

    expect(btnComponent.exists()).toBe(true)
    expect(btnComponent.props('variant')).toBe('DANGER')
  })

  it('calls mutations.reset, when user clicks the button', async () => {
    const wrapper = mount(Reset, {
      props: { namespace: 'example' }
    })

    const btnComponent = wrapper.findComponent(Btn)

    await wrapper.vm.$nextTick()

    await btnComponent.trigger('click')
    expect(mutations.reset).toHaveBeenCalledWith('example')
  })
})
