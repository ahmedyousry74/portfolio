<script setup lang="ts">
import { profile } from '~/data/cv'

const copied = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email)
    copied.value = true
    clearTimeout(timer)
    timer = setTimeout(() => (copied.value = false), 2000)
  } catch {
    window.location.href = `mailto:${profile.email}`
  }
}

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: 'mail' },
  { label: 'Phone / WhatsApp', value: '+20 106 410 0862', href: `tel:${profile.phone}`, icon: 'phone' },
  { label: 'LinkedIn', value: 'ahmed-yousry', href: profile.linkedin, icon: 'linkedin', external: true },
  { label: 'GitHub', value: 'ahmedyousry74', href: profile.github, icon: 'github', external: true },
]
</script>

<template>
  <section id="contact" class="relative overflow-hidden py-28 md:py-40">
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div class="grid-bg absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]" />
      <div class="absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-vue/15 via-aqua/10 to-iris/15 blur-[120px]" />
    </div>

    <div class="container-x text-center">
      <p v-reveal class="eyebrow justify-center">
        <span class="text-vue">06</span><span class="h-px w-8 bg-zinc-700" />Contact
      </p>
      <h2
        v-reveal="80"
        class="mx-auto mt-6 max-w-5xl text-[clamp(2.6rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-white"
      >
        Let's build something
        <span class="font-serif font-normal italic text-gradient">remarkable</span> together.
      </h2>
      <p v-reveal="160" class="mx-auto mt-8 max-w-xl text-lg text-zinc-400">
        Open to full-time and freelance opportunities — remote or in Cairo. I usually reply within a day.
      </p>

      <div v-reveal="240" class="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a :href="`mailto:${profile.email}`" class="btn-primary group px-8 py-4 text-base">
          <AppIcon name="mail" :size="18" />
          {{ profile.email }}
        </a>
        <button class="btn-ghost px-6 py-4" :aria-label="copied ? 'Copied' : 'Copy email'" @click="copyEmail">
          <Transition mode="out-in" enter-from-class="scale-50 opacity-0" enter-active-class="transition duration-300" leave-to-class="scale-50 opacity-0" leave-active-class="transition duration-150">
            <AppIcon :key="String(copied)" :name="copied ? 'check' : 'copy'" :size="18" :class="copied ? 'text-vue' : ''" />
          </Transition>
          {{ copied ? 'Copied!' : 'Copy email' }}
        </button>
      </div>

      <div class="mx-auto mt-20 grid max-w-5xl gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
        <a
          v-for="(c, i) in channels"
          :key="c.label"
          v-reveal="i * 80"
          :href="c.href"
          :target="c.external ? '_blank' : undefined"
          :rel="c.external ? 'noopener' : undefined"
          class="group"
        >
          <div v-spotlight class="card h-full p-6 transition-colors duration-500 group-hover:border-white/[0.14]">
            <div class="flex items-center justify-between">
              <span class="grid h-11 w-11 place-items-center rounded-2xl bg-white/[0.04] text-zinc-300 transition-colors duration-500 group-hover:text-vue">
                <AppIcon :name="c.icon" :size="20" />
              </span>
              <AppIcon
                name="arrow-up-right"
                :size="18"
                class="text-zinc-600 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
              />
            </div>
            <p class="mt-6 text-xs uppercase tracking-[0.2em] text-zinc-500">{{ c.label }}</p>
            <p class="mt-1.5 truncate font-medium text-white">{{ c.value }}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
