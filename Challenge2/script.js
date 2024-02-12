//Challenge (2):
//1. At a restaurant, you order 1 soup of Rs-10, 3 burgers for Rs-8 each,
// and 1 ice-cream for Rs-5. Use JavaScript to calculate the cost of the order.
let soup_price = 10;
let burger_price = 8;
let ice_cream_price = 5;

let soup_quantity = 1;
let burger_quantity = 3;
let ice_cream_quantity = 1;

let cost_of_order =
  soup_price * soup_quantity +
  burger_price * burger_quantity +
  ice_cream_price * ice_cream_quantity;

console.log(`The total cost of order is ${cost_of_order}`);

//2. You're at a restaurant with 2 friends (3 people in total) and make the same order
//as above 1. Calculate how much each person pays.

let price_each_person_pays = cost_of_order / 3;
console.log(`price each person pays  is ${price_each_person_pays}`);

//3. Calculate the total cost of a toaster (Rs-18.50) and 2 Shirts (7.50 each).

let price_toaster = 18.5;
let price_shirts = 7.5;

let total_cost = price_toaster + 2 * price_shirts;
console.log(`total cost is ${total_cost}`);

//4. Calculate a 10% tax for the total in above (qos-3).

let tax = 10 / 100;
let tax_amount = total_cost * tax;
let total_bill = tax_amount + total_cost;

console.log(`The total bill is ${total_bill}`);

//5. Calculate a 20% tax for the total in (qos 3) (remember that 1% = 1/100, so 20% = 2/100).

tax = 20 / 100;
tax_amount = total_cost * tax;
total_bill = tax_amount + total_cost;

console.log(`The total bill is ${total_bill}`);

//Fahrenheit = (Celsius * 1.8) + 32

// Celcius = 0.55 x (Fahrenheit - 32)

//6. The temperature is 25 degree Celcius. Calculate the temperature in Fahrenheit.

let celcius_temp1 = 25;
let Fahrenheit_temp1 = celcius_temp1 * 1.8 + 32;

console.log(`25 degree Celcius is ${Fahrenheit_temp1}`);

//7. The temperature is 86 degree Fahrenheit. Calculate the temperature in Celcius.

let fah = 86;
let cel = 0.55 * (fah - 32);

console.log(`Th temperature ${fah} is ${cel}`);

//8. The temperature is -5 degree Celcius. Calculate the temperature in Fahrenheit

celcius_temp1 = -5;
Fahrenheit_temp1 = celcius_temp1 * 1.8 + 32;

console.log(`25 degree Celcius is ${Fahrenheit_temp1}`);
