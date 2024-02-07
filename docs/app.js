function getOrderTotal() {
  // Define prices for different sizes of coffees and teas
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
    // Determine if the drink is coffee or tea based on the description
    const isCoffee = descriptions[i].toLowerCase().includes('coffee');

    // Retrieve the price based on the size and type of drink
    const price = isCoffee ? coffeePrices[sizes[i]] : teaPrices[sizes[i]];

    // Calculate the cost for the current item and add it to the total
    totalCost += quantities[i] * price;
  }

  // Return the total cost as a number
  return totalCost;
}
