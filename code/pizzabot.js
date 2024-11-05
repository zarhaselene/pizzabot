const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:
const pizzaList = document.getElementById("pizzaList");
const availablePizzas = [vegetarian, hawaiian, pepperoni];

const pizzaForm = document.getElementById("pizzaForm");
const pizzaInput = document.getElementById("pizzaInput");
const numberInput = document.getElementById("numberInput");

const addToOrderBtn = document.getElementById("addToOrder");

const pizzaErrorEl = document.getElementById("pizzaError");
const quantityErrorEl = document.getElementById("quantityError");

const totalEl = document.getElementById("total");
const etaEl = document.getElementById("eta");
const popupEl = document.getElementById("popup");

pizzaList.textContent = availablePizzas.join(", ");

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

const processOrder = (orderConfirmation = false) => {
  const orderName = pizzaInput.value.toLowerCase();
  const orderQuantity = parseInt(numberInput.value, 10);

  if (!checkOrderName(orderName)) {
    pizzaErrorEl.style.visibility = "visible"; // Show error message
    pizzaErrorEl.textContent = `Sorry, we don't have that pizza on the menu.`;
    return;
  }

  if (isNaN(orderQuantity) || orderQuantity <= 0) {
    quantityErrorEl.style.visibility = "visible"; // Show error message
    quantityErrorEl.textContent = `Please enter a valid quantity greater than zero.`;
    return;
  }
  pizzaErrorEl.style.visibility = "hidden";
  quantityErrorEl.style.visibility = "hidden";
  const orderTotal = totalCost(orderQuantity);
  totalEl.textContent = `Total: ${orderTotal} kr`;
  const time = cookingTime(orderQuantity);
  etaEl.textContent = `ETA: ${time} minutes`;

  if (orderConfirmation) {
    popupEl.style.visibility = "visible"; // Show popup message
    popupEl.textContent = `Great, I'll get started on your ${orderName} right away. It will cost ${orderTotal} kr. The pizzas will take ${time} minutes.`;
  }
};

addToOrderBtn.addEventListener("click", function () {
  processOrder(false);
});

pizzaForm.addEventListener("submit", function (event) {
  event.preventDefault();
  processOrder(true);
});

// Custom number input buttons functionality + & -
const decreaseValue = () => {
  const input = document.getElementById("numberInput");
  let currentValue = parseInt(input.value, 10);
  if (currentValue > 0) {
    input.value = currentValue - 1;
  }
};

const increaseValue = () => {
  const input = document.getElementById("numberInput");
  let currentValue = parseInt(input.value, 10);

  // If input is empty, start at 0 when increasing
  if (isNaN(currentValue)) {
    input.value = 1;
  } else {
    input.value = currentValue + 1;
  }
};
