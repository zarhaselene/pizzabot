const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:
const availablePizzas = [vegetarian, hawaiian, pepperoni];

const greeting = () => {
  alert(
    `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
  );
};
const checkOrderName = (orderName) => {
  return (
    orderName === vegetarian.toLowerCase() ||
    orderName === hawaiian.toLowerCase() ||
    orderName === pepperoni.toLowerCase()
  );
};
const totalCost = (orderQuantity) => {
  return orderQuantity * pizzaPrice;
};
const cookingTime = (orderQuantity) => {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
};

// Greet the customer
greeting();
// Ask the user which pizza they want, and quantity
let orderName = prompt(
  `Enter the name of the pizza you want to order today.`
).toLowerCase();

while (true) {
  // Check if the ordered pizza is on the menu
  if (checkOrderName(orderName)) {
    // Ask for the quantity of the ordered pizza
    const orderQuantity = parseInt(
      prompt(`How many of ${orderName} do you want?`),
      10
    );
    // Calculate the total cost of the order
    const orderTotal = totalCost(orderQuantity);
    // Calculate the cooking time based on the quantity
    const time = cookingTime(orderQuantity);
    // Inform the user of their order details
    alert(
      `Great, I'll get started on your ${orderName} right away. It will cost ${orderTotal} kr. The pizzas will take ${time} minutes.`
    );
    break;
  } else {
    // Notify the user if the pizza is not on the menu
    alert(`Sorry, we don't have that pizza on the menu.`);
    orderName = prompt(
      `Enter a pizza from the menu: ${availablePizzas}`
    ).toLowerCase();
  }
}
