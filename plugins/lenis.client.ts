import Lenis from 'lenis'

export default defineNuxtPlugin(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const lenis = reduced ? null : new Lenis({ duration: 1.15, smoothWheel: true })

  if (lenis) {
    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }

  const scrollTo = (target: string | number) => {
    if (lenis) {
      lenis.scrollTo(target, { offset: typeof target === 'string' ? -80 : 0 })
      return
    }
    if (typeof target === 'number') window.scrollTo({ top: target })
    else document.querySelector(target)?.scrollIntoView()
  }

  return { provide: { lenis, scrollTo } }
})
