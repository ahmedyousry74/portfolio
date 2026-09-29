export const profile = {
  name: 'Ahmed Yousry',
  firstName: 'Ahmed',
  lastName: 'Yousry',
  role: 'Frontend Developer',
  stack: 'Vue.js / Nuxt.js',
  location: 'Cairo, Egypt',
  phone: '+201064100862',
  email: 'ayousry750@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ahmed-yousry-45669b1b5/',
  github: 'https://github.com/ahmedyousry74',
  cv: '/Ahmed-Yousry-CV.pdf',
  summary:
    'Creative frontend developer with 4+ years of experience building scalable, high-performance web applications. Specialized in Vue.js and Nuxt.js ecosystems with a strong focus on SEO, performance optimization, and seamless API integration. Passionate about crafting exceptional user experiences and staying current with the latest frontend trends and best practices.',
}

export const stats = [
  { value: 4, suffix: '+', label: 'Years of experience' },
  { value: 100, suffix: '', label: 'Lighthouse performance score' },
  { value: 7, suffix: '+', label: 'Payment gateways integrated' },
  { value: 10, suffix: '', label: 'Key products shipped' },
]

export const skillGroups = [
  { title: 'Core', icon: 'code', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript'] },
  { title: 'Frameworks', icon: 'layers', items: ['Vue.js 3', 'Nuxt.js 2 & 3', 'React.js (Basic)'] },
  { title: 'State Management', icon: 'database', items: ['Pinia', 'Vuex'] },
  { title: 'UI Libraries', icon: 'palette', items: ['Tailwind CSS', 'Vuetify', 'Bootstrap', 'SASS'] },
  { title: 'Tools & DevOps', icon: 'git', items: ['Git', 'GitHub', 'Google Tag Manager', 'Google PageSpeed'] },
  { title: 'Analytics & Marketing', icon: 'chart', items: ['Meta Pixel', 'TikTok Pixel', 'gtag.js', 'GTM'] },
  {
    title: 'Integrations',
    icon: 'plug',
    items: ['RESTful APIs', 'Payment Gateways (7+)', 'Google Maps API'],
  },
  {
    title: 'Other',
    icon: 'spark',
    items: ['SEO', 'Web Performance', 'PHP (Basic)', 'WordPress (Basic)'],
  },
]

export const marquee = [
  'Vue.js 3',
  'Nuxt 3',
  'TypeScript',
  'Tailwind CSS',
  'Pinia',
  'Vuex',
  'Vuetify',
  'SASS',
  'SSR & SEO',
  'Core Web Vitals',
  'i18n · RTL/LTR',
  'REST APIs',
  'Payment Gateways',
  'Google Tag Manager',
]

export const experience = [
  {
    company: 'Rivix',
    role: 'Frontend Developer',
    type: 'Remote · Full-Time',
    period: 'Oct 2025 — Present',
    current: true,
    points: [
      "Developed and maintained the company's public-facing marketing website (rivix.app) built with Nuxt 3, ensuring high performance, SEO optimization, and multi-language support (Arabic/English).",
      'Built and maintained the Brand Dashboard using Vue 3, enabling brands to create campaigns, manage influencer applications, review and approve content, and track campaign performance.',
      'Built and maintained the Admin Dashboard using Vue 3, providing full control over platform users, campaigns, payments, and content moderation.',
      'Established and enforced frontend coding standards across all three products — component architecture, naming conventions, reusable composables, and consistent state management patterns.',
      'Collaborated closely with backend and design teams to deliver a seamless, responsive experience across web and mobile viewports.',
    ],
    tags: ['Nuxt 3', 'Vue 3', 'Pinia', 'i18n', 'Tailwind'],
  },
  {
    company: 'Ish7nha',
    role: 'Frontend Developer',
    type: 'Remote · Full-Time',
    period: 'Oct 2024 — Oct 2025',
    points: [
      'Built the entire application from scratch using Nuxt 3, Pinia, and Sanctum Nuxt Auth for secure and efficient authentication.',
      'Designed and implemented the frontend architecture, ensuring long-term maintainability and scalability.',
      'Achieved a perfect 100/100 score on Google PageSpeed Insights / Lighthouse performance metrics.',
      'Integrated 7+ payment methods widely used across the MENA region (STC Pay, Mobily, Visa, Mada, UrPay, Iraqcom, Apple Pay).',
      'Implemented advanced SEO strategies that significantly improved Google search rankings and organic visibility.',
      'Set up user tracking with GTM, gtag.js, Meta Pixel, and TikTok Pixel to support analytics and targeted marketing.',
    ],
    tags: ['Nuxt 3', 'Pinia', 'Sanctum Auth', 'SEO', 'GTM'],
  },
  {
    company: 'Scientific Thought',
    role: 'Frontend Developer',
    type: 'Part-Time',
    period: 'Mar 2024 — Mar 2025',
    points: [
      'Optimized application performance through code refactoring and implementation of frontend best practices.',
      'Implemented a responsive design strategy that improved mobile accessibility by 60%, significantly increasing mobile user engagement.',
    ],
    tags: ['Performance', 'Responsive Design'],
  },
  {
    company: 'Depo',
    role: 'Frontend Developer',
    type: 'Remote · Full-Time',
    period: 'Jun 2023 — Sep 2024',
    points: [
      'Developed and maintained user-friendly, responsive web applications using Vue.js and Nuxt.js.',
      'Built complex data-driven interfaces ensuring accessibility and performance across all devices.',
      'Integrated RESTful APIs to dynamically update content and deliver a seamless user experience.',
      'Implemented Vuex for efficient state management across complex multi-component applications.',
    ],
    tags: ['Vue.js', 'Nuxt.js', 'Vuex', 'REST APIs'],
  },
  {
    company: 'Business Building',
    role: 'Frontend Developer',
    type: 'Part-Time',
    period: 'May 2023 — Sep 2023',
    points: [
      'Designed and implemented dynamic, responsive user interfaces using Vue.js.',
      'Developed real-time features including payment processing and notifications, enhancing platform interactivity.',
    ],
    tags: ['Vue.js', 'Payments', 'Real-time'],
  },
  {
    company: 'Grand Community',
    role: 'Frontend Developer',
    type: 'Full-Time',
    period: 'May 2022 — May 2023',
    points: [
      'Spearheaded the migration of legacy frontend code to a modern Vue.js and Nuxt.js framework.',
      'Collaborated with stakeholders to define project requirements and deliver solutions aligned with business goals.',
      'Managed component state to ensure data consistency and improve overall application architecture.',
      "Contributed to migrating the company's main website to a modern JavaScript framework, resulting in a 35% improvement in site performance.",
    ],
    tags: ['Vue.js', 'Nuxt.js', 'Migration'],
  },
  {
    company: 'Moltaqa Tech',
    role: 'Frontend Developer',
    type: 'Full-Time',
    period: 'Mar 2021 — May 2022',
    points: [
      'Designed and implemented complex user interfaces and web applications using Vue.js.',
      'Collaborated with UX/UI designers to optimize interfaces, reducing page load time by 30% and improving overall user experience.',
      'Developed fully responsive layouts ensuring optimal performance on both mobile and desktop devices.',
    ],
    tags: ['Vue.js', 'UI/UX', 'Responsive'],
  },
]

export type Project = {
  title: string
  subtitle: string
  url?: string
  stack: string[]
  description: string
  points: string[]
  category: 'Nuxt' | 'Vue' | 'Other'
  featured?: boolean
  gradient: string
  accent: string
  visual: 'site' | 'dashboard' | 'shop' | 'esim' | 'learn' | 'reader'
  metric?: { value: string; label: string }
}

export const projects: Project[] = [
  {
    title: 'Rivix',
    subtitle: 'Marketing Website',
    url: 'https://rivix.app/',
    stack: ['Nuxt 3', 'Tailwind CSS', 'Pinia', 'Vuetify'],
    description:
      'The official public-facing website of Rivix, a platform connecting brands with influencers through transparent, results-driven campaigns.',
    points: [
      'Built from scratch with Nuxt 3 and SSR for optimal SEO and fast initial page load.',
      'Full Arabic/English support with dynamic RTL/LTR switching via Nuxt i18n.',
      'Home, For Brands, For Influencers, About, Solutions and Contact landing pages.',
      'Smooth animations and interactive UI elements to elevate brand presentation.',
      'Optimized Core Web Vitals for high PageSpeed scores on desktop and mobile.',
    ],
    category: 'Nuxt',
    featured: true,
    gradient: 'from-fuchsia-500/30 via-violet-500/20 to-sky-500/30',
    accent: '#a78bfa',
    visual: 'site',
    metric: { value: 'AR / EN', label: 'RTL · LTR with i18n' },
  },
  {
    title: 'Rivix',
    subtitle: 'Brand Dashboard',
    url: 'https://brand.rivix.app/login',
    stack: ['Vue 3', 'Tailwind CSS', 'Pinia', 'Vuetify'],
    description:
      'A comprehensive dashboard for brands to manage their entire influencer marketing lifecycle on the Rivix platform.',
    points: [
      'Multi-step campaign creation flow — goals, budgets, timelines and target audience with full validation.',
      'Influencer applications management with profiles, audience analytics and accept/reject feedback.',
      'Content review & approval module with revision requests before content goes live.',
      'Real-time campaign performance tracking: reach, engagement and ROI per campaign.',
      'Secure in-platform wallet and payment flow for budgeting and influencer payouts.',
      'Domain-scoped Pinia stores (campaigns, influencers, payments) for complex async state.',
    ],
    category: 'Vue',
    featured: true,
    gradient: 'from-indigo-500/30 via-sky-500/20 to-emerald-400/30',
    accent: '#38bdf8',
    visual: 'dashboard',
    metric: { value: 'ROI', label: 'Real-time campaign analytics' },
  },
  {
    title: 'Ish7nha',
    subtitle: 'Digital Gaming E-Commerce',
    url: 'https://ish7nha.com/',
    stack: ['Nuxt 3', 'Tailwind CSS', 'Pinia', 'Sanctum Auth', 'Nuxt UI'],
    description:
      'A professional e-commerce platform for digital gaming products and gift cards, offering instant delivery across the MENA region.',
    points: [
      'Integrated 7+ payment methods: STC Pay, Mobily, Visa, Mada, UrPay, Iraqcom and Apple Pay.',
      'Custom Wallet for balance management, transaction history and seamless purchases.',
      'Advanced SEO strategies significantly improving visibility across major search engines.',
      'GTM, Meta Pixel, TikTok Pixel and gtag.js for analytics and targeted marketing.',
    ],
    category: 'Nuxt',
    featured: true,
    gradient: 'from-emerald-400/30 via-teal-500/20 to-cyan-500/30',
    accent: '#42d392',
    visual: 'shop',
    metric: { value: '100/100', label: 'Lighthouse performance' },
  },
  {
    title: 'Ish7nha eSIM',
    subtitle: 'Travel Connectivity',
    stack: ['Nuxt 3', 'Tailwind CSS', 'Pinia'],
    description:
      'A platform for purchasing eSIMs, enabling travelers to get instant mobile data connectivity anywhere in the world.',
    points: [
      'Storefront and purchase flow for browsing and buying eSIM plans by country/region.',
      'Payment processing and instant digital delivery of eSIM QR codes and activation details.',
    ],
    category: 'Nuxt',
    gradient: 'from-cyan-400/30 via-sky-500/20 to-blue-600/30',
    accent: '#22d3ee',
    visual: 'esim',
  },
  {
    title: 'Interact Learn',
    subtitle: 'EdTech Platform',
    url: 'https://interact-learn.co/',
    stack: ['Vue 3', 'Tailwind CSS', 'Vuetify', 'Vuex'],
    description:
      'A digital transformation platform developed in partnership with Saudi universities to modernize the educational ecosystem.',
    points: [
      'Multi-role registration for students, teachers, publishers and book authors with online book purchasing.',
      'Comprehensive admin dashboard for full control over users, content and platform operations.',
      'REST API integration, Vuex state management and payment methods.',
    ],
    category: 'Vue',
    gradient: 'from-amber-400/30 via-orange-500/20 to-rose-500/30',
    accent: '#fbbf24',
    visual: 'dashboard',
  },
  {
    title: 'Egrar Academy',
    subtitle: 'E-Learning',
    url: 'https://myacademy.sa/',
    stack: ['Vue 3', 'Tailwind CSS', 'Vuetify', 'Vuex'],
    description:
      'An e-learning platform focused on accounting education with online exams, assignments, and attendance tracking.',
    points: ['Course subscriptions, online exams, assignment submission and student attendance tracking.'],
    category: 'Vue',
    gradient: 'from-lime-400/30 via-emerald-500/20 to-teal-600/30',
    accent: '#a3e635',
    visual: 'learn',
  },
  {
    title: 'Seenpark',
    subtitle: 'Studios & Creative Jobs',
    url: 'https://seenpark.sa/',
    stack: ['Vue 3', 'Tailwind CSS', 'Vuetify', 'Vuex'],
    description:
      'A platform for booking studios, finding photography jobs, and renting equipment, with a user management dashboard.',
    points: ['Integrated payment methods, a WhatsApp chatbot and real-time notifications.'],
    category: 'Vue',
    gradient: 'from-rose-500/30 via-pink-500/20 to-purple-600/30',
    accent: '#f472b6',
    visual: 'site',
  },
  {
    title: 'Grand Community',
    subtitle: 'Community Platform',
    url: 'https://try-gc.com/ar',
    stack: ['Vue.js', 'Nuxt.js'],
    description:
      'A community platform migrated from legacy frontend code to a modern Vue.js and Nuxt.js architecture.',
    points: [
      'Led the migration from legacy code to Vue.js & Nuxt.js — a 35% improvement in site performance.',
      'Defined requirements with stakeholders and aligned solutions with business goals.',
    ],
    category: 'Nuxt',
    gradient: 'from-sky-400/30 via-indigo-500/20 to-violet-600/30',
    accent: '#818cf8',
    visual: 'site',
    metric: { value: '+35%', label: 'Site performance' },
  },
  {
    title: 'Open Stock',
    subtitle: 'Multi-Vendor Marketplace',
    stack: ['Vue.js', 'Vuetify', 'Vuex'],
    description:
      'A scalable marketplace (similar to Noon) allowing multiple vendors to manage storefronts and products via a dedicated dashboard.',
    points: [
      'Full ownership of frontend — the entire user and vendor experience from scratch.',
      'Responsive vendor dashboard for products, orders, inventory and store management.',
      'Performance-focused, modular and well-documented code.',
    ],
    category: 'Vue',
    gradient: 'from-yellow-400/30 via-amber-500/20 to-orange-600/30',
    accent: '#facc15',
    visual: 'shop',
  },
  {
    title: 'Reader AI',
    subtitle: 'AI Reading Experience',
    stack: ['HTML Canvas', 'Vanilla JavaScript', 'AI APIs'],
    description:
      'An interactive digital reading platform simulating the physical book experience, enhanced with AI-powered accessibility features.',
    points: [
      'Custom book reading experience with HTML Canvas and realistic page interaction.',
      'AI text-to-speech with natural voice rendering for accessibility.',
      'Inline, instant line-by-line translation.',
    ],
    category: 'Other',
    gradient: 'from-violet-500/30 via-purple-500/20 to-fuchsia-500/30',
    accent: '#c084fc',
    visual: 'reader',
  },
]

export const standards = [
  {
    title: 'Component Architecture',
    icon: 'layers',
    points: [
      'Single Responsibility — each component handles one concern only.',
      'PascalCase components, camelCase composables, kebab-case files.',
      'Reusable logic with Vue Composables (useX pattern) — no duplication.',
      'Small, focused components; extract when a file exceeds ~150 lines.',
    ],
  },
  {
    title: 'State Management',
    icon: 'database',
    points: [
      'Pinia stores per domain/feature — never one global store for unrelated state.',
      'No direct mutation outside store actions for predictable changes.',
      'API calls live in stores or composables, not in component setup.',
    ],
  },
  {
    title: 'Performance & SEO',
    icon: 'bolt',
    points: [
      'Lazy-load routes and heavy components with defineAsyncComponent & code splitting.',
      'Optimized images — right format, right dimensions, lazy loading.',
      'Meta tags, canonical URLs and structured data on every page.',
    ],
  },
  {
    title: 'API Integration',
    icon: 'plug',
    points: [
      'A dedicated services/composables layer — never call APIs from templates.',
      'Explicit loading, error and empty states for every async operation.',
      'Interceptors for global error handling and auth token injection.',
    ],
  },
]

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  school: 'Faculty of Science, Mansoura University',
  period: '2016 — 2020',
}

export const languages = [
  { name: 'Arabic', level: 'Native', value: 100 },
  { name: 'English', level: 'Very Good · Professional Working Proficiency', value: 82 },
]

export const softSkills = [
  'Effective team player',
  'Strong communicator',
  'Active listener',
  'Adaptable',
  'Detail-oriented',
  'Time management',
  'Open to feedback',
]
