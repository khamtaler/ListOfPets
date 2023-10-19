<script setup>
import store from '../../../store'

const search = (filter) => {
  if (filter === store.getters['filters/getUsedFilter'] || !filter) {
    // store.commit('filters/setFilter', null)
    // store.dispatch('filters/filterPets', 'available,pending,sold')
    return
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
  // store.commit('filters/setFilter', filter)
  // store.dispatch('filters/filterPets', filter)
}
</script>

<template>
  <div
    class="sticky top-0 flex w-full flex-col border-b-[1px] border-[#8e5823] bg-white py-3 md:relative md:mr-3 md:w-[120px] md:border-b-0 md:border-r-2 md:py-0 md:pl-3 md:pr-5"
  >
    <div class="relative top-0 md:sticky">
      <header class="mb-5 mt-5 hidden md:block">
        <h5 class="border-b-brown text-lg md:border-b-[1px] md:text-3xl">filters</h5>
      </header>
      <ul
        class="flex flex-row items-center justify-around md:flex-col md:items-start md:justify-start"
      >
        <li @click="search('available')" class="my-2 cursor-pointer">
          <span
            class="relative py-1 text-[18px] after:absolute after:bottom-[-2px] after:left-0 after:h-[3px] after:origin-left after:rounded-r-xl after:bg-[#08bf08] after:transition-all after:duration-500 after:ease-[cubic-bezier(.11,1.51,.58,-0.48)] after:content-['']"
            :class="store.state.filters.usedFilter === 'available' ? ' after:w-full' : 'after:w-0'"
            >Available</span
          >
        </li>
        <li @click="search('pending')" class="my-2 cursor-pointer">
          <span
            class="relative py-1 text-[18px] after:absolute after:bottom-[-2px] after:left-0 after:h-[3px] after:origin-left after:rounded-r-xl after:bg-[#ffa500] after:transition-all after:duration-500 after:ease-[cubic-bezier(.11,1.51,.58,-0.48)] after:content-['']"
            :class="store.state.filters.usedFilter === 'pending' ? ' after:w-full' : 'after:w-0'"
            >Pending</span
          >
        </li>
        <li @click="search('sold')" class="my-2 cursor-pointer">
          <span
            class="relative py-1 text-[18px] after:absolute after:bottom-[-2px] after:left-0 after:h-[3px] after:origin-left after:rounded-r-xl after:bg-[#ff0000] after:transition-all after:duration-500 after:ease-[cubic-bezier(.11,1.51,.58,-0.48)] after:content-['']"
            :class="store.state.filters.usedFilter === 'sold' ? ' after:w-full' : 'after:w-0'"
            >Sold</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>
