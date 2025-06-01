const offScreenMenu = document.querySelector('.off-screen-menu');
const menuButton = document.querySelector('[onclick="showSidebar()"]');
const searchInput = document.getElementById('search');
const clear = document.getElementById('clear');
const overlay = document.querySelector('.overlay');
let availableKeywords = [
  'Nori',
  'Miso paste',
  'Mirin',
  'Soy sauce',
  'Wasabi',
  'Dashi',
  'Shichimi togarashi',
  'Achiote paste',
  'Epazote',
  'Ancho chile',
  'Chipotle in adobo',
  'Queso fresco',
  'Masa harina',
  'Tomatillos',
  'Garam masal',
  'Ghee',
  'Turmeric',
  'Cumin seeds',
  'Mustard seeds',
  'Curry leaves',
  'Asafoetida',
  'Sichuan peppercorns',
  'Shaoxing wine',
  'Oyster sauce',
  'Fermented black beans',
  'Hoisin sauce',
  'Five-spice powder',
  'Wood ear mushrooms',
  'Gochujang',
  'Gochugaru',
  'Doenjang',
  'Sesame oil',
  'Napa cabbage',
  'Dangmyeon',
  'Herbes de Provence',
  'Dijon mustard',
  'Cornichons',
  'Tarragon',
  'Shallots',
  'Duck fat',
  'Lemongrass',
  'Kaffir lime leaves',
  'Galangal',
  'Thai basil',
  'Fish sauce',
  'Tamarind paste',
  'Palm sugar',
  'Ras el hanout',
  'Preserved lemon',
  'Harissa',
  'Dried apricots',
  'Couscous',
  'Saffron',
  'Cumin',
  'Rice paper',
  'Thai bird chili',
  'Tamarind concentrate',
  'Pickled daikon and carrot',
  'Bun (rice vermicelli)',
  'Saffron',
  'Smoked paprika',
  'Chorizo',
  'Manchego cheese',
  'Sherry vinegar',
  'Marcona almonds'
];
const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

function showSidebar(event){
  event.preventDefault();
  offScreenMenu.classList.add('active');
  overlay.classList.add('active');
  document.addEventListener('click', outsideClick);
}
function hideSidebar(event){
  event.preventDefault();
  offScreenMenu.classList.remove('active');
  overlay.classList.remove('active');
  document.removeEventListener('click', outsideClick);
}
function outsideClick(event){
  if(!offScreenMenu.contains(event.target) && !menuButton.contains(event.target)){
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
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector('.footer-content');
  footer.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

inputBox.onkeyup = function(){
  let result = [];
  let input = inputBox.value;
  if(input.length){
    result = availableKeywords.filter((keyword)=>{
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }
  display(result);

  if(!result.length){
    resultsBox.innerHTML = '';
  }
}
function display(result){
  const content = result.map((list)=>{
    return "<li onclick=selectInput(this)>" + list + "</li>";
  });
  resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}
function selectInput(list){
  inputBox.value = list.innerHTML;
  resultsBox.innerHTML = '';
}
