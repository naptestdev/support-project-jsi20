const addToCart = (productId) => {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const existingItem = cart.find(
    (item) => String(item.id) === String(productId)
  );

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      ...pro.find((product) => String(product.id) === String(productId)),
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

const removeFromCart = (productId) => {
  let cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  let existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    if (existingItem.quantity === 1) {
      cart = cart.filter((item) => item.id !== existingItem.id);
    } else {
      existingItem.quantity--;
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};
