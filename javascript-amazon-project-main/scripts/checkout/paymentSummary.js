import { cart } from "../../data/cart.js";
import { products } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import { deliveryOptions } from "../../data/deliveryOptions.js";

export const renderPaymentSummary = () => {
  let paymentHTML = "";
  let cartQuantity = 0;
  let priceTotal = 0;
  let shippingFee = 0;
  let totalBeforeTax = 0;
  let estimatedTax;

  cart.forEach((cartItem) => {
    products.forEach((product) => {
      if (cartItem.id === product.id) {
        cartQuantity += cartItem.quantity;
        priceTotal += cartItem.quantity * product.priceCents;
      }
    });

    deliveryOptions.forEach((deliveryOption) => {
      if (cartItem.deliveryOptionId === deliveryOption.id) {
        shippingFee += deliveryOption.priceCents;
      }
    });
  });
  totalBeforeTax = shippingFee + priceTotal;
  estimatedTax = totalBeforeTax * 0.1;
  paymentHTML += `
          <div class="payment-summary-title">Order Summary</div>

          <div class="payment-summary-row">
            <div>Items (${cartQuantity}):</div>
            <div class="payment-summary-money">$${formatCurrency(priceTotal)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(shippingFee)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTax)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(estimatedTax)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(estimatedTax + totalBeforeTax)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
        `;

  document.querySelector(".js-payment-summary").innerHTML = paymentHTML;
};
