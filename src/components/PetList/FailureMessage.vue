<script setup>
const props = defineProps({ code: Number })
</script>
<template>
  <teleport to="body">
    <div
      class="fixed left-[50%] top-5 translate-x-[-50%] rounded-xl bg-red-700 p-5 font-bold text-white"
    >
      Returned status code: {{ props.code }}
    </div>
  </teleport>
</template>
