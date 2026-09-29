<script setup lang="ts">
const props = withDefaults(defineProps<{ to: number; duration?: number; suffix?: string }>(), {
  duration: 1800,
  suffix: '',
})

const el = ref<HTMLElement>()
const current = ref(props.to)
let observer: IntersectionObserver | undefined

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !el.value) return
  current.value = 0

  observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return
    observer?.disconnect()
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / props.duration, 1)
      current.value = Math.round(props.to * (1 - Math.pow(1 - p, 4)))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  })
  observer.observe(el.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <span ref="el" class="tabular-nums">{{ current }}{{ suffix }}</span>
</template>
