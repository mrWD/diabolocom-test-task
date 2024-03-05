import { reactive, readonly } from 'vue'

const initialState = {
  count: 0,
}

const state = reactive(initialState)

const mutations = {
  increment() {
    state.count++
  },
  decrement() {
    state.count--
  },
  reset() {
    state.count = 0
  },
}

const getters = {
  count: () => state.count,
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
