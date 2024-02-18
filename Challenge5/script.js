// Challenge(5) - Variables.

// 5.a. Create a <script> element. Inside the <script>, create a variable called "name", and save your name in this variable (as a string).
let name = "zainab";

// 5.b. Continuing from 5a, display the message "My name is: ${name}" in the console (insert the 'name' variable created in 5a into this message).
console.log(`My name is ${name}`);

// 5.c. At a restraurant, you order 1 coffee ($5), 2 bagals ($3 each), and 1 soup ($9). Calculate the cost and save it in a variable called 'cost'.
let coffeePrice = 5;
let bagelPrice = 3;
let soupPrice = 9;

let coffeeQuantity = 1;
let bagelsQuantity = 2;
let soupQuantity = 1;

let cost =
  coffeePrice * coffeeQuantity +
  bagelPrice * bagelsQuantity +
  soupPrice * soupQuantity;

// 5.d. Continuing from 5c, display "cost of food: $${cost}" in the console.

console.log(`cost of food ${cost}`);

// 5.e. Let's say the restaurance charges a 10% tax. Using the 'cost' variable from 5c, calculate the tax (hint: multiply by 0.1), and save the result in a variable.

let tax = 10 / 100;
let taxAmount = cost * tax;

// 5.f Continuing from 5e, display "Tax (10%): $${tax}" in the console.
console.log(`Tax(10%): ${taxAmount}`);

// 5.g. Continuing from 5f, calculate the total (cost+tax), save it in a variable called "totalcost", and display the message "Total cost: $${totalcost}" in the console.
let totalCost = cost + taxAmount;
console.log(`Total cost: ${totalCost}`);

// 5.h. In the cart quantity project, add 2 more buttons "+4" and "+5",
//which increases the quantity by 4 and 5 when you click them. Try using +=
let cart_quantity = 0;
let max_cart_quantity = 10;
let min_cart_quantity = 0;

function increaseVal(value) {
  if (cart_quantity + value > max_cart_quantity) {
    console.log(`Cart quantity cannot be updated: reached Max item limit`);
    console.log(`Cart quantity is: ${cart_quantity}`);
  } else {
    cart_quantity = cart_quantity + value;
    console.log(`Cart quantity is: ${cart_quantity}`);
  }
}

// 5.i. In the cart quantity project, add a button "remove from cart",
//which decreases the cart quantity by 1.
// 5.j. Add 2 buttons '-2' and '-3', which decrease the quantity by 2 and 3.

function removeCart(value) {
  if (cart_quantity - value < min_cart_quantity) {
    console.log(`Cart quantity cannot be updated: reached Min item limit`);
    console.log(`Cart quantity is: ${cart_quantity}`);
  } else {
    cart_quantity = cart_quantity - value;
    console.log(`Cart quantity is: ${cart_quantity}`);
  }
}

// 6.e. Create a Cart_Quantity Project.
// - Go to exercise 5.k.
// - Let's say the cart has a maximum quantity of 10. before updating the quantity,
//check if the quantity will be greater than 10:
// (1): if it is greater display: "the cart if full" else update the quantity in the cart.
// - And in case of -2,-3 before updating the quantity in cart, check if it is equals to 0 or not.
// (1) if it's equal to 0, display "Not enough items in the cart" else just update the cart.

// 5.k. Creating a basic calculator that can perform very simple steps: like
// 1+2=3 (where 1,2,+ are the buttons)
//imcomplete description of challenge

let number1 = 0;
let number2 = 0;

function inputFirstNumber() {
  number1 = Number(prompt("Enter first Number"));
  console.log(`Number 1 is: ${number1}`);
}

function inputSecondNumber() {
  number2 = Number(prompt("Enter Second Number"));
  console.log(`Number 2 is: ${number2}`);
}

function operator() {
  let result = 0;
  let operation = prompt("Enter Operation");

  if (operation == "+") {
    result = number1 + number2;
  } else if (operation == "-") {
    result = number1 - number2;
  } else if (operation == "*") {
    result = number1 * number2;
  } else if (operation == "/") {
    result = number1 / number2;
  } else {
    console.log("Error:Invalid operation");
  }

  console.log(`Result is :${result}`);
}
