const divProducts = document.getElementById("products");
for (let key of products) {
  divProducts.innerHTML += `
        <div class="card">
          <div class="image-container">
            <img src="${key.image}" alt="">
          </div>
          <div class="container">
           <a><h4>${key.name}</h4></a>
           <div class="sale">
            <p>${key.price}</p>
            </div>
        </div>
`;
}

const divProductList = document.getElementById("product-list");
for (let ky of product) {
  divProductList.innerHTML += `
        <div class="top">
          <div class="img-container">
            <img src="${ky.img}" alt="">
          </div>
          <div class="tainer">
          <div class="sales">
            <p>Sales: ${ky.sales}+</p>
            </div> <a><h5>${ky.nam}</h5></a>
           
            </div>
        </div>
`;
}

let star;
const divPro = document.getElementById("daily");
for (let ke of pro) {
  if (ke.stars == 1) {
    star = `<i class="fa-solid fa-star" style="color: #cda22d;"></i>`;
  } else if (ke.stars == 2) {
    star = `
    <i class="fa-solid fa-star" style="color: #cda22d;"></i>
    <i class="fa-solid fa-star" style="color: #cda22d;"></i>
    `;
  } else if (ke.stars == 3) {
    star = `
<i class="fa-solid fa-star" style="color: #cda22d;"></i>
<i class="fa-solid fa-star" style="color: #cda22d;"></i>
<i class="fa-solid fa-star" style="color: #cda22d;"></i>
    `;
  } else if (ke.stars == 4) {
    star = `
<i class="fa-solid fa-star" style="color: #cda22d;"></i>
<i class="fa-solid fa-star" style="color: #cda22d;"></i>
<i class="fa-solid fa-star" style="color: #cda22d;"></i>
<i class="fa-solid fa-star" style="color: #cda22d;"></i>
    `;
  } else {
    star = `
<i class="fa-solid fa-star" style="color: #cda22d;"></i>
<i class="fa-solid fa-star" style="color: #cda22d;"></i>
<i class="fa-solid fa-star" style="color: #cda22d;"></i>
<i class="fa-solid fa-star" style="color: #cda22d;"></i>
<i class="fa-solid fa-star" style="color: #cda22d;"></i>
    `;
  }
  divPro.innerHTML += `

       <a> <div class="pro">
          <div class="im">
            <img src="${ke.im}" alt="">
          </div>
          <div class="con">
            <h5>${ke.na}</h5>
            <div class="stars">
            ${star}
            </div>
            <h5>
              <span class="old-price">${ke.pri}</span>
            </h5>
            <a class="button" href="javascript:handleAddToCartClicked('${ke.id}');"><i class="fa-solid fa-cart-shopping"></i></a>
          </div>
        </div></a>
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
