<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <div v-if="imageUrl" class="h-48 w-full overflow-hidden">
      <img :src="imageUrl" :alt="title" class="w-full h-full object-cover">
    </div>
    <div class="p-5">
      <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ title }}</h3>
      <p class="text-gray-600 mb-4">{{ description }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  imageUrl: {
    type: String,
    default: ''
  }
})
</script> 