<script setup lang="ts">
import { profile } from '~/data/cv'

useHead({
  noscript: [
    {
      innerHTML:
        '<style>.reveal,.hero-intro,.hero-letter{opacity:1!important;transform:none!important;filter:none!important}</style>',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: profile.name,
        jobTitle: `${profile.role} (${profile.stack})`,
        email: `mailto:${profile.email}`,
        address: { '@type': 'PostalAddress', addressLocality: 'Cairo', addressCountry: 'EG' },
        alumniOf: 'Mansoura University',
        sameAs: [profile.linkedin, profile.github],
        knowsAbout: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Pinia', 'SEO', 'Web Performance'],
      }),
    },
  ],
})
</script>

<template>
  <div class="noise relative">
    <AppPreloader />
    <CursorGlow />
    <AppNav />
    <main class="relative z-10">
      <HeroSection />
      <TechMarquee />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <StandardsSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>
