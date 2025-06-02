const offScreenMenu = document.querySelector('.off-screen-menu');
const menuButton = document.querySelector('[onclick="showSidebar()"]');
const searchInput = document.getElementById('search');
const clear = document.getElementById('clear');
const overlay = document.querySelector('.overlay');
const componentBtn = document.querySelector('[onclick="showByComponent()"]');
const completeBtn = document.querySelector('[onclick="showFullList()"]');
const component = document.querySelector('.component');
const complete = document.querySelector('.complete');

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
function showByComponent(event) {
  event.preventDefault();
  component.classList.add('active');
  complete.classList.remove('active');
}
function showFullList(event) {
  event.preventDefault();
  complete.classList.add('active');
  component.classList.remove('active');
}
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector('.footer-content');
  footer.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

