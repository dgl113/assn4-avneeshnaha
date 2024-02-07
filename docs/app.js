'use strict';

// Global arrays to store drink order information
let quantities = [];
let sizes = [];
let descriptions = [];

// Function to add an item to the drink order
function addItem(quantity, size, description) {
  // Push the provided values to their respective arrays
  quantities.push(quantity);
  sizes.push(size);
  descriptions.push(description);
}

// Function to delete an item from the drink order
function deleteItem(index) {
  // Check if the index is valid
  if (index >= 0 && index < quantities.length) {
    // Remove the item at the specified index from all arrays
    quantities.splice(index, 1);
    sizes.splice(index, 1);
    descriptions.splice(index, 1);
  } else {
    console.error('Invalid index!');
  }
}

// Function to calculate the total cost of the drink order
function getOrderTotal() {
  // Define the prices for different sizes of coffees and teas
  const coffeePrices = {
    Short: 2.99,
    Tall: 3.19,
    Grande: 3.49,
    Venti: 3.99,
  };
  const teaPrices = {
    Short: 2.85,
    Tall: 3.05,
    Grande: 3.25,
    Venti: 3.5,
  };

  // Initialize total cost
  let totalCost = 0;

  // Iterate over the arrays and calculate the total cost
  for (let i = 0; i < quantities.length; i++) {
    // Determine if the drink is a coffee or tea based on the description
    const isCoffee = descriptions[i].toLowerCase().includes('coffee');

    // Retrieve the price based on the size and type of drink
    const price = isCoffee ? coffeePrices[sizes[i]] : teaPrices[sizes[i]];

    // Calculate the cost for the current item and add it to the total
    totalCost += quantities[i] * price;
  }

  // Return the total cost
  return totalCost.toFixed(2); // Round to 2 decimal places
}
