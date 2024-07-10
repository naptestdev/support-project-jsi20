// if not logged in, redirect to login page
if (!localStorage.getItem("currentUser")) {
  location.href = "./login.html";
}

const displayCart = () => {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  if (cart.length === 0) {
    document.getElementById("cart-container").innerHTML = /* html */ `
      <h4 style="font-size: 40px; text-align: center; padding: 50px 0">Your cart is empty</h4>
    `;
  } else {
    document.getElementById("cart-container").innerHTML = /* html */ `
      <table>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        ${cart
          .map(
            (product) => /*html*/ `
            <tr>
              <td>
                <div class="product-cell">
                  <img src="${product.im}" alt="" />
                  <p>${product.na}</p>
                </div>
              </td>
              <td class="quantity-cell">
                <button onclick="removeFromCart(${product.id});displayCart()">
                  -
                </button>
                <span>${product.quantity}</span>
                <button onclick="addToCart(${product.id});displayCart()">
                  +
                </button>
              </td>
              <td>đ${new Intl.NumberFormat().format(
                Math.round(product.pri * product.quantity * 100) / 100
              )}</td>
            </tr>
          `
          )
          .join("")}
      </table>
      <div class="total">
        <h2>Total: đ${new Intl.NumberFormat().format(
          Math.round(
            cart.reduce((acc, product) => {
              acc += product.pri * product.quantity;
              return acc;
            }, 0) * 100
          ) / 100
        )}</h2>
        <button onclick="localStorage.removeItem('cart'); alert('Purchased successfully');displayCart()">Check out</button>
      </div>
    `;
  }
};

displayCart();
