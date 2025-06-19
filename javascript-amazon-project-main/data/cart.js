export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [
    {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 1,
      deliveryOptionId: "1",
    },
    {
      id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
      quantity: 2,
      deliveryOptionId: "2",
    },
  ];
}

const saveToStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(localStorage.getItem("cart"));
};

export const addToCart = (productId) => {
  let matchingItem;
  cart.forEach((item) => {
    if (productId === item.id) {
      matchingItem = item;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1, deliveryOptionId: "1" });
  }
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

export const updateDeliveryOption = (productId, deliveryOptionId) => {
  let matchinItem;

  cart.forEach((item) => {
    if (productId === item.id) {
      matchinItem = item;
    }
  });

  matchinItem.deliveryOptionId = deliveryOptionId;
  saveToStorage();
};
