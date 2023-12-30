
let productsHtml = "";
products.forEach((product) => {
  productsHtml += `
      <div class="container">
      <div class="product-img">
          <img class="image" src="data/images/${product.image}" alt="">
      </div>
          <div class="product-name">
              <p class="product-detail">${product.name}</p>
          </div>
          <div class="rating">
              <img class="ratings" src="data/images/rating-${
                product.ratings.stars * 10
              }.png" alt=""  >
              <span class="count">${product.ratings.count}</span>
          </div>
          <div class="price">
              <span>$${product.price / 100}</span>
          </div>
          <div class="select">
              <select name="" id="">
                  <option value="2">1</option>
                  <option value="2">2</option>
                  <option value="2">3</option>
                  <option value="2">4</option>
                  <option value="2">5</option>
                  <option value="2">6</option>
                  <option value="2">7</option>
                  <option value="2">8</option>
              </select>
          </div>
          <div class="button">
              <button class="add-to-cart
              js-add-to-cart"
              data-product-name="${product.name}">
                Add to Cart
              </button>
          </div>

  </div>  
      `;
});

document.querySelector(".js-product-grid").innerHTML = productsHtml;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
button.addEventListener('click', () => {
  const productName = button.dataset.productName;
  let matchingItem;

  cart.forEach((item) => {
     if (productName === item.productName) {
        matchingItem = item;
     }
  });
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
        productName: productName,
        quantity: 1
      });
  }
  let cartQuantity = 0;
  cart.forEach((item) => {
cartQuantity += item.quantity;
  });

  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
  console.log(cartQuantity);
  console.log(cart);
 
});
  
});
