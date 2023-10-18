const petList = {
  state: {
    searchedPets: []
  },
  getters: {
    getSearchedPets(state) {
      return state.searchedPets
    }
  },
  mutations: {
    setPetList(state, payload) {
      state.searchedPets = payload
    }
  },
  actions: {}
}
export default petList
