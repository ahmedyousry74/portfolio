<script setup lang="ts">
defineProps<{ index: string; label: string; title: string; accent?: string; description?: string }>()
</script>

<template>
  <header class="mb-14 max-w-3xl md:mb-20">
    <p v-reveal class="eyebrow">
      <span class="text-vue">{{ index }}</span>
      <span class="h-px w-8 bg-zinc-700" />
      {{ label }}
    </p>
    <h2
      v-reveal="80"
      class="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
    >
      {{ title }}
      <span v-if="accent" class="font-serif font-normal italic text-gradient">{{ accent }}</span>
    </h2>
    <p v-if="description" v-reveal="160" class="mt-6 text-base leading-relaxed text-zinc-400 md:text-lg">
      {{ description }}
    </p>
  </header>
</template>
