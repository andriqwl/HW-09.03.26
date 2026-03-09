// Завдання 1
const categoriesItems = document.querySelectorAll("#categories .item");
console.log(`У списку ${categoriesItems.length} категорії.`);

categoriesItems.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const count = item.querySelectorAll("li").length;
  console.log(`Категорія: ${title}\nКількість елементів: ${count}`);
});

// Завдання 2
const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
const ingredientsList = document.querySelector("#ingredients");

const elements = ingredients.map((name) => {
  const li = document.createElement("li");
  li.textContent = name;
  return li;
});
ingredientsList.append(...elements);

// Завдання 3
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector("#gallery");
gallery.classList.add("gallery");

const markup = images
  .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`)
  .join("");
gallery.insertAdjacentHTML("afterbegin", markup);

// Завдання 4
let counterValue = 0;
const valueRef = document.querySelector("#value");
const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');

const update = () => (valueRef.textContent = counterValue);

const increment = () => {
  counterValue += 1;
  update();
};

const decrement = () => {
  counterValue -= 1;
  update();
};

incrBtn.addEventListener("click", increment);
decrBtn.addEventListener("click", decrement);
