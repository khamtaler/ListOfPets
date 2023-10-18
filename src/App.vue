<script setup>
import Petlist from './components/PetList/PetList.vue'
import Paw from './assets/icons/Paw.vue'
</script>

<template>
  <div class="my-10 w-5/6 rounded-md border-[1px] border-brown bg-white p-3">
    <header class="my-5 flex items-center justify-center">
      <h1 class="flex text-center text-4xl">
        <Paw /><span class="px-5"> Welcome in our pet store</span> <Paw />
      </h1>
    </header>
    <Petlist class="relative" />
  </div>
</template>

<style></style>
