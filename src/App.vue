<script setup>
import Petlist from './components/PetList/PetList.vue'
</script>

<template>
  <div class="my-10 w-5/6 rounded-md border-[1px] border-brown bg-white p-3">
    <header class="flex items-center justify-center">
      <h1 class="inline-block border-b-2 border-b-brown text-center text-4xl">Pet store</h1>
    </header>
    <Petlist class="relative" />
  </div>
</template>

<style></style>
