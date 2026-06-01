const navButtons = document.querySelectorAll('.nav-btn');
const hiddenSections = document.querySelectorAll('.hidden-section');

function hideAllSections() {
  hiddenSections.forEach((section) => {
    section.classList.remove('visible');
    section.setAttribute('aria-hidden', 'true');
  });
}

function showSection(id) {
  const section = document.getElementById(id);
  if (!section) return;

  if (!section.classList.contains('visible')) {
    section.classList.add('visible');
    section.setAttribute('aria-hidden', 'false');
  }

  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    hideAllSections();
    showSection(button.dataset.target);
  });
});

window.addEventListener('DOMContentLoaded', () => {
  hideAllSections();
});
