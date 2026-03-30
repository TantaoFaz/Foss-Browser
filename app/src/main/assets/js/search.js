const BRAVE = 'https://search.brave.com/search?q=';
let searchSuffix = '';

function doSearch() {
  const q = document.getElementById('mainSearch').value.trim();
  if (!q) return;

  if (/^https?:\/\//i.test(q) || /^[\w-]+\.[a-z]{2,}(\/|$)/i.test(q)) {
    window.location.href = /^https?:\/\//i.test(q) ? q : 'https://' + q;
  } else {
    window.location.href = BRAVE + encodeURIComponent(q) + searchSuffix;
  }
}

function setTag(btn, suffix) {
  document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  searchSuffix = suffix;
}

function focusSearch() {
  const inp = document.getElementById('mainSearch');
  inp.focus();
  inp.select();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('mainSearch').addEventListener('keydown', e => {
    if (e.key === 'Enter') doSearch();
  });
});
