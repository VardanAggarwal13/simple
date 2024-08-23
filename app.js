const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "https://tse3.mm.bing.net/th?id=OIP.wMwcVXOKxx0B8C3c9bOwiAHaE8&pid=Api&P=0&h=220",
      },
      {
        code: "darkblue",
        img: "https://tse3.mm.bing.net/th?id=OIP.wMwcVXOKxx0B8C3c9bOwiAHaE8&pid=Api&P=0&h=220",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "https://tse3.mm.bing.net/th?id=OIP.wMwcVXOKxx0B8C3c9bOwiAHaE8&pid=Api&P=0&h=220",
      },
      {
        code: "green",
        img: "https://tse3.mm.bing.net/th?id=OIP.wMwcVXOKxx0B8C3c9bOwiAHaE8&pid=Api&P=0&h=220",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "https://tse3.mm.bing.net/th?id=OIP.wMwcVXOKxx0B8C3c9bOwiAHaE8&pid=Api&P=0&h=220",
      },
      {
        code: "green",
        img: "https://tse3.mm.bing.net/th?id=OIP.wMwcVXOKxx0B8C3c9bOwiAHaE8&pid=Api&P=0&h=220",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "https://tse3.mm.bing.net/th?id=OIP.wMwcVXOKxx0B8C3c9bOwiAHaE8&pid=Api&P=0&h=220",
      },
      {
        code: "lightgray",
        img: "https://tse3.mm.bing.net/th?id=OIP.wMwcVXOKxx0B8C3c9bOwiAHaE8&pid=Api&P=0&h=220",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "https://tse3.mm.bing.net/th?id=OIP.wMwcVXOKxx0B8C3c9bOwiAHaE8&pid=Api&P=0&h=220",
      },
      {
        code: "black",
        img: "https://tse3.mm.bing.net/th?id=OIP.wMwcVXOKxx0B8C3c9bOwiAHaE8&pid=Api&P=0&h=220",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  // Create an object with the chosen product details
  const cartItem = {
    title: choosenProduct.title,
    price: choosenProduct.price,
    img: choosenProduct.colors[0].img,  // default color image
    size: document.querySelector(".size.selected")?.textContent || "", // selected size
  };

  // Retrieve current cart items from localStorage (if any)
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Add the new item to the cart
  cart.push(cartItem);

  // Store the updated cart back to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Redirect to the cart page
  window.location.href = "cart.html";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

// Highlight the selected size
currentProductSizes.forEach((size) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.classList.remove("selected");
    });
    size.classList.add("selected");
  });
});


close.addEventListener("click", () => {
  payment.style.display = "none";
});
const name = document.getElementById('name');

document.querySelector('.productTitle').addEventListener('click', (e) => {

  let value = e.target.value;
  const item = document.createElement('')

})