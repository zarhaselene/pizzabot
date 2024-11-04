const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

// 1.2 Greeting the customer
alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
);

// 2.3 Ask the user which pizza they want, and how many
const orderName = prompt(
  `Enter the name of the pizza you want to order today.`
).toLowerCase();

if (
  orderName === vegetarian.toLowerCase() ||
  orderName === hawaiian.toLowerCase() ||
  orderName === pepperoni.toLowerCase()
) {
  // 2.4 Finalizing the order
  const orderQuantity = prompt(`How many of ${orderName} do you want?`);
  const orderTotal = orderQuantity * pizzaPrice;
  let cookingTime = 0;
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    cookingTime = 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    cookingTime = 15;
  } else {
    cookingTime = 20;
  }
  alert(
    `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime} minutes`
  );
} else {
  alert(`Sorry, we don't have that pizza on the menu.`);
}
