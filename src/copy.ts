// Todo el texto del sitio en un solo sitio, listo para traducir más adelante.
// Los valores entre [CORCHETES] son marcadores pendientes: ver docs/PENDIENTES.md.

export const site = {
  name: 'Inkfinity Studio',
  description:
    'Inkfinity Studio: apps para Android e iOS pequeñas, útiles y con un punto de humor, hechas por un grupo de amigos de la carrera.',
  email: '[CORREO DE CONTACTO]',
  playDeveloperUrl: '[ENLACE A LA PÁGINA DE DESARROLLADOR EN GOOGLE PLAY]',
  appStoreDeveloperUrl: '[ENLACE A LA PÁGINA DE DESARROLLADOR EN APP STORE]',
  city: '[CIUDAD]',
};

export const nav = {
  home: 'Inkfinity Studio, inicio',
  label: 'Principal',
  menu: 'Menú',
  // La baldosa coral de la cabecera; no se repite en los enlaces
  action: 'Apps',
  links: [
    { href: '/#historia', label: 'Historia' },
    { href: '/#crew', label: 'Crew' },
    { href: '/#contacto', label: 'Contacto' },
  ],
};

export const hero = {
  title: 'Apps recién salidas del tintero.',
  lead: 'Pequeñas, útiles y con un punto de humor. Las hacemos un grupo de amigos de la carrera, por gusto y con cuidado.',
  cta: 'Ver nuestras apps',
  secondary: 'Conoce a la crew',
  note: '¡recién hecha!',
};

export const howWeWork = {
  title: 'Tres reglas y un pulpo',
  rules: [
    { title: 'Pequeñas.', text: 'Apps que hacen una cosa y la hacen bien. Sin relleno.' },
    { title: 'Útiles.', text: 'Si no la usaríamos nosotros, no sale del tintero.' },
    { title: 'Con gracia.', text: 'Un punto de humor en cada pantalla. Sin pasarnos.' },
  ],
};

export const apps = {
  title: 'Lo que ha salido del tintero',
  lead: 'Pocas y bien hechas. Para Android e iOS.',
  stores: { play: 'Todas en Google Play', appStore: 'Todas en el App Store' },
  status: { disponible: 'Disponible', pronto: 'Muy pronto', tintero: 'En el tintero' },
  badges: { play: 'Disponible en Google Play', appStore: 'Consíguelo en el App Store' },
  shots: 'Capturas de',
  shotPlaceholder: '[CAPTURA]',
  next: 'La próxima está en el tintero…',
};

export const story = {
  title: 'Cómo empezó el tintero',
  text: '[NUESTRA HISTORIA EN 2 A 4 FRASES: cómo os conocisteis en la carrera, cuándo empezasteis a hacer apps y por qué]',
  milestonesLabel: 'Hitos',
  // Entre 2 y 4 hitos, del más antiguo al más reciente
  milestones: [
    { year: '[AÑO]', text: '[HITO, p. ej. «Nos conocemos en primero de carrera»]' },
    { year: '[AÑO]', text: '[HITO, p. ej. «Primera app publicada»]' },
    { year: '[AÑO]', text: '[HITO]' },
  ],
};

export const crew = {
  title: 'Un pulpo, varios tentáculos',
  lead: 'Cada uno lleva un brazo distinto del estudio.',
  // Número de miembros: [N]. La rejilla aguanta de 2 a 8.
  members: [
    { name: '[NOMBRE]', role: '[ROL, p. ej. «Tentáculo de diseño»]', avatar: '', link: { label: 'GitHub', href: '[ENLACE A GITHUB]' } },
    { name: '[NOMBRE]', role: '[ROL]', avatar: '', link: { label: 'LinkedIn', href: '[ENLACE A LINKEDIN]' } },
    { name: '[NOMBRE]', role: '[ROL]', avatar: '' },
    { name: '[NOMBRE]', role: '[ROL]', avatar: '' },
  ] as { name: string; role: string; avatar: string; link?: { label: string; href: string } }[],
  avatarPlaceholder: '[FOTO O ILUSTRACIÓN]',
};

export const contact = {
  title: '¿Tienes una idea o has encontrado un bug?',
  text: 'Suéltala en el tintero. Contestamos aunque sea con un tentáculo.',
  kindLabel: 'Es',
  // value = asunto del correo
  kinds: [
    { value: 'Idea para Inkfinity', label: 'Una idea', mood: 'idle' },
    { value: 'Bug en una app de Inkfinity', label: 'Un bug', mood: 'ko' },
  ],
  fieldLabel: 'Cuéntanoslo',
  placeholder: 'Una app que… o «en tal pantalla pasa que…»',
  submit: 'Soltar en el tintero',
  sent: '¡Toma ya! Se ha abierto tu correo con todo escrito. Solo te queda enviarlo.',
  note: 'Se abre tu app de correo: aquí no se guarda nada.',
  orWrite: 'O escríbenos a',
  // Nota a mano junto a Borrón según lo que pasa en la barra
  moods: { idle: 'Te escucho…', ko: '¡Ay! Cuenta, cuenta', think: 'Mmm…', yay: '¡Toma ya!' },
};

export const footer = {
  slogan: 'Ideas que no se acaban.',
  label: 'Pie de página',
  links: { play: 'Google Play', appStore: 'App Store', privacy: 'Privacidad', contact: 'Contacto' },
  madeIn: 'Hecho con tinta infinita en',
  emailLabel: 'Escríbenos',
  appsInvite: 'Nuestras apps, en Google Play y App Store',
  copyright: '© 2026 Inkfinity Studio',
};

export const privacy = {
  title: 'Política de privacidad',
  description: 'Política de privacidad de las apps de Inkfinity Studio.',
  updated: 'Última actualización: [FECHA DE ACTUALIZACIÓN]',
  body: '[TEXTO LEGAL PENDIENTE]',
  contact: 'Si tienes dudas sobre tus datos, escríbenos a',
};

export const notFound = {
  title: 'Se nos ha corrido la tinta.',
  text: 'Esta página no existe o Borrón se la ha comido.',
  cta: 'Volver al inicio',
};
