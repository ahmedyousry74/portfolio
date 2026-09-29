<script setup lang="ts">
import { profile } from '~/data/cv'

const { $scrollTo } = useNuxtApp()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="relative border-t border-white/[0.06]">
    <div class="container-x overflow-hidden pt-16">
      <p
        class="select-none whitespace-nowrap text-center font-semibold leading-none tracking-[-0.06em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.08)] text-[clamp(4rem,17vw,15rem)]"
        aria-hidden="true"
      >
        Ahmed <span class="font-serif font-normal italic">Yousry</span>
      </p>
    </div>
    <div class="container-x flex flex-col items-center justify-between gap-6 py-10 text-sm text-zinc-500 md:flex-row">
      <p>© {{ year }} {{ profile.name }}. Crafted with Nuxt 3 &amp; Tailwind CSS.</p>
      <div class="flex items-center gap-5">
        <a :href="profile.github" target="_blank" rel="noopener" class="transition-colors hover:text-white">GitHub</a>
        <a :href="profile.linkedin" target="_blank" rel="noopener" class="transition-colors hover:text-white">LinkedIn</a>
        <a :href="profile.cv" download class="transition-colors hover:text-white">Resume</a>
        <button
          class="glass group grid h-10 w-10 place-items-center rounded-full text-zinc-300 transition hover:text-white"
          aria-label="Back to top"
          @click="$scrollTo(0)"
        >
          <AppIcon name="arrow-up" :size="16" class="transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  </footer>
</template>
