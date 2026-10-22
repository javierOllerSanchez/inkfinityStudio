// English copy, served under /en/. Same shape as es.ts; keep both in sync.
// Values in [BRACKETS] are pending placeholders: see docs/PENDIENTES.md.

export const site = {
  name: 'Inkfinity Studio',
  description:
    'Inkfinity Studio: small, useful Android and iOS apps with a touch of humour, made by a group of friends from university.',
  email: '[CORREO DE CONTACTO]',
  playDeveloperUrl: '[ENLACE A LA PÁGINA DE DESARROLLADOR EN GOOGLE PLAY]',
  appStoreDeveloperUrl: '[ENLACE A LA PÁGINA DE DESARROLLADOR EN APP STORE]',
  city: '[CITY]',
  lang: 'en',
  ogLocale: 'en_US',
  tagline: 'Apps fresh out of the inkwell',
  skip: 'Skip to content',
};

export const paths = {
  home: '/en/',
  privacy: '/en/privacy/',
  apps: '/en/#apps',
  contact: '/en/#contacto',
};

export const nav = {
  home: 'Inkfinity Studio, home',
  label: 'Main',
  menu: 'Menu',
  switchLang: { label: 'ES', name: 'Español', hreflang: 'es' },
  action: 'Apps',
  links: [
    { href: '/en/#historia', label: 'Story' },
    { href: '/en/#crew', label: 'Crew' },
    { href: '/en/#contacto', label: 'Contact' },
  ],
};

export const hero = {
  title: 'Apps fresh out of the inkwell.',
  lead: 'Small, useful and with a touch of humour. Made by a group of friends from university, for fun and with care.',
  cta: 'See our apps',
  secondary: 'Meet the crew',
  note: 'fresh out!',
  mascotAlt: 'Borrón, the Inkfinity mascot',
};

export const howWeWork = {
  title: 'Three rules and an octopus',
  rules: [
    { title: 'Small.', text: 'Apps that do one thing and do it well. No filler.' },
    { title: 'Useful.', text: "If we wouldn't use it ourselves, it stays in the inkwell." },
    { title: 'Witty.', text: 'A touch of humour on every screen. Without overdoing it.' },
  ],
};

export const apps = {
  title: 'Fresh out of the inkwell',
  lead: 'Few, and well made. For Android and iOS.',
  stores: { play: 'All on Google Play', appStore: 'All on the App Store' },
  status: { disponible: 'Available', pronto: 'Coming soon', tintero: 'In the inkwell' },
  // Official English badges (Google Play badges page and Apple Marketing Tools), unmodified
  badges: {
    play: { src: '/assets/badges/google-play-en.png', alt: 'Get it on Google Play' },
    appStore: { src: '/assets/badges/app-store-en.svg', alt: 'Download on the App Store' },
  },
  shots: 'Screenshots of',
  shotPlaceholder: '[SCREENSHOT]',
  next: 'The next one is still in the inkwell…',
};

export const story = {
  title: 'How the inkwell started',
  text: '[OUR STORY IN 2 TO 4 SENTENCES: how you met at university, when you started making apps and why]',
  milestonesLabel: 'Milestones',
  milestones: [
    { year: '[YEAR]', text: '[MILESTONE, e.g. "We meet in first year"]' },
    { year: '[YEAR]', text: '[MILESTONE, e.g. "First app published"]' },
    { year: '[YEAR]', text: '[MILESTONE]' },
  ],
};

export const crew = {
  title: 'One octopus, many tentacles',
  lead: 'Each of us handles a different arm of the studio.',
  members: [
    {
      name: 'Javier Oller Sánchez',
      role: 'Lead developer',
      avatar: '/assets/crew/javier-oller.svg',
      links: [
        { network: 'github', href: 'https://github.com/javierOllerSanchez' },
        { network: 'linkedin', href: 'https://www.linkedin.com/in/javier-oller-s%C3%A1nchez-180825391/' },
      ],
    },
    { name: '[NAME]', role: '[ROLE]', avatar: '' },
    { name: '[NAME]', role: '[ROLE]', avatar: '' },
    { name: '[NAME]', role: '[ROLE]', avatar: '' },
  ] as { name: string; role: string; avatar: string; links?: { network: 'github' | 'linkedin'; href: string }[] }[],
  avatarPlaceholder: '[PHOTO OR ILLUSTRATION]',
  portraitAlt: 'Portrait of',
  networks: { github: 'GitHub', linkedin: 'LinkedIn' },
  networkLabel: (network: string, name: string) => `${name} on ${network}`,
};

export const contact = {
  title: 'Got an idea or found a bug?',
  text: "Drop it in the inkwell. We'll reply, even if it's with a tentacle.",
  kindLabel: "It's",
  kinds: [
    { value: 'Idea for Inkfinity', label: 'An idea', mood: 'idle' },
    { value: 'Bug in an Inkfinity app', label: 'A bug', mood: 'ko' },
  ],
  fieldLabel: 'Tell us',
  placeholder: 'An app that… or "on this screen, this happens…"',
  submit: 'Drop it in the inkwell',
  sent: 'Nice one! Your email app is open with everything written. Just hit send.',
  note: 'Your email app opens: nothing is stored here.',
  orWrite: 'Or write to us at',
  moods: { idle: "I'm listening…", ko: 'Ouch! Tell me more', think: 'Hmm…', yay: 'Nice one!' },
};

export const footer = {
  slogan: 'Ideas that never run dry.',
  label: 'Footer',
  links: { play: 'Google Play', appStore: 'App Store', privacy: 'Privacy', contact: 'Contact' },
  madeIn: 'Made with infinite ink in',
  emailLabel: 'Write to us',
  appsInvite: 'Our apps, on Google Play and the App Store',
  copyright: '© 2026 Inkfinity Studio',
};

export const privacy = {
  title: 'Privacy policy',
  description: 'Privacy policy for the Inkfinity Studio apps.',
  updated: 'Last updated: [UPDATE DATE]',
  body: '[LEGAL TEXT PENDING]',
  contact: 'If you have any questions about your data, write to us at',
};

export const notFound = {
  title: 'The ink has run.',
  text: "This page doesn't exist, or Borrón ate it.",
  cta: 'Back to home',
};
