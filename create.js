function addIngredient() {
    const input = document.getElementById("ingredient-input");
    const ingredient = input.value.trim();

    if (ingredient === "") {
      alert("Please enter an ingredient.");
      return;
    }

    const list = document.getElementById("ingredients-list");
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${ingredient}</span>
      <button onclick="editItem(this)">Edit</button>
      <button onclick="deleteItem(this)">Delete</button>
    `;
    list.appendChild(li);

    input.value = "";
    input.focus();
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
});