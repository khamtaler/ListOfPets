import axiosClient from '../../axiosClient'

const filters = {
  namespaced: true,
  state: {
    usedFilter: '',
    itemsToShow: 12
  },
  getters: {
    getUsedFilter(state) {
      return state.usedFilter
    }
  },
  mutations: {
    setFilter(state, payload) {
      state.usedFilter = payload
      if (state.itemsToShow != 12) {
        state.itemsToShow = 12
      }
    },
    addMorePets(state) {
      state.itemsToShow += 12
    }
  },
  actions: {
    filterPets({ commit }, payload) {
      axiosClient.get(`/pet/findByStatus?status=${payload}`).then(({ data }) => {
        commit('petList/setPetList', data, { root: true })
      })
    },
    getAllPets({ commit }) {
      axiosClient.get(`/pet/findByStatus?status=available,pending,sold`).then(({ data }) => {
        commit('petList/setPetList', data, { root: true })
      })
    }
  }
}
export default filters
