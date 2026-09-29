<script setup lang="ts">
type Token = [string, string]

const c = {
  kw: 'text-iris',
  fn: 'text-aqua',
  str: 'text-vue',
  key: 'text-zinc-200',
  num: 'text-amber-300',
  punc: 'text-zinc-500',
  com: 'text-zinc-600 italic',
}

const lines: Token[][] = [
  [['// composables/useDeveloper.ts', c.com]],
  [
    ['export const ', c.kw],
    ['useDeveloper', c.fn],
    [' = () => ({', c.punc],
  ],
  [['  name', c.key], [': ', c.punc], ["'Ahmed Yousry'", c.str], [',', c.punc]],
  [['  role', c.key], [': ', c.punc], ["'Frontend Developer'", c.str], [',', c.punc]],
  [
    ['  stack', c.key],
    [': [', c.punc],
    ["'Vue 3'", c.str],
    [', ', c.punc],
    ["'Nuxt 3'", c.str],
    [', ', c.punc],
    ["'TS'", c.str],
    ['],', c.punc],
  ],
  [
    ['  focus', c.key],
    [': [', c.punc],
    ["'SEO'", c.str],
    [', ', c.punc],
    ["'Perf'", c.str],
    [', ', c.punc],
    ["'UX'", c.str],
    ['],', c.punc],
  ],
  [['  experience', c.key], [': ', c.punc], ["'4+ years'", c.str], [',', c.punc]],
  [['  lighthouse', c.key], [': ', c.punc], ['100', c.num], [',', c.punc]],
  [['  available', c.key], [': ', c.punc], ['true', c.kw], [',', c.punc]],
  [['})', c.punc]],
]

const total = lines.reduce((sum, l) => sum + l.reduce((s, t) => s + t[0].length, 0), 0)
const typed = ref(total)

const rendered = computed(() => {
  let remaining = typed.value
  return lines.map((line) =>
    line.map(([text, cls]) => {
      const visible = text.slice(0, Math.max(0, remaining))
      remaining -= text.length
      return { text: visible, cls }
    }),
  )
})

const cursorLine = computed(() => {
  let remaining = typed.value
  for (let i = 0; i < lines.length; i++) {
    const len = lines[i].reduce((s, t) => s + t[0].length, 0)
    if (remaining <= len) return i
    remaining -= len
  }
  return lines.length - 1
})

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  typed.value = 0
  const startTyping = () => {
    const id = setInterval(() => {
      typed.value += 2
      if (typed.value >= total) {
        typed.value = total
        clearInterval(id)
      }
    }, 28)
  }
  setTimeout(startTyping, 2300)
})
</script>

<template>
  <div class="relative">
    <div
      class="absolute -inset-px rounded-[28px] bg-gradient-to-br from-vue/40 via-aqua/10 to-iris/40 opacity-70 blur-2xl"
    />
    <div
      class="relative overflow-hidden rounded-[26px] border border-white/10 bg-ink-900/90 shadow-2xl shadow-black/60 backdrop-blur-xl"
    >
      <div class="flex items-center justify-between border-b border-white/[0.06] px-5 py-3.5">
        <div class="flex gap-2">
          <span class="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span class="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span class="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span class="font-mono text-[11px] text-zinc-500">useDeveloper.ts</span>
        <span class="font-mono text-[11px] text-vue">TS</span>
      </div>
      <pre
        class="overflow-hidden px-5 py-5 font-mono text-[12.5px] leading-[1.85] sm:text-[13px]"
      ><code><span
          v-for="(line, i) in rendered"
          :key="i"
          class="flex"
        ><span class="mr-5 w-4 select-none text-right text-zinc-700">{{ i + 1 }}</span><span class="whitespace-pre"><span
              v-for="(tok, j) in line"
              :key="j"
              :class="tok.cls"
            >{{ tok.text }}</span><span
              v-if="i === cursorLine"
              class="ml-px inline-block h-[1.1em] w-[7px] translate-y-[3px] animate-blink bg-vue/80"
            /></span></span></code></pre>
    </div>
  </div>
</template>
