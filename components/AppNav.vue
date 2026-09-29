<script setup lang="ts">
import { profile } from '~/data/cv'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

const { $scrollTo, $lenis } = useNuxtApp()
const active = ref('')
const scrolled = ref(false)
const progress = ref(0)
const menuOpen = ref(false)

const linkEls = ref<HTMLElement[]>([])
const indicator = reactive({ left: 0, width: 0, visible: false })

function updateIndicator() {
  const i = links.findIndex((l) => l.id === active.value)
  const el = linkEls.value[i]
  if (!el) {
    indicator.visible = false
    return
  }
  indicator.left = el.offsetLeft
  indicator.width = el.offsetWidth
  indicator.visible = true
}

watch(active, () => nextTick(updateIndicator))

function go(id: string) {
  menuOpen.value = false
  nextTick(() => $scrollTo(`#${id}`))
}

watch(menuOpen, (open) => {
  document.documentElement.style.overflow = open ? 'hidden' : ''
  if (open) $lenis?.stop()
  else $lenis?.start()
})

let observer: IntersectionObserver | undefined
const onScroll = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight
  progress.value = max > 0 ? window.scrollY / max : 0
  scrolled.value = window.scrollY > 24
  if (window.scrollY < window.innerHeight * 0.5) active.value = ''
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) active.value = e.target.id
      })
    },
    { rootMargin: '-45% 0px -50% 0px' },
  )
  links.forEach((l) => {
    const el = document.getElementById(l.id)
    if (el) observer?.observe(el)
  })
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', updateIndicator)
  onScroll()
})

onBeforeUnmount(() => {
  observer?.disconnect()
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', updateIndicator)
})
</script>

<template>
  <div class="fixed inset-x-0 top-0 z-50 h-[2px]">
    <div
      class="h-full origin-left bg-gradient-to-r from-vue via-aqua to-iris"
      :style="{ transform: `scaleX(${progress})` }"
    />
  </div>

  <header
    class="fixed inset-x-0 top-0 z-40 transition-all duration-500"
    :class="scrolled ? 'py-3' : 'py-5'"
  >
    <nav class="container-x flex items-center justify-between gap-4" aria-label="Main">
      <a
        href="#top"
        class="group flex items-center gap-2.5"
        aria-label="Ahmed Yousry — back to top"
        @click.prevent="$scrollTo(0)"
      >
        <span
          class="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-white/10 bg-ink-900 font-serif text-lg italic text-white"
        >
          <span
            class="absolute inset-0 bg-gradient-to-br from-vue/30 via-aqua/10 to-iris/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          <span class="relative">AY</span>
        </span>
        <span class="hidden text-sm font-medium text-white sm:block">
          Ahmed Yousry<span class="text-vue">.</span>
        </span>
      </a>

      <div
        class="relative hidden items-center rounded-full p-1.5 transition-all duration-500 md:flex"
        :class="scrolled ? 'glass shadow-2xl shadow-black/40' : 'border border-transparent'"
      >
        <span
          class="absolute top-1.5 h-[calc(100%-12px)] rounded-full bg-white/[0.08] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          :style="{
            left: `${indicator.left}px`,
            width: `${indicator.width}px`,
            opacity: indicator.visible ? 1 : 0,
          }"
        />
        <a
          v-for="l in links"
          :key="l.id"
          ref="linkEls"
          :href="`#${l.id}`"
          class="relative rounded-full px-4 py-2 text-sm transition-colors duration-300"
          :class="active === l.id ? 'text-white' : 'text-zinc-400 hover:text-white'"
          @click.prevent="go(l.id)"
        >
          {{ l.label }}
        </a>
      </div>

      <div class="flex items-center gap-2">
        <a
          :href="`mailto:${profile.email}`"
          class="group hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-950 transition-shadow duration-300 hover:shadow-[0_0_30px_-4px_rgba(66,211,146,0.6)] sm:inline-flex"
        >
          Let's talk
          <AppIcon
            name="arrow-up-right"
            :size="16"
            class="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
        <button
          class="glass grid h-11 w-11 place-items-center rounded-full text-white md:hidden"
          :aria-expanded="menuOpen"
          aria-label="Toggle menu"
          @click="menuOpen = !menuOpen"
        >
          <AppIcon :name="menuOpen ? 'x' : 'menu'" :size="20" />
        </button>
      </div>
    </nav>
  </header>

  <Transition
    enter-active-class="transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
    enter-from-class="opacity-0"
    leave-active-class="transition duration-300"
    leave-to-class="opacity-0"
  >
    <div
      v-if="menuOpen"
      class="fixed inset-0 z-30 flex flex-col justify-between bg-ink-950/95 px-6 pb-10 pt-28 backdrop-blur-2xl md:hidden"
    >
      <ul class="space-y-2">
        <li
          v-for="(l, i) in links"
          :key="l.id"
          class="animate-[menuIn_0.6s_cubic-bezier(0.22,1,0.36,1)_both]"
          :style="{ animationDelay: `${80 + i * 60}ms` }"
        >
          <a
            :href="`#${l.id}`"
            class="flex items-baseline gap-4 border-b border-white/5 py-4 text-4xl font-semibold tracking-tight text-white"
            @click.prevent="go(l.id)"
          >
            <span class="font-mono text-xs text-vue">0{{ i + 1 }}</span>
            {{ l.label }}
          </a>
        </li>
      </ul>
      <div class="flex flex-wrap gap-3 text-sm">
        <a :href="`mailto:${profile.email}`" class="chip py-2">{{ profile.email }}</a>
        <a :href="profile.linkedin" target="_blank" rel="noopener" class="chip py-2">LinkedIn</a>
        <a :href="profile.github" target="_blank" rel="noopener" class="chip py-2">GitHub</a>
      </div>
    </div>
  </Transition>
</template>

<style>
@keyframes menuIn {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
</style>
