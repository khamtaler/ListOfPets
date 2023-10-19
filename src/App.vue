<script setup>
import Petlist from './components/petList/PetList.vue'
import Paw from './assets/icons/Paw.vue'
import BuyButton from './components/base/BuyButton.vue'
</script>

<template>
  <div class="my-10 w-5/6 rounded-md border-[1px] border-brown bg-white p-3">
    <header class="my-5 flex items-center justify-center">
      <h1 class="flex text-center text-xl sm:text-2xl md:text-4xl">
        <Paw /><span class="px-5"> Welcome in our pet store</span> <Paw />
      </h1>
    </header>
    <!-- <BuyButton /> -->
    <Petlist class="relative" />
  </div>
</template>

<style></style>
