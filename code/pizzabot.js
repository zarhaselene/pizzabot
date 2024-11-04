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
);
const orderQuantity = prompt(`How many of ${orderName} do you want?`);

// 2.4 Finalizing the order
const orderTotal = orderQuantity * pizzaPrice;
alert(
  `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr`
);
