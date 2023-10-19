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

const statusColor = () => {
  if (props.pet.status === 'available') {
    return '#08bf08'
  } else if (props.pet.status === 'pending') {
    return 'orange'
  }

  return 'red'
}
</script>

<template>
  <div
    class="group flex w-[40%] flex-col border-b-[1px] border-b-brown p-2 sm:w-[165px] md:w-[200px] xl:w-[270px]"
  >
    <figure class="overflow-hidden rounded-md">
      <img
        :src="testImageLink(props.pet.photoUrls)"
        class="aspect-square w-full rounded-md object-cover group-hover:scale-105"
        :alt="props.pet.name"
      />
    </figure>
    <header v-if="props.pet.name" class="mb-4 mt-2">
      <h4 class="text-center text-xl">{{ props.pet.name }}</h4>
    </header>
    <div
      class="mt-auto flex flex-col px-3"
      :class="
        props.pet.status === 'sold'
          ? 'justify-center'
          : 'xl:flex-row xl:items-end xl:justify-between'
      "
    >
      <div class="flex-1">
        <!-- <span v-if="props.pet.category && props.pet.category.name" class="block"
          >category: {{ props.pet.category.name }}</span
        > -->

        <span
          class="block text-center text-[18px] font-bold"
          :style="`color:${statusColor()}`"
          :class="props.pet.status === 'sold' ? '' : 'xl:text-start'"
          v-if="props.pet.status"
          >{{ props.pet.status }}</span
        >
      </div>
      <div class="mt-5 flex-1 self-center xl:float-right xl:ml-auto xl:mt-0 xl:self-end">
        <button
          v-if="props.pet.status != 'sold'"
          type="button"
          class="block rounded-md px-3 py-2 text-white xl:ml-auto"
          :class="props.pet.status === 'available' ? 'bg-brown' : 'bg-gray-300 line-through'"
          :disabled="props.pet.status === 'pending'"
        >
          Buy now!
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
