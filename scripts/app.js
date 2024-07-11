for (let item of products) {
  document.getElementById("products").innerHTML += /*html*/ `
  <div class="small-box1">
    <img
      src="${item.image}"
      alt=""
    />
    <div style="display: flex; justify-content: space-between; align-items: center; width: 100%">
      <div>
        <h3>${item.title}</h3>
        <p>${item.price}đ</p>
      </div>
      <button onclick="handleAddToCartClicked(${item.id})"><i class="fa-solid fa-cart-shopping"></i></button>
    </div>
  </div>
  `;
}

const handleAddToCartClicked = (productId) => {
  if (!localStorage.getItem("currentUser")) {
    alert("Please log in");
  } else {
    addToCart(productId);
    alert("Added to cart successfully");
  }
};
