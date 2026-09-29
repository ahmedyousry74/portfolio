<script setup lang="ts">
import { profile, stats } from '~/data/cv'

const { $scrollTo } = useNuxtApp()

const words = ['blazing-fast', 'beautiful', 'SEO-friendly', 'scalable', 'accessible']
const wordIndex = ref(0)
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  timer = setInterval(() => {
    wordIndex.value = (wordIndex.value + 1) % words.length
  }, 2600)
})
onBeforeUnmount(() => clearInterval(timer))

const first = profile.firstName.split('')
const last = profile.lastName.split('')
</script>

<template>
  <section id="top" class="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-28 md:pt-32">
    <!-- Background -->
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div class="grid-bg mask-radial absolute inset-0 opacity-60" />
      <div
        class="absolute -left-[10%] top-[-10%] h-[520px] w-[520px] animate-aurora rounded-full bg-vue/20 blur-[120px]"
      />
      <div
        class="absolute right-[-5%] top-[10%] h-[460px] w-[460px] animate-aurora rounded-full bg-iris/20 blur-[120px] [animation-delay:-6s]"
      />
      <div
        class="absolute bottom-[-10%] left-[30%] h-[420px] w-[420px] animate-aurora rounded-full bg-aqua/15 blur-[120px] [animation-delay:-12s]"
      />
      <div class="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink-950 to-transparent" />
    </div>

    <div class="container-x grid flex-1 items-center gap-14 pb-10 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
      <div>
        <div class="hero-intro" style="--d: 0.1s">
          <span class="glass inline-flex items-center gap-2.5 rounded-full py-1.5 pl-2 pr-4 text-xs text-zinc-300">
            <span class="relative flex h-2.5 w-2.5">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-vue opacity-60" />
              <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-vue" />
            </span>
            Available for new opportunities
            <span class="hidden text-zinc-600 sm:inline">·</span>
            <span class="hidden items-center gap-1 text-zinc-400 sm:inline-flex">
              <AppIcon name="pin" :size="12" />{{ profile.location }}
            </span>
          </span>
        </div>

        <h1 class="mt-8 text-[clamp(3.4rem,10vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.045em] text-white">
          <span class="sr-only">{{ profile.name }}</span>
          <span class="block overflow-hidden pb-2" aria-hidden="true">
            <span
              v-for="(ch, i) in first"
              :key="`f${i}`"
              class="hero-letter inline-block"
              :style="{ '--d': `${0.2 + i * 0.05}s` }"
              >{{ ch }}</span
            >
          </span>
          <span class="block overflow-hidden pb-3" aria-hidden="true">
            <span
              v-for="(ch, i) in last"
              :key="`l${i}`"
              class="hero-letter inline-block font-serif font-normal italic tracking-[-0.02em] text-gradient"
              :style="{ '--d': `${0.45 + i * 0.05}s` }"
              >{{ ch }}</span
            >
          </span>
        </h1>

        <p
          class="hero-intro mt-8 max-w-xl text-lg leading-relaxed text-zinc-400 md:text-xl"
          style="--d: 0.9s"
        >
          <span class="text-white">{{ profile.role }}</span> specialized in
          <span class="text-white">Vue.js &amp; Nuxt.js</span> — crafting
          <span class="relative inline-grid align-bottom">
            <Transition
              mode="out-in"
              enter-active-class="transition duration-500 ease-out"
              enter-from-class="translate-y-3 opacity-0 blur-sm"
              leave-active-class="transition duration-300 ease-in"
              leave-to-class="-translate-y-3 opacity-0 blur-sm"
            >
              <span :key="wordIndex" class="font-serif text-[1.2em] italic text-gradient">{{
                words[wordIndex]
              }}</span>
            </Transition>
          </span>
          web experiences.
        </p>

        <div class="hero-intro mt-10 flex flex-wrap items-center gap-3" style="--d: 1.05s">
          <a href="#work" class="btn-primary group" @click.prevent="$scrollTo('#work')">
            View my work
            <AppIcon
              name="arrow-right"
              :size="16"
              class="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <a :href="profile.cv" download class="btn-ghost group">
            <AppIcon name="download" :size="16" class="transition-transform duration-300 group-hover:translate-y-0.5" />
            Download CV
          </a>
          <div class="ml-1 flex gap-2">
            <a
              :href="profile.github"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              class="glass grid h-12 w-12 place-items-center rounded-full text-zinc-300 transition hover:-translate-y-0.5 hover:text-white"
            >
              <AppIcon name="github" :size="18" />
            </a>
            <a
              :href="profile.linkedin"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              class="glass grid h-12 w-12 place-items-center rounded-full text-zinc-300 transition hover:-translate-y-0.5 hover:text-white"
            >
              <AppIcon name="linkedin" :size="18" />
            </a>
          </div>
        </div>
      </div>

      <div class="hero-intro relative mx-auto w-full max-w-lg lg:max-w-none" style="--d: 0.7s">
        <div v-tilt="6">
          <HeroCodeCard />
        </div>

        <div
          class="glass absolute -left-4 -top-6 hidden animate-float items-center gap-3 rounded-2xl px-4 py-3 shadow-xl shadow-black/40 sm:flex lg:-left-10"
        >
          <span class="relative grid h-10 w-10 place-items-center">
            <svg viewBox="0 0 36 36" class="absolute inset-0 -rotate-90">
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(66,211,146,0.15)" stroke-width="3" />
              <circle
                cx="18"
                cy="18"
                r="15.5"
                fill="none"
                stroke="#42d392"
                stroke-width="3"
                stroke-linecap="round"
                stroke-dasharray="97.4"
                stroke-dashoffset="0"
              />
            </svg>
            <span class="text-[11px] font-bold text-vue">100</span>
          </span>
          <span class="text-xs leading-tight">
            <span class="block font-semibold text-white">Lighthouse</span>
            <span class="text-zinc-500">Performance</span>
          </span>
        </div>

        <div
          class="glass absolute -bottom-6 -right-2 hidden animate-float items-center gap-3 rounded-2xl px-4 py-3 shadow-xl shadow-black/40 [animation-delay:-3s] sm:flex lg:-right-6"
        >
          <span class="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-vue/25 to-aqua/25 text-vue">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M19.1 3H24L12 23.7 0 3h9.2L12 7.8 14.8 3h4.3zM3 4.7l9 15.5 9-15.5h-3.4L12 13.8 6.4 4.7H3z" />
            </svg>
          </span>
          <span class="text-xs leading-tight">
            <span class="block font-semibold text-white">Vue &amp; Nuxt</span>
            <span class="text-zinc-500">Specialist</span>
          </span>
        </div>
      </div>
    </div>

    <div class="container-x hero-intro pb-10" style="--d: 1.25s">
      <div class="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.06] md:grid-cols-4">
        <div v-for="s in stats" :key="s.label" class="bg-ink-950/80 px-6 py-6 backdrop-blur-xl md:px-8">
          <p class="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            <CountUp :to="s.value" :suffix="s.suffix" />
          </p>
          <p class="mt-2 text-xs text-zinc-500 md:text-sm">{{ s.label }}</p>
        </div>
      </div>

      <button
        class="mx-auto mt-8 flex flex-col items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-zinc-600 transition-colors hover:text-zinc-300"
        @click="$scrollTo('#about')"
      >
        Scroll
        <span class="relative h-10 w-6 rounded-full border border-white/15">
          <span class="absolute left-1/2 top-2 h-2 w-1 -translate-x-1/2 animate-bounce rounded-full bg-vue" />
        </span>
      </button>
    </div>
  </section>
</template>

<style>
.hero-letter {
  transform: translateY(110%) rotate(6deg);
}
.hero-intro {
  opacity: 0;
  transform: translateY(30px);
  filter: blur(8px);
}
.is-loaded .hero-letter {
  animation: heroLetterUp 1.1s cubic-bezier(0.22, 1, 0.36, 1) var(--d, 0s) both;
}
.is-loaded .hero-intro {
  animation: heroIntroUp 1.1s cubic-bezier(0.22, 1, 0.36, 1) var(--d, 0s) both;
}
@keyframes heroLetterUp {
  to {
    transform: none;
  }
}
@keyframes heroIntroUp {
  to {
    opacity: 1;
    transform: none;
    filter: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  .hero-letter,
  .hero-intro {
    opacity: 1;
    transform: none;
    filter: none;
  }
}
</style>
