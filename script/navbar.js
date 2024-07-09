const logout = () => {
  localStorage.removeItem("currentUser");
  renderNavbar();
};

const renderNavbar = () => {
  const user = localStorage.getItem("currentUser");
  if (user) {
    document.querySelector(".navIcon").innerHTML = `
     <a href="../html/user-profile.html"><i class="fa-solid fa-user"></i></a>
     <span>${JSON.parse(user).username}</span>
     <a href="javascript:;" onclick="logout()"><i class="fa-solid fa-right-from-bracket"></i></a>
    `;
  } else {
    document.querySelector(".navIcon").innerHTML = `
    <a href="../html/register.html">Đăng ký / </a>
    <a href="../html/login.html">Đăng nhập</a>
   
  `;
  }
};

renderNavbar();
