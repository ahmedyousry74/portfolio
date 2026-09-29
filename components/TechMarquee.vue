<script setup lang="ts">
import { marquee } from '~/data/cv'

const rows = [marquee, [...marquee].reverse()]
</script>

<template>
  <section class="relative border-y border-white/[0.06] bg-ink-900/40 py-8" aria-label="Technologies">
    <div class="mask-fade-x space-y-4 overflow-hidden">
      <div v-for="(row, r) in rows" :key="r" class="group flex w-max">
        <div
          v-for="copy in 2"
          :key="copy"
          class="flex shrink-0 animate-marquee items-center gap-4 pr-4 group-hover:[animation-play-state:paused]"
          :class="r === 1 ? '[animation-direction:reverse] [animation-duration:55s]' : ''"
          :aria-hidden="copy === 2"
        >
          <template v-for="item in row" :key="item">
            <span
              class="whitespace-nowrap text-2xl font-semibold tracking-tight md:text-4xl"
              :class="r === 0 ? 'text-zinc-200' : 'font-serif font-normal italic text-zinc-600'"
            >
              {{ item }}
            </span>
            <AppIcon name="sparkles" :size="18" class="shrink-0 text-vue/70" />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
