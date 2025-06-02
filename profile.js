const offScreenMenu = document.querySelector('.off-screen-menu');
const menuButton = document.querySelector('[onclick="showSidebar()"]');
const searchInput = document.getElementById('search');
const clear = document.getElementById('clear');
const overlay = document.querySelector('.overlay');
const recipeBtn = document.querySelector('[onclick="showRecipe]');
const createBtn = document.querySelector('[onclick="showCreate]');

function showSidebar(event) {
  event.preventDefault();
  offScreenMenu.classList.add('active');
  overlay.classList.add('active');
  document.addEventListener('click', outsideClick);
}
function hideSidebar(event) {
  event.preventDefault();
  offScreenMenu.classList.remove('active');
  overlay.classList.remove('active');
  document.removeEventListener('click', outsideClick);
}
function outsideClick(event) {
  if (!offScreenMenu.contains(event.target) && !menuButton.contains(event.target)) {
    hideSidebar();
  }
}
overlay.addEventListener('click', hideSidebar);

searchInput.addEventListener('input', () => {
  clear.style.display = searchInput.value ? 'block' : 'none';
});
clear.addEventListener('click', () => {
  searchInput.value = '';
  clear.style.display = 'none';
  searchInput.focus();
});
function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });

  document.querySelectorAll('.profile-tabs button').forEach(button => {
    button.classList.remove('active');
  });

  document.getElementById(tabId).classList.add('active');

  const tabButtons = document.querySelectorAll('.profile-tabs button');
  tabButtons.forEach(btn => {
    if (btn.getAttribute('onclick')?.includes(tabId)) {
      btn.classList.add('active');
    }
  });
}
function showCreate() {
  window.location.href = 'create.html';
}
function showRecipe() {
  window.location.href = 'recipe.html';
}
function showCerdo() {
  window.location.href = 'cerdo.html';
}
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector('.footer-content');
  footer.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
