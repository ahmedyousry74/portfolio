<script setup lang="ts">
import type { Project } from '~/data/cv'

const props = defineProps<{ project: Project; compact?: boolean }>()

const domain = computed(() =>
  props.project.url
    ? props.project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : `${props.project.title.toLowerCase().replace(/\s+/g, '')}.app`,
)
</script>

<template>
  <div
    class="absolute inset-0 overflow-hidden bg-gradient-to-br"
    :class="project.gradient"
    :style="{ '--a': project.accent }"
  >
    <div class="grid-bg absolute inset-0 opacity-40" />
    <div
      class="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-40 blur-3xl"
      :style="{ background: project.accent }"
    />

    <div
      class="absolute inset-x-[7%] bottom-0 top-[12%] overflow-hidden rounded-t-2xl border border-b-0 border-white/10 bg-ink-950/85 shadow-2xl shadow-black/50 backdrop-blur-md transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2"
    >
      <!-- Browser chrome -->
      <div class="flex items-center gap-3 border-b border-white/[0.06] px-4 py-2.5">
        <div class="flex gap-1.5">
          <span class="h-2 w-2 rounded-full bg-white/15" />
          <span class="h-2 w-2 rounded-full bg-white/15" />
          <span class="h-2 w-2 rounded-full bg-white/15" />
        </div>
        <div
          class="mx-auto flex max-w-[60%] items-center gap-1.5 truncate rounded-md bg-white/[0.04] px-3 py-1 font-mono text-[10px] text-zinc-500"
        >
          <span class="h-1.5 w-1.5 shrink-0 rounded-full" :style="{ background: 'var(--a)' }" />
          {{ domain }}
        </div>
      </div>

      <div class="relative h-full p-4 sm:p-5">
        <!-- Marketing site -->
        <template v-if="project.visual === 'site'">
          <div class="flex items-center justify-between">
            <span class="h-2.5 w-14 rounded-full" :style="{ background: 'var(--a)' }" />
            <div v-if="!compact" class="hidden gap-3 sm:flex">
              <span v-for="n in 4" :key="n" class="h-1.5 w-8 rounded-full bg-white/10" />
            </div>
            <span class="h-5 w-14 rounded-full bg-white/90" />
          </div>
          <div class="mt-7 space-y-2.5 sm:mt-9">
            <div class="h-4 w-3/4 rounded-md bg-white/80 sm:h-5" />
            <div
              class="h-4 w-1/2 rounded-md opacity-90 transition-all duration-700 group-hover:w-2/3 sm:h-5"
              :style="{ background: 'linear-gradient(90deg, var(--a), rgba(255,255,255,0.3))' }"
            />
            <div class="!mt-4 h-1.5 w-2/3 rounded-full bg-white/10" />
            <div class="h-1.5 w-1/2 rounded-full bg-white/10" />
          </div>
          <div class="mt-5 flex gap-2">
            <span class="h-6 w-20 rounded-full" :style="{ background: 'var(--a)' }" />
            <span class="h-6 w-20 rounded-full border border-white/15" />
          </div>
          <div class="mt-6 grid grid-cols-3 gap-2.5">
            <div
              v-for="n in 3"
              :key="n"
              class="h-16 rounded-xl border border-white/[0.06] bg-white/[0.03] p-2.5 transition-transform duration-500 group-hover:-translate-y-1"
              :style="{ transitionDelay: `${n * 60}ms` }"
            >
              <span class="block h-4 w-4 rounded-md opacity-70" :style="{ background: 'var(--a)' }" />
              <span class="mt-2 block h-1.5 w-3/4 rounded-full bg-white/10" />
            </div>
          </div>
        </template>

        <!-- Dashboard -->
        <template v-else-if="project.visual === 'dashboard'">
          <div class="flex h-full gap-3">
            <div class="hidden w-[22%] shrink-0 space-y-2 border-r border-white/[0.06] pr-3 sm:block">
              <span class="mb-4 block h-2.5 w-12 rounded-full" :style="{ background: 'var(--a)' }" />
              <span
                v-for="n in 6"
                :key="n"
                class="block h-2 rounded-full"
                :class="n === 2 ? 'w-full' : 'w-3/4 bg-white/10'"
                :style="n === 2 ? { background: 'var(--a)', opacity: 0.5 } : {}"
              />
            </div>
            <div class="flex-1">
              <div class="grid grid-cols-3 gap-2">
                <div v-for="n in 3" :key="n" class="rounded-lg border border-white/[0.06] bg-white/[0.03] p-2">
                  <span class="block h-1.5 w-8 rounded-full bg-white/15" />
                  <span class="mt-2 block h-3 w-10 rounded" :class="n === 1 ? '' : 'bg-white/70'" :style="n === 1 ? { background: 'var(--a)' } : {}" />
                </div>
              </div>
              <div class="mt-3 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                <div class="flex h-24 items-end gap-1.5 sm:h-28">
                  <span
                    v-for="(h, n) in [40, 62, 35, 78, 55, 90, 48, 70, 84, 60, 95, 72]"
                    :key="n"
                    class="flex-1 origin-bottom rounded-t-sm transition-transform duration-700 group-hover:scale-y-110"
                    :style="{
                      height: `${h}%`,
                      background: n % 3 === 0 ? 'var(--a)' : 'rgba(255,255,255,0.12)',
                      transitionDelay: `${n * 30}ms`,
                    }"
                  />
                </div>
              </div>
              <div class="mt-3 space-y-2">
                <div v-for="n in 2" :key="n" class="flex items-center gap-2">
                  <span class="h-5 w-5 rounded-full bg-white/10" />
                  <span class="h-1.5 flex-1 rounded-full bg-white/10" />
                  <span class="h-4 w-10 rounded-full opacity-60" :style="{ background: 'var(--a)' }" />
                </div>
              </div>
            </div>
          </div>
        </template>

        <!-- Shop -->
        <template v-else-if="project.visual === 'shop'">
          <div class="flex items-center gap-3">
            <span class="h-2.5 w-12 rounded-full" :style="{ background: 'var(--a)' }" />
            <span class="h-6 flex-1 rounded-full border border-white/10 bg-white/[0.03]" />
            <span class="h-6 w-6 rounded-full bg-white/10" />
          </div>
          <div class="mt-4 grid grid-cols-3 gap-2.5">
            <div
              v-for="n in 6"
              :key="n"
              class="rounded-xl border border-white/[0.06] bg-white/[0.03] p-2 transition-transform duration-500 group-hover:-translate-y-1"
              :style="{ transitionDelay: `${n * 40}ms` }"
            >
              <div
                class="h-12 rounded-lg sm:h-14"
                :style="{
                  background: `linear-gradient(135deg, var(--a), rgba(255,255,255,${0.04 + (n % 3) * 0.05}))`,
                  opacity: 0.35 + (n % 3) * 0.2,
                }"
              />
              <span class="mt-2 block h-1.5 w-3/4 rounded-full bg-white/15" />
              <span class="mt-1.5 block h-2 w-1/3 rounded-full" :style="{ background: 'var(--a)' }" />
            </div>
          </div>
        </template>

        <!-- eSIM -->
        <template v-else-if="project.visual === 'esim'">
          <div class="flex h-full gap-4">
            <div class="relative hidden w-[40%] items-start justify-center sm:flex">
              <div class="relative mt-2 aspect-square w-full max-w-[140px] rounded-full border border-white/10">
                <div class="absolute inset-[15%] rounded-full border border-white/10" />
                <div class="absolute inset-y-0 left-1/2 w-px bg-white/10" />
                <div class="absolute inset-x-0 top-1/2 h-px bg-white/10" />
                <span
                  v-for="(pos, n) in [
                    [20, 30],
                    [65, 22],
                    [48, 60],
                    [75, 70],
                  ]"
                  :key="n"
                  class="absolute h-2 w-2 animate-ping rounded-full"
                  :style="{ left: `${pos[0]}%`, top: `${pos[1]}%`, background: 'var(--a)', animationDelay: `${n * 0.5}s`, animationDuration: '2.5s' }"
                />
              </div>
            </div>
            <div class="flex-1 space-y-2">
              <div
                v-for="n in 4"
                :key="n"
                class="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.03] px-2.5 py-2"
              >
                <span class="h-4 w-5 rounded-sm bg-white/20" />
                <span class="h-1.5 flex-1 rounded-full bg-white/10" />
                <span class="h-3 w-8 rounded-full" :style="{ background: 'var(--a)', opacity: n === 1 ? 1 : 0.4 }" />
              </div>
              <div class="flex items-center gap-2 pt-1">
                <div class="grid h-12 w-12 grid-cols-4 gap-0.5 rounded-md bg-white p-1">
                  <span v-for="n in 16" :key="n" class="rounded-[1px]" :class="[1, 3, 4, 6, 9, 11, 12, 13, 16].includes(n) ? 'bg-ink-950' : ''" />
                </div>
                <span class="h-1.5 w-16 rounded-full bg-white/10" />
              </div>
            </div>
          </div>
        </template>

        <!-- Learning -->
        <template v-else-if="project.visual === 'learn'">
          <div class="grid grid-cols-5 gap-3">
            <div class="col-span-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-2">
              <div class="grid h-20 place-items-center rounded-lg sm:h-24" :style="{ background: 'linear-gradient(135deg, var(--a), transparent)', opacity: 0.6 }">
                <span class="grid h-8 w-8 place-items-center rounded-full bg-white/90">
                  <span class="ml-0.5 h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-ink-950" />
                </span>
              </div>
              <span class="mt-2 block h-1.5 w-2/3 rounded-full bg-white/15" />
            </div>
            <div class="col-span-2 space-y-2">
              <div v-for="n in 3" :key="n" class="rounded-lg border border-white/[0.06] bg-white/[0.03] p-2">
                <span class="block h-1.5 w-3/4 rounded-full bg-white/15" />
                <div class="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    class="h-full rounded-full transition-all duration-1000 group-hover:!w-full"
                    :style="{ width: `${[80, 45, 60][n - 1]}%`, background: 'var(--a)' }"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="mt-3 grid grid-cols-7 gap-1">
            <span
              v-for="n in 14"
              :key="n"
              class="h-3 rounded-sm"
              :style="{ background: [2, 5, 6, 9, 12].includes(n) ? 'rgba(255,255,255,0.08)' : 'var(--a)', opacity: [2, 5, 6, 9, 12].includes(n) ? 1 : 0.55 }"
            />
          </div>
        </template>

        <!-- Reader -->
        <template v-else>
          <div class="mx-auto flex h-[70%] max-w-[90%] overflow-hidden rounded-lg shadow-2xl shadow-black/60">
            <div class="flex-1 space-y-1.5 bg-[#f4efe6] p-3 [transform:perspective(600px)_rotateY(8deg)]">
              <span v-for="n in 8" :key="n" class="block h-1 rounded-full bg-zinc-400/70" :style="{ width: `${70 + ((n * 13) % 30)}%` }" />
            </div>
            <div class="w-px bg-zinc-300" />
            <div class="flex-1 space-y-1.5 bg-[#efe9dd] p-3 [transform:perspective(600px)_rotateY(-8deg)]">
              <span
                v-for="n in 8"
                :key="n"
                class="block h-1 rounded-full"
                :class="n === 3 ? '' : 'bg-zinc-400/70'"
                :style="{ width: `${65 + ((n * 17) % 35)}%`, background: n === 3 ? 'var(--a)' : undefined }"
              />
            </div>
          </div>
          <div class="mx-auto mt-3 flex h-8 max-w-[70%] items-center justify-center gap-[3px]">
            <span
              v-for="n in 28"
              :key="n"
              class="w-1 origin-center rounded-full transition-transform duration-500 group-hover:scale-y-150"
              :style="{ height: `${20 + Math.abs(Math.sin(n * 0.8)) * 70}%`, background: 'var(--a)', opacity: 0.7, transitionDelay: `${n * 15}ms` }"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
