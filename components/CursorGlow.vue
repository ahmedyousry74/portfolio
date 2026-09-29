<script setup lang="ts">
const glow = ref<HTMLElement>()
const dot = ref<HTMLElement>()
const enabled = ref(false)
const hovering = ref(false)

let frame = 0
let onMove: ((e: PointerEvent) => void) | undefined
let onOver: ((e: PointerEvent) => void) | undefined

onMounted(() => {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
  enabled.value = true

  const target = { x: window.innerWidth / 2, y: window.innerHeight / 3 }
  const pos = { ...target }
  const dotPos = { ...target }

  onMove = (e) => {
    target.x = e.clientX
    target.y = e.clientY
  }
  onOver = (e) => {
    hovering.value = !!(e.target as HTMLElement)?.closest('a, button, [data-cursor]')
  }

  const loop = () => {
    pos.x += (target.x - pos.x) * 0.08
    pos.y += (target.y - pos.y) * 0.08
    dotPos.x += (target.x - dotPos.x) * 0.35
    dotPos.y += (target.y - dotPos.y) * 0.35
    if (glow.value) glow.value.style.transform = `translate3d(${pos.x - 300}px, ${pos.y - 300}px, 0)`
    if (dot.value) dot.value.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0)`
    frame = requestAnimationFrame(loop)
  }

  window.addEventListener('pointermove', onMove, { passive: true })
  window.addEventListener('pointerover', onOver, { passive: true })
  loop()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
  if (onMove) window.removeEventListener('pointermove', onMove)
  if (onOver) window.removeEventListener('pointerover', onOver)
})
</script>

<template>
  <div v-if="enabled" class="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
    <div
      ref="glow"
      class="absolute left-0 top-0 h-[600px] w-[600px] rounded-full opacity-60"
      style="background: radial-gradient(circle, rgba(66, 211, 146, 0.07), rgba(56, 189, 248, 0.04) 40%, transparent 70%)"
    />
  </div>
  <div
    v-if="enabled"
    ref="dot"
    class="pointer-events-none fixed left-0 top-0 z-[70] hidden md:block"
    aria-hidden="true"
  >
    <div
      class="-translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 transition-all duration-300 ease-out"
      :class="hovering ? 'h-12 w-12 bg-white/10 backdrop-blur-[1px]' : 'h-3 w-3 bg-white/80'"
    />
  </div>
</template>
