export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  console.log("hello world");
  cart = [
    {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 1,
    },
    {
      id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
      quantity: 2,
    },
  ];
}

console.log(cart);

const saveToStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(localStorage.getItem("cart"));
};

export const addToCart = (product) => {
  let matchingItem;

  cart.forEach((item) => {
    if (product.id === item.productId) {
      matchingItem = item;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({ id: product.productId, quantity: 1 });
  }
  console.log(cart);
  saveToStorage();
};

export const removeFromCart = (productId) => {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.id !== productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  saveToStorage();
};
