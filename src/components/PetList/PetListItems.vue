<script setup>
import store from '../../../store'
import { computed, onMounted } from 'vue'
import SinglePetListItem from './SinglePetListItem.vue'

onMounted(() => {
  // store.dispatch('filters/getAllPets')
})

const pets = computed(() => {
  return store.getters['petList/getSearchedPets'].slice(0, store.state.filters.itemsToShow)
})

const loadMorePets = () => {
  store.commit('filters/addMorePets')
}
</script>

<template>
  <div class="flex min-h-[70vh] w-full flex-col px-2">
    <!-- <header>
      <h2 class="text-3xl">Search trough our pets below</h2>
    </header> -->
    <div>
      <ul
        v-if="pets.length > 0"
        class="mt-5 flex flex-row flex-wrap items-stretch justify-around gap-8"
      >
        <SinglePetListItem v-for="(pet, index) in pets" :key="index" :pet="pet" />
      </ul>
      <h6 v-else class="mt-5 text-center">
        We are sorry, currently there are no pets with
        <span>{{ store.state.filters.usedFilter }} </span> status &#128531;
      </h6>
    </div>
    <button
      type="button"
      class="mb-3 mt-7 text-xl"
      @click="loadMorePets"
      v-if="store.state.petList.searchedPets.length > pets.length"
    >
      <span
        class="border-b-[2px] border-orange-900 px-2 pb-1 hover:pb-2 hover:transition-all hover:duration-200 hover:ease-in-out"
        >load more</span
      >
    </button>
  </div>
</template>

<style></style>
