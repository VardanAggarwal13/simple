const cartItemsContainer = document.getElementById("cartItems");
// Retrieve cart items from localStorage
const cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length > 0) {
  cart.forEach((item) => {
    // Create a cart item element
    const cartItem = document.createElement("div");
    cartItem.classList.add("cartItem");

    // Set up the cart item content
    cartItem.innerHTML = `
      <img src="${item.img}" alt="${item.title}" class="cartItemImg">
      <div class="cartItemDetails">
        <h3>${item.title}</h3>
        <p>Price: $${item.price}</p>
        <p>Size: ${item.size}</p>
      </div>
    `;

    // Append the cart item to the container
    cartItemsContainer.appendChild(cartItem);
  });
} else {
  cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
}

document.getElementById("checkoutButton").addEventListener("click", () => {
  // Handle checkout process (e.g., redirect to a payment page or show a confirmation)
  alert("Proceeding to checkout...");
});
