import { reactive, readonly } from 'vue'

const initialState: Record<string, number> = {
  count: 0,
}

const state = reactive(initialState)

const getNamespacedKey = (namespace: string) => `count${namespace}`

const mutations = {
  increment(namespace: string) {
    const key = getNamespacedKey(namespace)

    if (typeof state[key] !== 'number') {
      state[key] = 0
    }

    state[key]++
  },

  decrement(namespace: string) {
    const key = getNamespacedKey(namespace)

    if (typeof state[key] !== 'number') {
      state[key] = 0
    }

    if (state[key] > 0) {
      state[key]--
    }
  },

  reset(namespace: string) {
    const key = getNamespacedKey(namespace)

    state[key] = 0
  },
}

const getters = {
  count: (namespace: string) => state[getNamespacedKey(namespace)] ?? 0,
}

const resetState = () => {
  Object.assign(state, initialState)
}

export const useStore = () => ({
  state: readonly(state),
  mutations,
  getters,
  resetState,
})
