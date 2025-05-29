export const cart = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 1,
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    quantity: 3,
  },
];

export const addToCart = (product) => {
  let matchingItem;

  cart.forEach((item) => {
    if (product.productId === item.productId) {
      matchingItem = item;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({ productId: product.productId, quantity: 1 });
  }

  console.log(cart);
};
