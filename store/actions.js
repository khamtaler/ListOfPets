import axiosClient from '../axiosClient'

export function getAllPets({ commit }) {
  axiosClient.get(`/pet/findByStatus?status=available,pending,sold`).then(({ data }) => {
    commit('setPetList', data)
  })
}
export function filterPets({ commit }, filter) {
  axiosClient.get(`/pet/findByStatus?status=${filter}`).then(({ data }) => {
    commit('setPetList', data)
  })
}
