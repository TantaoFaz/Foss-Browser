function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.bnav').forEach(b => b.classList.remove('active'));
  document.querySelector(`.bnav[data-screen="${id}"]`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  showScreen('screen-home');
});
