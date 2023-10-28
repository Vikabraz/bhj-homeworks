const productAddButtons = document.querySelectorAll(".product__add");

// Добавляем обработчик клика на кнопки "Добавить"
productAddButtons.forEach(function (button) {
  button.addEventListener("click", addToCart);
});

// Функция для добавления товара в корзину
function addToCart(e) {
  const product = e.target.closest(".product");
  const productId = product.getAttribute("data-id");
  const productQuantityValue = product.querySelector(
    ".product__quantity-value"
  );
  let quantity = parseInt(productQuantityValue.textContent);

  if (quantity <= 0) {
    alert("Количество товаров должно быть больше 0");
    return;
  }

  const cartProduct = document.querySelector(
    `.cart__product[data-id="${productId}"]`
  );
  //const productTitle = product.querySelector(".product__title").textContent;
  const productImageSrc = product.querySelector(".product__image").src;

  if (cartProduct) {
    const cartProductCount = cartProduct.querySelector(".cart__product-count");
    const currentQuantity = parseInt(cartProductCount.textContent);
    cartProductCount.textContent = currentQuantity + quantity;
  } else {
    const cartProductElement = document.createElement("div");
    cartProductElement.classList.add("cart__product");
    cartProductElement.setAttribute("data-id", productId);

    cartProductElement.innerHTML = `
          <img class="cart__product-image" src="${productImageSrc}">
          <div class="cart__product-count">${quantity}</div>
        `;

    const cartProducts = document.querySelector(".cart__products");
    cartProducts.appendChild(cartProductElement);
  }
}

const quantityControlIncButtons = document.querySelectorAll(
  ".product__quantity-control_inc"
);
const quantityControlDecButtons = document.querySelectorAll(
  ".product__quantity-control_dec"
);

quantityControlIncButtons.forEach(function (button) {
  button.addEventListener("click", () => changeQuantity(button, 1));
});

quantityControlDecButtons.forEach(function (button) {
  button.addEventListener("click", () => changeQuantity(button, -1));
});

function changeQuantity(button, delta) {
  const productQuantityValue = button.parentElement.querySelector(
    ".product__quantity-value"
  );
  let quantity = parseInt(productQuantityValue.textContent);
  quantity += delta;
  if (quantity >= 1) {
    productQuantityValue.textContent = quantity;
  }
}
