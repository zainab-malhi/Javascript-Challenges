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

// 5.h. In the cart quantity project, add 2 more buttons "+4" and "+5", which increases the quantity by 4 and 5 when you click them. Try using +=
//Which cart project it is talking about??

// 5.i. In the cart quantity project, add a button "remove from cart", which decreases the cart quantity by 1.
//Which cart project it is talking about??

// 5.j. Add 2 buttons '-2' and '-3', which decrease the quantity by 2 and 3.
//Which cart project it is talking about??

// 5.k. Creating a basic calculator that can perform very simple steps: like
// 1+2=3 (where 1,2,+ are the buttons)
//imcomplete description of challenge
