`use strict`;

// Storing buttons

const featuredBtn = document.getElementById("featured");
const latestBtn = document.getElementById("latest");
const topBtn = document.getElementById("top");

const productImgs = document.querySelectorAll(".product-img");
const productNames = document.querySelectorAll(".product-name");
const productPrices = document.querySelectorAll(".product-price-food");
// Working with JSON DATA

const latestObjs = [
  {
    id: 0,
    img: "./../images/img-1.jpg",
    name: "Papaya Juice",
    price: "20RS",
  },
  {
    id: 1,
    img: "./../images/img-2.jpg",
    name: "Mango Juice",
    price: "30RS",
  },
  {
    id: 3,
    img: "./../images/img-3.jpg",
    name: "Orange Juice",
    price: "40RS",
  },
  {
    id: 4,
    img: "./../images/img-4.jpg",
    name: "Strawberry Juice",
    price: "50RS",
  },
];

const featuredObjs = [
  {
    id: 0,
    img: "./../images/americano.jpg",
    name: "Ice Tea",
    price: "100RS",
  },
  {
    id: 1,
    img: "./../images/mocha.jpg",
    name: "American Coffee",
    price: "200RS",
  },
  {
    id: 3,
    img: "./../images/cappucino.jpg",
    name: "American Mocha",
    price: "300RS",
  },
  {
    id: 4,
    img: "./../images/beans.jpg",
    name: "American Espressoo",
    price: "400RS",
  },
];

const topObjs = [
  {
    id: 0,
    img: "./../images/food1.jpg",
    name: "Cutlette",
    price: "500RS",
  },
  {
    id: 1,
    img: "./../images/food2.jpg",
    name: "Bread",
    price: "600RS",
  },
  {
    id: 3,
    img: "./../images/food3.jpg",
    name: "Fruit",
    price: "700RS",
  },
  {
    id: 4,
    img: "./../images/food4.jpg",
    name: "Pizza",
    price: "800RS",
  },
];

// Event listener to the latest objects

latestBtn.addEventListener("click", (e) => {
  topBtn.classList.remove("active");
  featuredBtn.classList.remove("active");
  latestBtn.classList.add("active");
  for (let i = 0; i < productImgs.length; i++) {
    productImgs[i].src = `${latestObjs[i]["img"]}`;
    productNames[i].textContent = `${latestObjs[i]["name"]}`;
    productPrices[i].textContent = `${latestObjs[i]["price"]}`;
  }
});

// Event Listener to the featured objects

featuredBtn.addEventListener("click", (e) => {
  topBtn.classList.remove("active");
  latestBtn.classList.remove("active");
  featuredBtn.classList.add("active");
  for (let i = 0; i < productImgs.length; i++) {
    productImgs[i].src = `${featuredObjs[i]["img"]}`;
    productNames[i].textContent = `${featuredObjs[i]["name"]}`;
    productPrices[i].textContent = `${featuredObjs[i]["price"]}`;
  }
});

// Event listener to the top food section

topBtn.addEventListener("click", (e) => {
  featuredBtn.classList.remove("active");
  latestBtn.classList.remove("active");
  topBtn.classList.add("active");
  for (let i = 0; i < productImgs.length; i++) {
    productImgs[i].src = `${topObjs[i]["img"]}`;
    productNames[i].textContent = `${topObjs[i]["name"]}`;
    productPrices[i].textContent = `${topObjs[i]["price"]}`;
  }
});
