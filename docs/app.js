'use strict';
const quantities = [];
const sizes = [];
const descriptions = [];
const prices = [];
function addItem(quantity, size, description) {
  quantity = parseInt(quantity, 10);
  const sizePattern = /^(Short|Tall|Grande|Venti)/;
  const match = size.match(sizePattern);
  if (match) {
    size = match[1]; 
  }
  quantities.push(quantity);
  sizes.push(size);
  descriptions.push(description);
  let price = 0;
  if (description.includes("Coffee")) {
    switch (size) {
      case 'Short': price = 2.99; break;
      case 'Tall': price = 3.19; break;
      case 'Grande': price = 3.49; break;
      case 'Venti': price = 3.99; break;
    }
  } else if (description.includes("Tea")) {
    switch (size) {
      case 'Short': price = 2.85; break;
      case 'Tall': price = 3.05; break;
      case 'Grande': price = 3.25; break;
      case 'Venti': price = 3.50; break;
    }
  }
  prices.push(price * quantity);
}
function deleteItem(index) {
  quantities.splice(index, 1);
  sizes.splice(index, 1);
  descriptions.splice(index, 1);
  prices.splice(index, 1);
}
function getOrderTotal() {
  return prices.reduce((total, price) => total + price, 0);
}