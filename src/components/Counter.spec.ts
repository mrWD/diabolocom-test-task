import { describe, expect, it, vi, beforeEach, Mock } from 'vitest'
import { mount } from '@vue/test-utils'
import Btn from './Btn.ce.vue'
import Metrics from './Metrics.ce.vue'
import Counter from './Counter.ce.vue'
import { mutations, getters } from '../store'

describe('Counter', () => {
  vi.spyOn(getters, 'count').mockReturnValue(1)

  vi.spyOn(mutations, 'increment')
  vi.spyOn(mutations, 'decrement')

  beforeEach(() => {
    vi.clearAllMocks();

    (getters.count as Mock).mockReturnValue(1)
  })

  it('renders correctly', async () => {
    const wrapper = mount(Counter, {
      props: { namespace: 'example' },
    })

    expect(wrapper.findComponent(Btn).exists()).toBe(true)
    expect(wrapper.findComponent(Metrics).exists()).toBe(true)
  })

  it('increments count when increment button is clicked', async () => {
    const wrapper = mount(Counter, {
      props: { namespace: 'example' },
    })

    const btnComponent = wrapper.findAllComponents(Btn)

    await wrapper.vm.$nextTick()
    await btnComponent[1].trigger('click')

    expect(mutations.increment).toHaveBeenCalledWith('example')
  })

  it('decrements count when decrement button is clicked', async () => {
    const wrapper = mount(Counter, {
      props: { namespace: 'example' },
    })

    const btnComponent = wrapper.findAllComponents(Btn)

    await wrapper.vm.$nextTick()
    await btnComponent[1].trigger('click')

    expect(mutations.increment).toHaveBeenCalledWith('example')
  })
})
