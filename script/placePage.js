document.querySelector(".place-product").innerHTML = tourLocations
  .map(
    (item) => `

    <div class="place1">
            <a href="./product-detail.html?name=${encodeURIComponent(
              item.name
            )}"
              ><img
                src="https://picsum.photos/seed/${encodeURIComponent(
                  item.name
                )}/300/200"
            /></a>
            <p style="margin-top: 20px">${item.name}</p>
            <p>${item.address}</p>
            <div class="info-text">
              <p><i class="fa-solid fa-clock"></i> ${item.days} ngày</p>
              <p><i class="fa-solid fa-dollar-sign"></i>${item.cost}</p>
            </div>
          </div>
  `
  )
  .join("");
