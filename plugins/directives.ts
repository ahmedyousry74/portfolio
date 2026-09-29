import type { Directive } from 'vue'

type RevealEl = HTMLElement & { _revealObserver?: IntersectionObserver }

const reveal: Directive<RevealEl, number | undefined> = {
  getSSRProps(binding) {
    return {
      class: 'reveal',
      style: binding.value ? { '--reveal-delay': `${binding.value}ms` } : undefined,
    }
  },
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) el.style.setProperty('--reveal-delay', `${binding.value}ms`)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(el)
    el._revealObserver = observer
  },
  unmounted(el) {
    el._revealObserver?.disconnect()
  },
}

type PointerEl = HTMLElement & { _onMove?: (e: PointerEvent) => void; _onLeave?: () => void }

const spotlight: Directive<PointerEl> = {
  getSSRProps() {
    return { class: 'spotlight' }
  },
  mounted(el) {
    el.classList.add('spotlight')
    el._onMove = (e) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    el.addEventListener('pointermove', el._onMove)
  },
  unmounted(el) {
    if (el._onMove) el.removeEventListener('pointermove', el._onMove)
  },
}

const tilt: Directive<PointerEl, number | undefined> = {
  mounted(el, binding) {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const max = binding.value ?? 8
    el.style.transformStyle = 'preserve-3d'
    el.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'

    el._onMove = (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      el.style.transform = `perspective(1000px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg)`
    }
    el._onLeave = () => {
      el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)'
    }
    el.addEventListener('pointermove', el._onMove)
    el.addEventListener('pointerleave', el._onLeave)
  },
  unmounted(el) {
    if (el._onMove) el.removeEventListener('pointermove', el._onMove)
    if (el._onLeave) el.removeEventListener('pointerleave', el._onLeave)
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', reveal)
  nuxtApp.vueApp.directive('spotlight', spotlight)
  nuxtApp.vueApp.directive('tilt', tilt)
})
