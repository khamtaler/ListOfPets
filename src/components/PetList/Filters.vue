<script setup>
import store from '../../../store'

const search = (filter) => {
  if (filter === store.getters['filters/getUsedFilter'] || !filter) {
    store.commit('filters/setFilter', null)
    store.dispatch('filters/filterPets', 'available,pending,sold')
    return
  }
  store.commit('filters/setFilter', filter)
  store.dispatch('filters/filterPets', filter)
}
</script>

<template>
  <div class="relative ml-3 mr-5 flex w-[100px] flex-col">
    <div class="sticky top-0">
      <header class="mb-5 mt-5"><h5 class="text-xl">filters:</h5></header>
      <ul>
        <li @click="search('available')" class="my-2 cursor-pointer">
          <span
            class="relative py-1 after:absolute after:bottom-[-2px] after:left-0 after:h-[4px] after:origin-left after:rounded-r-xl after:bg-[#8e5823] after:transition-all after:duration-500 after:ease-[cubic-bezier(.11,1.51,.58,-0.48)] after:content-['']"
            :class="store.state.filters.usedFilter === 'available' ? ' after:w-full' : 'after:w-0'"
            >Available</span
          >
        </li>
        <li @click="search('pending')" class="my-2 cursor-pointer">
          <span
            class="relative py-1 after:absolute after:bottom-[-2px] after:left-0 after:h-[4px] after:origin-left after:rounded-r-xl after:bg-[#8e5823] after:transition-all after:duration-500 after:ease-[cubic-bezier(.11,1.51,.58,-0.48)] after:content-['']"
            :class="store.state.filters.usedFilter === 'pending' ? ' after:w-full' : 'after:w-0'"
            >Pending</span
          >
        </li>
        <li @click="search('sold')" class="my-2 cursor-pointer">
          <span
            class="relative py-1 after:absolute after:bottom-[-2px] after:left-0 after:h-[4px] after:origin-left after:rounded-r-xl after:bg-[#8e5823] after:transition-all after:duration-500 after:ease-[cubic-bezier(.11,1.51,.58,-0.48)] after:content-['']"
            :class="store.state.filters.usedFilter === 'sold' ? ' after:w-full' : 'after:w-0'"
            >Sold</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>
