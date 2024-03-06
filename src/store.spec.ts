import { describe, expect, it, beforeEach } from 'vitest'
import { state, mutations, getters, useStore, getNamespacedKey } from './store'

describe('Store Mutations', () => {
  beforeEach(() => {
    state.count = 0
  })

  it('increments count', () => {
    mutations.increment('')
    expect(state.count).toBe(1)
  })

  describe('decrements count', () => {
    it('dicrease count, when count is greater than 0', () => {
      state.count = 1

      mutations.decrement('')

      expect(state.count).toBe(0)
    })

    it('does nothing, when count is equal 0', () => {
      mutations.decrement('')
      expect(state.count).toBe(0)
    })
  })

  it('resets count', () => {
    mutations.increment('')
    mutations.reset('')
    expect(state.count).toBe(0)
  })
})

describe('Store Getters', () => {
  it('returns correct count', () => {
    const count = getters.count('')
    expect(count).toBe(0)
  })

  it('returns 0 for undefined count', () => {
    const count = getters.count('')
    expect(count).toBe(0)
  })
})

describe('Store Factory Function (useStore)', () => {
  it('returns store object with state, mutations, getters, and resetState', () => {
    const store = useStore()

    expect(store.state).toBeDefined()
    expect(store.mutations).toBeDefined()
    expect(store.getters).toBeDefined()
    expect(store.resetState).toBeDefined()
  })
})

describe('getNamespacedKey', () => {
  it('returns the namespaced key', () => {
    const namespace = 'example'
    const key = getNamespacedKey(namespace)
    expect(key).toBe('countexample')
  })
})
