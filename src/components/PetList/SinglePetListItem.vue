<script setup>
import placeholder from '../../assets/images/placeholder.png'

const props = defineProps({
  pet: {}
})

const testImageLink = (link) => {
  if (
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(
      link
    )
  ) {
    return link
  }
  return placeholder
}
</script>

<template>
  <div class="m-4 w-[30%]">
    <figure>
      <img
        :src="testImageLink(props.pet.photoUrls)"
        class="h-[250px] w-full object-cover"
        :alt="props.pet.name"
      />
    </figure>
    <header v-if="props.pet.name" class="mt-2">
      <h4 class="text-center text-xl">{{ props.pet.name }}</h4>
    </header>
    <div class="mt-4 flex flex-row items-center justify-between px-3">
      <div v-if="props.petcategory && props.pet.category.name">
        category: {{ props.pet.category.name }}
      </div>
      <button type="button" class="ml-auto rounded-md bg-brown px-3 py-2 text-white">
        Buy now!
      </button>
    </div>
  </div>
</template>

<style></style>
