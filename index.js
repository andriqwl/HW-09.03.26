const categoriesList = document.querySelectorAll("#categories .item");

console.log(`У списку ${categoriesList.length} категорії.`);

categoriesList.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemCount = category.querySelectorAll("ul li").length;
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${itemCount}`);
});

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsContainer = document.querySelector("#ingredients");

const ingredientElements = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  return li;
});

ingredientsContainer.append(...ingredientElements);

const images = [
  {
    url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1260&auto=format&fit=crop",
    alt: "Пухнастий сірий кіт дивиться в кадр",
  },
  {
    url: "https://images.unsplash.com/photo-1522818619623-e18985c57170?q=80&w=1260&auto=format&fit=crop",
    alt: "Дві золоті рибки в акваріумі",
  },
  {
    url: "https://images.unsplash.com/photo-1534067161351-7f98f647c5d0?q=80&w=1260&auto=format&fit=crop",
    alt: "Табун диких коней біжить по полю",
  },
];

const galleryContainer = document.querySelector("#gallery");

const galleryMarkup = images
  .map(
    ({ url, alt }) =>
      `<li><img src="${url}" alt="${alt}" width="300" height="200" style="object-fit: cover;"></li>`,
  )
  .join("");

galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);

let counterValue = 0;

const valueDisplay = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const updateDisplay = () => {
  valueDisplay.textContent = counterValue;
};

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  updateDisplay();
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  updateDisplay();
});
