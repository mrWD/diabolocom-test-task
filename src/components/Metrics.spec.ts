import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Metrics from './Metrics.ce.vue'
import { getters } from '../store'

describe('Metrics', () => {
  it('renders the counter value correctly', async () => {
    const count = 10;

    vi.spyOn(getters, 'count').mockReturnValueOnce(count)

    const wrapper = mount(Metrics, {
      props: { namespace: 'example' },
    })

    expect(wrapper.find('span[data-testid="counter"]').text()).toBe(String(count))
  })
})
