const categories = {};

function addIngredient() {
  const categoryInput = document.getElementById("ingredient-category");
  const ingredientInput = document.getElementById("ingredient-input");
  const category = categoryInput.value.trim();
  const ingredient = ingredientInput.value.trim();

  if (!category || !ingredient) {
    alert("Please provide both a category and an ingredient.");
    return;
  }

  if (!categories[category]) {
    categories[category] = [];
  }

  categories[category].push(ingredient);
  renderIngredients();

  // Reset inputs
  ingredientInput.value = "";
  ingredientInput.focus();
}

function renderIngredients() {
  const container = document.getElementById("categorized-ingredients");
  container.innerHTML = "";

  for (const [category, ingredients] of Object.entries(categories)) {
    const section = document.createElement("div");
    section.classList.add("ingredient-category");

    const title = document.createElement("h4");
    title.textContent = category;
    section.appendChild(title);

    const list = document.createElement("ul");
    ingredients.forEach((ingredient, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${ingredient}</span>
        <button onclick="editIngredient('${category}', ${index})">Edit</button>
        <button onclick="deleteIngredient('${category}', ${index})">Delete</button>
      `;
      list.appendChild(li);
    });

    section.appendChild(list);
    container.appendChild(section);
  }
}

function deleteIngredient(category, index) {
  categories[category].splice(index, 1);
  if (categories[category].length === 0) {
    delete categories[category];
  }
  renderIngredients();
}

function editIngredient(category, index) {
  const current = categories[category][index];
  const updated = prompt("Edit ingredient:", current);
  if (updated && updated.trim() !== "") {
    categories[category][index] = updated.trim();
    renderIngredients();
  }
}


  function addDirection() {
    const input = document.getElementById("direction-input");
    const direction = input.value.trim();

    if (direction === "") {
      alert("Please enter a direction.");
      return;
    }

    const list = document.getElementById("directions-list");
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${direction}</span>
      <button onclick="editItem(this)">Edit</button>
      <button onclick="deleteItem(this)">Delete</button>
    `;
    list.appendChild(li);

    input.value = "";
    input.focus();
  }

  function deleteItem(button) {
    const li = button.parentElement;
    li.remove();
  }

  function editItem(button) {
    const li = button.parentElement;
    const span = li.querySelector("span");
    const currentText = span.textContent;
    const newText = prompt("Edit text:", currentText);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  }

  const backBtn = document.querySelector('[onclick="backToProfile()"]');
  function backToProfile(){
    window.location.href = 'profile.html';
  }

  function previewPhoto(event) {
  const preview = document.getElementById("photo-preview");
  preview.innerHTML = ""; // Clear previous image

  const file = event.target.files[0];
  if (file) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.style.maxWidth = "100%";
    img.style.maxHeight = "300px";
    img.style.borderRadius = "10px";
    img.style.marginTop = "10px";
    preview.appendChild(img);
  }
}
document.addEventListener('DOMContentLoaded', function () {
      const cultureSelect = document.getElementById('recipe-culture');
      const choices = new Choices(cultureSelect, {
        removeItemButton: true,
        placeholderValue: 'Select one or more cultures',
        searchPlaceholderValue: 'Search cultures'
      });
      
      const tagInput = new Choices('#recipe-tags', {
        removeItemButton: true,
        placeholderValue: 'Add tags (e.g., meat, vegan, spicy)',
        duplicateItemsAllowed: false,
        addItems: true,
        paste: true,
        duplicateItems: false,
        addItemFilter: value => !!value.trim(),
      });
});