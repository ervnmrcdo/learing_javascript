export const cart = [];

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
};
