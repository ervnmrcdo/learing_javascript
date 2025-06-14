import { cart, updateDeliveryOption } from "../../data/cart.js";
import { products } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import { removeFromCart } from "../../data/cart.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import { deliveryOptions } from "../../data/deliveryOptions.js";

const today = dayjs();
const deliveryDate = today.add(7, "days");
console.log(deliveryDate.format("dddd, MMMM D"));

const getProperDate = (deliveryOption) => {
  const today = dayjs();
  const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
  const dateString = deliveryDate.format("dddd, MMMM D");
  return dateString;
};

const deliveryOptionsHTML = (matchingItem, cartItem) => {
  let html = "";
  deliveryOptions.forEach((deliveryOption) => {
    const dateString = getProperDate(deliveryOption);

    const priceString =
      deliveryOption.priceCents === 0
        ? "FREE"
        : `$${formatCurrency(deliveryOption.priceCents)}`;

    const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
    html += `  <div class="delivery-option js-delivery-option" 
                    data-delivery-option-id=${deliveryOption.id} 
                    data-product-id="${matchingItem.id}">
                    <input
                        type="radio"
                        ${isChecked ? "checked" : ""}
                      class="delivery-option-input"
                      name="delivery-option-${matchingItem.id}"
                    />
                    <div>
                      <div class="delivery-option-date">${dateString}</div>
                      <div class="delivery-option-price">${priceString} Shipping</div>
                    </div>
                  </div>`;
  });
  return html;
};

export const generateCart = () => {
  let cartSummaryHTML = "";
  cart.forEach((cartItem) => {
    let matchingItem;

    products.forEach((product) => {
      if (cartItem.id === product.id) {
        matchingItem = product;
      }
    });

    const deliveryOptionId = cartItem.deliveryOptionId;
    let deliveryOption;
    const today = dayjs();
    deliveryOptions.forEach((option) => {
      if (option.id === deliveryOptionId) {
        deliveryOption = option;
      }
    });

    const delivery = today.add(deliveryOption.deliveryDays, "days");
    const deliveryDate = delivery.format("dddd, MMMM D");

    cartSummaryHTML += `
          <div class="cart-item-container  js-cart-item-container-${matchingItem.id}">

            <div class="delivery-date js-delivery-date-${matchingItem.id}">Delivery date: ${deliveryDate}</div>

            <div class="cart-item-details-grid">
              <img
                class="product-image"
                src="${matchingItem.image}"
              />

              <div class="cart-item-details">
                <div class="${matchingItem.id}">
                ${matchingItem.name}
                </div>
                <div class="product-price">$${formatCurrency(matchingItem.priceCents)}</div>
                <div class="product-quantity">
                  <span> Quantity: <span class="quantity-label">${cartItem.quantity}</span> </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary
                  js-delete-link"  data-product-id="${matchingItem.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                ${deliveryOptionsHTML(matchingItem, cartItem)}
              </div>
            </div>
          </div>
    `;
  });

  document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;

  document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`,
      );
      container.remove();
    });
  });

  document.querySelectorAll(".js-delivery-option").forEach((element) => {
    element.addEventListener("click", () => {
      const { productId, deliveryOptionId } = element.dataset;
      updateDeliveryOption(productId, deliveryOptionId);
      generateCart();
    });
  });
};
