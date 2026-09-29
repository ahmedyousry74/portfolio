<script setup lang="ts">
import { education, languages, profile, softSkills } from '~/data/cv'

const time = ref('')
let timer: ReturnType<typeof setInterval> | undefined

const format = () =>
  new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Africa/Cairo',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(new Date())

onMounted(() => {
  time.value = format()
  timer = setInterval(() => (time.value = format()), 1000)
})
onBeforeUnmount(() => clearInterval(timer))

const highlights = ['SEO', 'performance optimization', 'seamless API integration']
</script>

<template>
  <section id="about" class="relative py-28 md:py-36">
    <div class="container-x">
      <SectionHeading index="01" label="About me" title="Interfaces that feel" accent="effortless." />

      <div class="grid gap-4 md:grid-cols-6 md:gap-5">
        <!-- Summary -->
        <article v-reveal v-spotlight class="card p-8 md:col-span-4 md:p-10">
          <AppIcon name="sparkles" :size="22" class="text-vue" />
          <p class="mt-6 text-2xl font-medium leading-snug tracking-tight text-white md:text-[2rem] md:leading-[1.25]">
            Creative frontend developer with
            <span class="font-serif font-normal italic text-gradient">4+ years</span>
            building scalable, high-performance web applications in the
            <span class="font-serif font-normal italic text-gradient">Vue.js &amp; Nuxt.js</span>
            ecosystems.
          </p>
          <p class="mt-6 max-w-2xl leading-relaxed text-zinc-400">
            {{ profile.summary }}
          </p>
          <div class="mt-8 flex flex-wrap gap-2">
            <span v-for="h in highlights" :key="h" class="chip">
              <span class="h-1.5 w-1.5 rounded-full bg-vue" />{{ h }}
            </span>
          </div>
        </article>

        <!-- Location -->
        <article v-reveal="100" v-spotlight class="card flex flex-col justify-between p-8 md:col-span-2">
          <div class="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true">
            <div class="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2">
              <span
                v-for="n in 3"
                :key="n"
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-vue/20"
                :style="{ width: `${n * 90}px`, height: `${n * 90}px` }"
              />
              <span class="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-vue/10 [animation-duration:3s]" />
              <span class="relative block h-3 w-3 rounded-full bg-vue shadow-[0_0_20px_4px_rgba(66,211,146,0.6)]" />
            </div>
          </div>
          <p class="eyebrow relative"><AppIcon name="pin" :size="14" /> Based in</p>
          <div class="relative mt-40">
            <p class="text-3xl font-semibold tracking-tight text-white">{{ profile.location }}</p>
            <p class="mt-2 flex items-center gap-2 font-mono text-sm text-zinc-500">
              <AppIcon name="clock" :size="14" />
              <span class="tabular-nums">{{ time || '--:--:--' }}</span> · GMT+3 · Remote-friendly
            </p>
          </div>
        </article>

        <!-- Education -->
        <article v-reveal v-spotlight class="card p-8 md:col-span-2">
          <div class="grid h-12 w-12 place-items-center rounded-2xl bg-iris/10 text-iris">
            <AppIcon name="graduation" :size="22" />
          </div>
          <p class="eyebrow mt-8">Education · {{ education.period }}</p>
          <h3 class="mt-3 text-xl font-semibold leading-snug text-white">{{ education.degree }}</h3>
          <p class="mt-2 text-sm text-zinc-400">{{ education.school }}</p>
        </article>

        <!-- Languages -->
        <article v-reveal="100" v-spotlight class="card p-8 md:col-span-2">
          <div class="grid h-12 w-12 place-items-center rounded-2xl bg-aqua/10 text-aqua">
            <AppIcon name="globe" :size="22" />
          </div>
          <p class="eyebrow mt-8">Languages</p>
          <ul class="mt-5 space-y-5">
            <li v-for="l in languages" :key="l.name">
              <div class="flex items-baseline justify-between gap-3">
                <span class="font-semibold text-white">{{ l.name }}</span>
                <span class="text-right text-xs text-zinc-500">{{ l.level }}</span>
              </div>
              <div class="mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/5">
                <div
                  v-reveal
                  class="lang-bar h-full rounded-full bg-gradient-to-r from-aqua to-vue"
                  :style="{ '--w': `${l.value}%` }"
                />
              </div>
            </li>
          </ul>
        </article>

        <!-- Soft skills -->
        <article v-reveal="200" v-spotlight class="card p-8 md:col-span-2">
          <div class="grid h-12 w-12 place-items-center rounded-2xl bg-rose-400/10 text-rose-300">
            <AppIcon name="heart" :size="22" />
          </div>
          <p class="eyebrow mt-8">Soft skills</p>
          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="s in softSkills"
              :key="s"
              class="chip transition-colors duration-300 hover:border-vue/40 hover:text-white"
              >{{ s }}</span
            >
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.lang-bar {
  width: 0;
  transition: width 1.6s cubic-bezier(0.22, 1, 0.36, 1) 0.3s;
}
.lang-bar.is-visible {
  width: var(--w);
}
</style>
