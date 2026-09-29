<script setup lang="ts">
const visible = ref(true)
const progress = ref(0)

const { $lenis } = useNuxtApp()

onMounted(() => {
  window.scrollTo(0, 0)
  $lenis?.stop()
  document.documentElement.style.overflow = 'hidden'
  const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 1 : 1300
  const start = performance.now()

  const tick = (now: number) => {
    const p = Math.min((now - start) / duration, 1)
    progress.value = Math.round((1 - Math.pow(1 - p, 3)) * 100)
    if (p < 1) return requestAnimationFrame(tick)
    setTimeout(() => {
      visible.value = false
      document.documentElement.style.overflow = ''
      $lenis?.start()
      document.documentElement.classList.add('is-loaded')
    }, 250)
  }
  requestAnimationFrame(tick)
})
</script>

<template>
  <Transition
    leave-active-class="transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
    leave-to-class="-translate-y-full"
  >
    <div
      v-if="visible"
      class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950"
      aria-hidden="true"
    >
      <div class="relative flex items-baseline gap-4 overflow-hidden">
        <span class="font-serif text-6xl italic text-white md:text-8xl">Ahmed</span>
        <span class="text-gradient font-serif text-6xl italic md:text-8xl">Yousry</span>
      </div>
      <div class="mt-10 h-px w-56 overflow-hidden bg-white/10">
        <div
          class="h-full bg-gradient-to-r from-vue via-aqua to-iris"
          :style="{ width: `${progress}%` }"
        />
      </div>
      <p class="mt-4 font-mono text-xs tracking-[0.3em] text-zinc-500">{{ progress }}%</p>
    </div>
  </Transition>
</template>
