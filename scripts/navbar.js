if (localStorage.getItem("currentUser")) {
  document.querySelector(".icons").innerHTML += /*html*/ `
    <a href="./cart.html">
      <i class="fa-solid fa-cart-shopping"></i>
      <span id="cart-count"></span>
    </a>
    <a href="javascript:;" onclick="logout()">
      <i class="fa-solid fa-right-from-bracket"></i>
    </a>
    <img style="width: 30px; height: 30px; border-radius: 9999px" src="${`https://api.dicebear.com/8.x/initials/svg?seed=${
      JSON.parse(localStorage.getItem("currentUser")).username
    }.svg`}" />
  `;
} else {
  document.querySelector(".icons").innerHTML += /*html*/ `
    <a href="./login.html">
      <i class="fa-solid fa-right-to-bracket"></i>
    </a>
  `;
}

const updateCartCount = () => {
  if (localStorage.getItem("cart")) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    document.getElementById("cart-count").innerText = cart.length;
  }
};

updateCartCount();

const logout = () => {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("cart");
  location.reload();
};
