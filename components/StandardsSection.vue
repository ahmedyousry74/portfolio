<script setup lang="ts">
import { standards } from '~/data/cv'

const slug = (s: string) => s.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-')
const accents = ['#42d392', '#38bdf8', '#fbbf24', '#8b7cff']
</script>

<template>
  <section id="principles" class="relative py-28 md:py-36">
    <div class="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      <div class="lg:sticky lg:top-32 lg:self-start">
        <SectionHeading
          index="05"
          label="How I build"
          title="Standards that keep"
          accent="codebases healthy."
          description="The frontend conventions I establish and enforce across teams — so products stay fast, predictable and a pleasure to work on as they grow."
        />
        <div v-reveal="200" class="-mt-6 flex flex-wrap gap-2 md:-mt-10">
          <span class="chip font-mono">PascalCase.vue</span>
          <span class="chip font-mono">useComposable()</span>
          <span class="chip font-mono">kebab-case.ts</span>
          <span class="chip font-mono">~150 lines</span>
        </div>
      </div>

      <div class="space-y-5">
        <article
          v-for="(s, i) in standards"
          :key="s.title"
          v-reveal="i * 60"
          class="group"
        >
          <div v-spotlight class="card p-7 transition-colors duration-500 hover:border-white/[0.14] md:p-9">
            <div class="flex items-center justify-between gap-4">
              <p class="font-mono text-xs text-zinc-600">// {{ slug(s.title) }}</p>
              <span
                class="grid h-11 w-11 place-items-center rounded-2xl transition-transform duration-500 group-hover:scale-110"
                :style="{ color: accents[i], background: `${accents[i]}14` }"
              >
                <AppIcon :name="s.icon" :size="20" />
              </span>
            </div>
            <h3 class="mt-3 text-2xl font-semibold tracking-tight text-white">{{ s.title }}</h3>
            <ul class="mt-6 space-y-3.5">
              <li v-for="(p, k) in s.points" :key="k" class="flex gap-4 text-[15px] leading-relaxed text-zinc-400">
                <span class="mt-0.5 font-mono text-xs" :style="{ color: accents[i] }">{{ String(k + 1).padStart(2, '0') }}</span>
                <span>{{ p }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
