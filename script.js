const offScreenMenu = document.querySelector('.off-screen-menu');
const menuButton = document.querySelector('[onclick="showSidebar()"');

function showSidebar(){
  offScreenMenu.classList.add('active');
  document.addEventListener('click', outsideClick);
}
function hideSidebar(){
  offScreenMenu.classList.remove('active');
  document.removeEventListener('click', outsideClick);
}
function outsideClick(event){
  if(!offScreenMenu.contains(event.target) && !menuButton.contains(event.target)){
    hideSidebar();
  }
}