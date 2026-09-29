<script setup lang="ts">
import type { Project } from '~/data/cv'

const props = defineProps<{ project: Project | null }>()
const emit = defineEmits<{ close: [] }>()

const { $lenis } = useNuxtApp()
const panel = ref<HTMLElement>()

const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') emit('close')
}

watch(
  () => props.project,
  (p) => {
    if (p) {
      $lenis?.stop()
      document.documentElement.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
      nextTick(() => panel.value?.focus())
    } else {
      $lenis?.start()
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  },
)

onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-500"
      enter-from-class="opacity-0"
      leave-active-class="transition duration-300"
      leave-to-class="opacity-0"
    >
      <div
        v-if="project"
        class="fixed inset-0 z-[80] flex items-end justify-center bg-black/70 p-0 backdrop-blur-md sm:items-center sm:p-6"
        @click.self="emit('close')"
      >
        <div
          ref="panel"
          tabindex="-1"
          role="dialog"
          aria-modal="true"
          :aria-label="`${project.title} — ${project.subtitle}`"
          data-lenis-prevent
          class="modal-panel relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-[28px] border border-white/10 bg-ink-900 shadow-2xl outline-none sm:rounded-[28px]"
        >
          <button
            class="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/50 text-white backdrop-blur transition hover:rotate-90 hover:bg-black/70"
            aria-label="Close"
            @click="emit('close')"
          >
            <AppIcon name="x" :size="18" />
          </button>

          <div class="group relative h-60 sm:h-72">
            <ProjectVisual :project="project" />
          </div>

          <div class="p-7 sm:p-10">
            <p class="eyebrow" :style="{ color: project.accent }">{{ project.subtitle }}</p>
            <h3 class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{{ project.title }}</h3>
            <p class="mt-4 leading-relaxed text-zinc-400">{{ project.description }}</p>

            <div v-if="project.metric" class="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-3">
              <span class="text-2xl font-semibold" :style="{ color: project.accent }">{{ project.metric.value }}</span>
              <span class="text-sm text-zinc-400">{{ project.metric.label }}</span>
            </div>

            <h4 class="eyebrow mt-8">Highlights</h4>
            <ul class="mt-4 space-y-3">
              <li v-for="(p, i) in project.points" :key="i" class="flex gap-3 leading-relaxed text-zinc-300">
                <AppIcon name="check" :size="18" class="mt-0.5 shrink-0" :style="{ color: project.accent }" />
                {{ p }}
              </li>
            </ul>

            <h4 class="eyebrow mt-8">Stack</h4>
            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="s in project.stack" :key="s" class="chip">{{ s }}</span>
            </div>

            <a
              v-if="project.url"
              :href="project.url"
              target="_blank"
              rel="noopener"
              class="btn-primary group mt-10 w-full sm:w-auto"
            >
              Visit live site
              <AppIcon
                name="arrow-up-right"
                :size="16"
                class="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-panel {
  animation: panelIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
}
@keyframes panelIn {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.97);
  }
}
</style>
