import axiosClient from '../../services/axiosClient'
const MAX_ITEMS_PER_PAGE = 12

const filters = {
  namespaced: true,
  state: {
    usedFilter: '',
    itemsToShow: MAX_ITEMS_PER_PAGE
  },
  getters: {
    getUsedFilter(state) {
      return state.usedFilter
    }
  },
  mutations: {
    setFilter(state, payload) {
      state.usedFilter = payload
      if (state.itemsToShow != MAX_ITEMS_PER_PAGE) {
        state.itemsToShow = MAX_ITEMS_PER_PAGE
      }
    },
    addMorePets(state) {
      state.itemsToShow += MAX_ITEMS_PER_PAGE
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
