<script setup>
import store from '../../../store'
import { computed, onMounted, ref } from 'vue'
import SinglePetListItem from './SinglePetListItem.vue'

onMounted(() => {
  store.dispatch('getAllPets')
})

const visiblePets = ref([])
const pets = computed(() => {
  visiblePets.value = store.state.searchedPets.slice(0, store.state.itemsToShow)
  return visiblePets.value
})

const loadMorePets = () => {
  store.commit('addMorePets')
}
</script>

<template>
  <div class="flex min-h-[70vh] w-full flex-col border-l-2 border-[#8e5823]">
    <header>
      <h2 class="text-center text-3xl">View our pets!</h2>
    </header>
    <div>
      <ul v-if="pets.length > 0" class="mt-5 flex flex-row flex-wrap justify-between">
        <SinglePetListItem v-for="(pet, index) in pets" :key="index" :pet="pet" />
      </ul>
      <h6 v-else>
        We are sorry, currently there are no pets with
        <span>{{ store.state.usedFilter }} </span> status
      </h6>
    </div>
    <button
      type="button"
      class="mb-3 mt-7 text-xl"
      @click="loadMorePets"
      v-if="store.state.searchedPets.length > visiblePets.length"
    >
      <span
        class="border-b-[2px] border-orange-900 px-2 pb-1 hover:pb-2 hover:transition-all hover:duration-200 hover:ease-in-out"
        >load more</span
      >
    </button>
  </div>
</template>

<style></style>
