<script setup lang="ts">
import { projects, type Project } from '~/data/cv'

const featured = projects.filter((p) => p.featured)
const others = projects.filter((p) => !p.featured)

const filters = ['All', 'Nuxt', 'Vue', 'Other'] as const
const filter = ref<(typeof filters)[number]>('All')
const visible = computed(() => (filter.value === 'All' ? others : others.filter((p) => p.category === filter.value)))

const selected = ref<Project | null>(null)
</script>

<template>
  <section id="work" class="relative overflow-hidden py-28 md:py-36">
    <div
      class="pointer-events-none absolute right-0 top-60 -z-10 h-[600px] w-[600px] rounded-full bg-vue/10 blur-[150px]"
      aria-hidden="true"
    />
    <div class="container-x">
      <SectionHeading
        index="04"
        label="Selected work"
        title="Products I've"
        accent="brought to life."
        description="Marketing sites, dashboards, e-commerce and e-learning platforms — built with care for performance, SEO and the people using them."
      />

      <!-- Featured -->
      <div class="space-y-6 md:space-y-8">
        <article
          v-for="(p, i) in featured"
          :key="p.subtitle"
          v-reveal
          class="group card grid cursor-pointer overflow-hidden transition-colors duration-500 hover:border-white/[0.14] lg:grid-cols-12"
          data-cursor
          @click="selected = p"
        >
          <div
            class="relative h-72 sm:h-80 lg:col-span-7 lg:h-auto lg:min-h-[440px]"
            :class="i % 2 === 1 ? 'lg:order-2' : ''"
          >
            <ProjectVisual :project="p" />
          </div>

          <div class="flex flex-col p-7 sm:p-10 lg:col-span-5">
            <div class="flex items-center justify-between">
              <span class="font-mono text-xs text-zinc-600">0{{ i + 1 }} / Featured</span>
              <span class="chip" :style="{ color: p.accent }">{{ p.category === 'Nuxt' ? 'Nuxt 3' : 'Vue 3' }}</span>
            </div>
            <h3 class="mt-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {{ p.title }}
              <span class="block font-serif text-2xl font-normal italic text-zinc-400 md:text-3xl">{{ p.subtitle }}</span>
            </h3>
            <p class="mt-5 leading-relaxed text-zinc-400">{{ p.description }}</p>

            <ul class="mt-6 space-y-2.5">
              <li v-for="(pt, k) in p.points.slice(0, 3)" :key="k" class="flex gap-3 text-sm leading-relaxed text-zinc-400">
                <AppIcon name="check" :size="16" class="mt-0.5 shrink-0" :style="{ color: p.accent }" />
                {{ pt }}
              </li>
            </ul>

            <div class="mt-auto pt-8">
              <div v-if="p.metric" class="mb-6 flex items-baseline gap-3 border-t border-white/[0.06] pt-6">
                <span class="text-3xl font-semibold tracking-tight" :style="{ color: p.accent }">{{ p.metric.value }}</span>
                <span class="text-sm text-zinc-500">{{ p.metric.label }}</span>
              </div>
              <div class="flex flex-wrap items-center gap-3">
                <button class="btn-ghost group/btn py-3" @click.stop="selected = p">
                  Case details
                  <AppIcon name="arrow-right" :size="16" class="transition-transform group-hover/btn:translate-x-1" />
                </button>
                <a
                  v-if="p.url"
                  :href="p.url"
                  target="_blank"
                  rel="noopener"
                  class="group/link inline-flex items-center gap-1.5 px-2 text-sm font-medium text-zinc-300 hover:text-white"
                  @click.stop
                >
                  Live site
                  <AppIcon
                    name="arrow-up-right"
                    :size="16"
                    class="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- More projects -->
      <div class="mt-24 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h3 v-reveal class="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          More <span class="font-serif font-normal italic text-gradient">projects</span>
        </h3>
        <div v-reveal="100" class="glass inline-flex self-start rounded-full p-1 md:self-auto" role="tablist">
          <button
            v-for="f in filters"
            :key="f"
            role="tab"
            :aria-selected="filter === f"
            class="relative rounded-full px-4 py-2 text-sm transition-colors duration-300"
            :class="filter === f ? 'bg-white text-ink-950' : 'text-zinc-400 hover:text-white'"
            @click="filter = f"
          >
            {{ f }}
          </button>
        </div>
      </div>

      <TransitionGroup
        tag="div"
        class="relative mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        move-class="transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        enter-active-class="transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        enter-from-class="opacity-0 scale-95 translate-y-4"
        leave-active-class="transition-all duration-300 absolute"
        leave-to-class="opacity-0 scale-95"
      >
        <article
          v-for="p in visible"
          :key="p.title"
          v-spotlight
          class="group card flex cursor-pointer flex-col transition-all duration-500 hover:-translate-y-1.5 hover:border-white/[0.14]"
          data-cursor
          tabindex="0"
          @click="selected = p"
          @keydown.enter="selected = p"
        >
          <div class="relative h-52">
            <ProjectVisual :project="p" compact />
          </div>
          <div class="flex flex-1 flex-col p-6">
            <div class="flex items-start justify-between gap-3">
              <div>
                <h4 class="text-xl font-semibold text-white">{{ p.title }}</h4>
                <p class="mt-0.5 text-sm text-zinc-500">{{ p.subtitle }}</p>
              </div>
              <span
                class="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 text-zinc-400 transition-all duration-500 group-hover:rotate-45 group-hover:border-transparent group-hover:bg-white group-hover:text-ink-950"
              >
                <AppIcon name="arrow-up-right" :size="16" />
              </span>
            </div>
            <p class="mt-4 line-clamp-3 text-sm leading-relaxed text-zinc-400">{{ p.description }}</p>
            <div class="mt-auto flex flex-wrap gap-1.5 pt-5">
              <span v-for="s in p.stack" :key="s" class="rounded-md bg-white/[0.04] px-2 py-0.5 text-[11px] text-zinc-400">{{ s }}</span>
            </div>
          </div>
        </article>
      </TransitionGroup>
    </div>

    <ProjectModal :project="selected" @close="selected = null" />
  </section>
</template>
