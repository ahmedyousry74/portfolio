<script setup lang="ts">
import { skillGroups } from '~/data/cv'

const accents = ['#42d392', '#38bdf8', '#8b7cff', '#f472b6', '#fbbf24', '#22d3ee', '#a3e635', '#c084fc']
</script>

<template>
  <section id="skills" class="relative overflow-hidden py-28 md:py-36">
    <div
      class="pointer-events-none absolute left-1/2 top-40 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-iris/10 blur-[140px]"
      aria-hidden="true"
    />
    <div class="container-x">
      <SectionHeading
        index="02"
        label="Toolkit"
        title="The stack behind"
        accent="the craft."
        description="A focused toolkit centered on the Vue ecosystem — tuned for performance, SEO, and interfaces that scale with the product."
      />

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        <div v-for="(g, i) in skillGroups" :key="g.title" v-reveal="(i % 4) * 90">
          <article
            v-spotlight
            class="card group h-full p-7 transition-transform duration-500 hover:-translate-y-1"
          >
            <div class="flex items-center justify-between">
              <span
                class="grid h-12 w-12 place-items-center rounded-2xl border border-white/[0.06] transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110"
                :style="{ color: accents[i], background: `${accents[i]}14` }"
              >
                <AppIcon :name="g.icon" :size="22" />
              </span>
              <span class="font-mono text-xs text-zinc-700">0{{ i + 1 }}</span>
            </div>
            <h3 class="mt-7 text-lg font-semibold text-white">{{ g.title }}</h3>
            <ul class="mt-4 flex flex-wrap gap-2">
              <li
                v-for="item in g.items"
                :key="item"
                class="rounded-lg border border-white/[0.06] bg-white/[0.025] px-2.5 py-1 text-[13px] text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200"
              >
                {{ item }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
