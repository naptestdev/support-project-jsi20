const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");

const product = tourLocations.find((item) => item.name === name);

if (!product) location.href = "../html/placePage.html";

document.querySelector(
  ".img-display img"
).src = `https://picsum.photos/seed/${encodeURIComponent(name)}/1000/500`;
document.querySelector(".product-title").textContent = product.name;
document.querySelector(
  ".last-price span"
).textContent = `Giá : $${product.cost}`;
document.querySelector(".product-detail p").textContent = product.description;
