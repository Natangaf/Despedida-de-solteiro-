// Countdown até a despedida de solteiro do Gustavo — 03/10/2026 18:00
const EVENT_DATE = new Date('2026-10-03T18:00:00');

function pad(n) {
  return String(n).padStart(2, '0');
}

function updateCountdown() {
  const now = new Date();
  const diff = EVENT_DATE - now;

  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minEl = document.getElementById('cd-min');
  const secEl = document.getElementById('cd-sec');

  if (!daysEl) return;

  if (diff <= 0) {
    daysEl.textContent = '00';
    hoursEl.textContent = '00';
    minEl.textContent = '00';
    secEl.textContent = '00';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysEl.textContent = pad(days);
  hoursEl.textContent = pad(hours);
  minEl.textContent = pad(minutes);
  secEl.textContent = pad(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Menu mobile
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');

if (hamburger && navMobile) {
  hamburger.addEventListener('click', () => {
    const isOpen = navMobile.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  navMobile.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}
