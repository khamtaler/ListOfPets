import { createStore } from 'vuex'
import filters from './modules/filters'
import petList from './modules/petList'

const store = createStore({
  modules: {
    filters,
    petList
  }
})

export default store
