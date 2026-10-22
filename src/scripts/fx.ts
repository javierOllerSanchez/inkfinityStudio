// Efectos de la landing. Sin este script la página se ve completa y estática.

const motion = matchMedia('(prefers-reduced-motion: no-preference)').matches;
const pointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

// Apariciones al hacer scroll
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    }
  },
  { rootMargin: '0px 0px -10% 0px' },
);
document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

if (motion && pointer) {
  // Posición del puntero relativa al centro del elemento, de -0.5 a 0.5
  const offset = (el: Element, e: PointerEvent) => {
    const r = el.getBoundingClientRect();
    return [(e.clientX - r.left) / r.width - 0.5, (e.clientY - r.top) / r.height - 0.5];
  };

  // Tarjetas en 3D
  document.querySelectorAll<HTMLElement>('.tilt').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const [x, y] = offset(el, e);
      el.style.setProperty('--ry', `${x * 14}deg`);
      el.style.setProperty('--rx', `${-y * 14}deg`);
    });
    el.addEventListener('pointerleave', () => {
      el.style.removeProperty('--rx');
      el.style.removeProperty('--ry');
    });
  });

  // Botones magnéticos
  document.querySelectorAll<HTMLElement>('.btn').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const [x, y] = offset(el, e);
      el.style.translate = `${x * el.offsetWidth * 0.3}px ${y * el.offsetHeight * 0.4}px`;
    });
    el.addEventListener('pointerleave', () => (el.style.translate = ''));
  });

  // Borrón del hero por capas: la escena gira hacia el puntero
  const hero = document.querySelector<HTMLElement>('.hero');
  const art = hero?.querySelector<HTMLElement>('.art');
  if (hero && art) {
    hero.addEventListener('pointermove', (e) => {
      const [x, y] = offset(hero, e);
      art.style.setProperty('--ry', `${x * 30}deg`);
      art.style.setProperty('--rx', `${-y * 22}deg`);
    });
    hero.addEventListener('pointerleave', () => {
      art.style.removeProperty('--rx');
      art.style.removeProperty('--ry');
    });
  }
}
