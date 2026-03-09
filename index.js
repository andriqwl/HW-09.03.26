const categories = document.querySelectorAll("#categories .item");
console.log(`У списку ${categories.length} категорії.`);

categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const count = category.querySelectorAll("ul li").length;
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${count}`);
});

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
const ingredientsList = document.querySelector("#ingredients");

const ingredientElements = ingredients.map((name) => {
  const li = document.createElement("li");
  li.textContent = name;
  li.classList.add("item");
  return li;
});

ingredientsList.append(...ingredientElements);

const images = [
  {
    url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200",
    alt: "Пухнастий сірий кіт",
  },
  {
    url: "https://images.unsplash.com/photo-1522818619623-e18985c57170?auto=format&fit=crop&w=1200",
    alt: "Золоті рибки в акваріумі",
  },
  {
    url: "https://images.unsplash.com/photo-1534067161351-7f98f647c5d0?auto=format&fit=crop&w=1200",
    alt: "Табун коней у полі",
  },
];

const gallery = document.querySelector("#gallery");
gallery.classList.add("gallery-list");

const markup = images
  .map(
    ({ url, alt }) =>
      `<li class="gallery-item"><img src="${url}" alt="${alt}" width="300"></li>`,
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);

let counterValue = 0;
const valueRef = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const updateInterface = () => {
  valueRef.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  updateInterface();
};

const decrement = () => {
  counterValue -= 1;
  updateInterface();
};

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
