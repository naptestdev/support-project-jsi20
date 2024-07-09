if (localStorage.getItem("currentUser")) {
  location.href = "../html/homePage.html";
}

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!localStorage.getItem("users")) {
    alert("No user found");
  } else {
    let users = JSON.parse(localStorage.getItem("users"));

    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let existingUser = users.find(
      (homePage) =>
        homePage.email === email.value.trim() &&
        homePage.password === password.value.trim()
    );

    if (existingUser) {
      localStorage.setItem("currentUser", JSON.stringify(existingUser));

      location.href = "../html/homePage.html";
    } else {
      alert("Email or password is incorrect");
    }
  }
});