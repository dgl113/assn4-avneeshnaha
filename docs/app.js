// Global arrays to store order information
let quantities = [];
let sizes = [];
let descriptions = [];

// Constants for drink prices
const COFFEE_PRICES = {
  Short: 2.99,
  Tall: 3.19,
  Grande: 3.49,
  Venti: 3.99
};

const TEA_PRICES = {
  Short: 2.85,
  Tall: 3.05,
  Grande: 3.25,
  Venti: 3.50
};

// Function to add an item to the drink order
function addItem(quantity, size, description) {
  quantities.push(quantity);
  sizes.push(size);
  descriptions.push(description);
}

// Function to delete an item from the drink order
function deleteItem(index) {
  quantities.splice(index, 1);
  sizes.splice(index, 1);
  descriptions.splice(index, 1);
}

// Function to calculate the total cost of the drink order
function getOrderTotal() {
  let total = 0;
  for (let i = 0; i < quantities.length; i++) {
    const quantity = quantities[i];
    const size = sizes[i];
    const description = descriptions[i];

    let price;
    if (description === "Coffee") {
      price = COFFEE_PRICES[size];
    } else if (description === "Tea") {
      price = TEA_PRICES[size];
    } else {
      // Handle other drink types if needed
      console.error("Unknown drink type:", description);
      continue;
    }

    total += quantity * price;
  }
  return total.toFixed(2); // Return total with 2 decimal places
}
