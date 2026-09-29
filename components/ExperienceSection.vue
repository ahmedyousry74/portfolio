<script setup lang="ts">
import { experience } from '~/data/cv'

const track = ref<HTMLElement>()
const progress = ref(0)
let ticking = false

const update = () => {
  ticking = false
  if (!track.value) return
  const r = track.value.getBoundingClientRect()
  const p = (window.innerHeight * 0.6 - r.top) / r.height
  progress.value = Math.min(Math.max(p, 0), 1)
}
const onScroll = () => {
  if (ticking) return
  ticking = true
  requestAnimationFrame(update)
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  update()
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <section id="experience" class="relative py-28 md:py-36">
    <div class="container-x">
      <SectionHeading
        index="03"
        label="Experience"
        title="Building products"
        accent="that ship."
        description="From agencies to product startups — building dashboards, storefronts and marketing sites used across Egypt, Saudi Arabia and the MENA region."
      />

      <div ref="track" class="relative">
        <div class="absolute bottom-0 left-[7px] top-0 w-px bg-white/[0.07] md:left-[calc(260px+7px)]" aria-hidden="true">
          <div
            class="absolute inset-x-0 top-0 origin-top bg-gradient-to-b from-vue via-aqua to-iris shadow-[0_0_12px_rgba(66,211,146,0.6)]"
            :style="{ height: '100%', transform: `scaleY(${progress})` }"
          />
        </div>

        <ol class="space-y-10 md:space-y-14">
          <li
            v-for="(job, i) in experience"
            :key="job.company"
            v-reveal
            class="exp-item group relative grid gap-4 pl-10 md:grid-cols-[260px_1fr] md:gap-0 md:pl-0"
          >
            <span
              class="exp-dot absolute left-0 top-2 z-10 grid h-[15px] w-[15px] place-items-center rounded-full border border-white/20 bg-ink-950 md:left-[260px]"
              aria-hidden="true"
            >
              <span class="h-[5px] w-[5px] rounded-full bg-zinc-600 transition-colors duration-700" />
            </span>

            <div class="md:sticky md:top-32 md:self-start md:pr-10">
              <p class="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">{{ job.period }}</p>
              <h3 class="mt-2 text-2xl font-semibold tracking-tight text-white">{{ job.company }}</h3>
              <p class="mt-1 text-sm text-zinc-500">{{ job.type }}</p>
              <span
                v-if="job.current"
                class="mt-3 inline-flex items-center gap-1.5 rounded-full bg-vue/10 px-2.5 py-1 text-xs font-medium text-vue"
              >
                <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-vue" /> Current role
              </span>
            </div>

            <article
              v-spotlight
              class="card p-7 transition-colors duration-500 group-hover:border-white/[0.12] md:ml-12 md:p-8"
            >
              <div class="flex flex-wrap items-center justify-between gap-3">
                <p class="flex items-center gap-2 font-medium text-white">
                  <AppIcon name="briefcase" :size="16" class="text-vue" />
                  {{ job.role }}
                </p>
                <span class="font-mono text-xs text-zinc-700">{{ String(experience.length - i).padStart(2, '0') }}</span>
              </div>
              <ul class="mt-5 space-y-3">
                <li
                  v-for="(p, k) in job.points"
                  :key="k"
                  class="flex gap-3 text-[15px] leading-relaxed text-zinc-400"
                >
                  <span class="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-vue/70" />
                  <span>{{ p }}</span>
                </li>
              </ul>
              <div class="mt-6 flex flex-wrap gap-2">
                <span v-for="t in job.tags" :key="t" class="chip">{{ t }}</span>
              </div>
            </article>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<style scoped>
.exp-item.is-visible .exp-dot {
  border-color: rgba(66, 211, 146, 0.6);
  box-shadow: 0 0 0 4px rgba(66, 211, 146, 0.08), 0 0 18px rgba(66, 211, 146, 0.5);
  transition: all 0.7s ease 0.3s;
}
.exp-item.is-visible .exp-dot > span {
  background: #42d392;
}
</style>
