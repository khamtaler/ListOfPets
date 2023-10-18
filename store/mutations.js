import store from './index'

export function getAllPets() {
  store.dispatch('filterPets', 'available,pending,sold')
}

export function setFilter(state, filter) {
  state.usedFilter = filter
  state.itemsToShow = 12
  store.dispatch('filterPets', state.usedFilter)
}

export function setPetList(state, searchedPets) {
  state.searchedPets = searchedPets
}

export function addMorePets(state) {
  state.itemsToShow += 12
}
