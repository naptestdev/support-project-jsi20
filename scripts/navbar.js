const logout = () => {
  localStorage.removeItem("currentUser");
  renderNavbar();
};

const renderNavbar = () => {
  const user = localStorage.getItem("currentUser");
  if (user) {
    document.querySelector(".icons").innerHTML = `
      <a href=""><i class="fa-regular fa-user"></i></a>
      <span>${JSON.parse(user).username}</span>
      <a href="javascript:;" onclick="logout()"><i class="fa-solid fa-right-from-bracket"></i></a>
      <a href="./cart.html"><i class="fa-solid fa-cart-shopping"></i></a>
    `;
    document.querySelector(
      "#call-to-action"
    ).innerHTML = `<div class="ti">Reach us at: +91 123456789</div>`;
    document.querySelector("#call-to-action").setAttribute("href", "#");
  } else {
    document.querySelector(".icons").innerHTML = `
    <a href="./login.html"><i class="fa-solid fa-right-to-bracket"></i></a>
  `;
    document.querySelector(
      "#call-to-action"
    ).innerHTML = `<div class="ti">Log in or register</div>`;
    document
      .querySelector("#call-to-action")
      .setAttribute("href", "./login.html");
  }
};

renderNavbar();
