const SHORTCUTS = [
  {
    label: 'GitHub',
    url: 'https://github.com/TantaoFaz',
    color: '#e4e4e4',
    icon: `<svg viewBox="0 0 24 24" stroke="#e4e4e4" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>`
  },
  {
    label: 'YouTube',
    url: 'https://www.youtube.com',
    color: '#ff6b6b',
    icon: `<svg viewBox="0 0 24 24" stroke="#ff6b6b" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#ff6b6b" stroke="none"/>
    </svg>`
  },
  {
    label: 'Reddit',
    url: 'https://www.reddit.com',
    color: '#7eb8ff',
    icon: `<svg viewBox="0 0 24 24" stroke="#7eb8ff" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M14.5 9a3 3 0 0 1 5 0"/>
      <path d="M4.5 9a3 3 0 0 1 5 0"/>
      <path d="M15 13a6 6 0 0 1-6 0"/>
      <circle cx="9" cy="11" r="1" fill="#7eb8ff" stroke="none"/>
      <circle cx="15" cy="11" r="1" fill="#7eb8ff" stroke="none"/>
    </svg>`
  },
  {
    label: 'Wikipedia',
    url: 'https://en.wikipedia.org',
    color: '#4dffa0',
    icon: `<svg viewBox="0 0 24 24" stroke="#4dffa0" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>`
  }
];

function renderShortcuts() {
  const grid = document.getElementById('shortcuts-grid');
  grid.innerHTML = SHORTCUTS.map(s => `
    <a class="shortcut" href="${s.url}">
      <div class="shortcut-icon">${s.icon}</div>
      <span class="shortcut-label">${s.label}</span>
    </a>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderShortcuts);
