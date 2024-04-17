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

// Event listener to the latest button

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

// Event Listener to the featured button

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

// Event listener to the top button

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

// *******************************
// *******************************

// SHOW MODAL

// Adding feature to show modal whenever image got clicked

const gridImgs = document.querySelectorAll(".img");

// storing imgs in a JSON DATA

const gridImgObject = [];
gridImgs.forEach((img, index) => {
  gridImgObject.push({
    id: index,
    Img: `${img.src}`,
  });
});

// Adding the event listener to the gridImgs

gridImgs.forEach((img, i) => {
  img.addEventListener("click", (e) => {
    // creating a image element
    const img = document.createElement("img");

    // getting the src for the image element from the JSON Object.
    img.src = `${gridImgObject[i]["Img"]}`;

    // Acessing the modal div and appending img to it.
    document.getElementById(`modal-${i}`).appendChild(img);

    // removing hide class from the modal element
    document.getElementById(`modal-${i}`).classList.remove("modal-hide");

    // Applying event listener to the close button.

    // Getting acess to the close button.
    const closeBtn = document.getElementById(`close-btn-${i}`);

    // Adding event listener to the close button

    closeBtn.addEventListener("click", (e) => {
      // finding the parent element of the child element.
      const parentEl = closeBtn.parentElement;
      // removing child element from the parent
      parentEl.removeChild(img);

      // Adding the hidden class back to the image
      parentEl.classList.add("modal-hide");
    });
  });
});
