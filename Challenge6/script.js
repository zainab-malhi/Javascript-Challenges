// Challenge(6)- Booleans and If-Statements

// 6.a. Create a variable called "hour" and save the current hour of the day
//(use 24-hour format and save it as a number b/w 0 and 23).
// - If hour is b/w 6 and 12, display "good morning".
// - If hour is b/w 13 and 17, display "good afternoon".
// - If hour is b/w 17+, display "good night".

let current_date = new Date(); //returns the current date and time
let hour = current_date.getHours();
//console.log(hour);

if (hour > 6 && hour < 12) {
  console.log("Good Morning");
} else if (hour > 13 && hour < 17) {
  console.log("Good Afternoon");
} else if (hour > 17) {
  console.log("Good Night");
}

// 6.b. Continue with 6.a., store the variable called 'name' and save your name
//inside as a string. (e.g. -> Good morning James)

let name = "Zainab";

if (hour > 6 && hour < 12) {
  console.log(`Good Morning ${name}`);
} else if (hour > 13 && hour < 17) {
  console.log(`Good Afternoon ${name}`);
} else if (hour > 17) {
  console.log(`Good Night ${name}`);
}

// 6.c. Imagine a park that has a discount for children (6 years and younger) or senior(65years+)
// - You need to display "disount" and "no discount" in console according to condition.
// - [Add-on in same qos]: Now, let's say the discount is only available if it is not a holiday.
//You just need to update above code with this new code with the same display in console.

let age = prompt("Enter your age");

if (age <= 6 || age > 65) {
  console.log("discount");
} else {
  console.log("no discount");
}

let holiday_input = prompt("Is it a holiday or not");
let holiday = false;
if (holiday_input == "yes" || holiday_input == "y" || holiday_input == "Y") {
  holiday = true;
}

if ((age <= 6 || age > 65) && holiday == true) {
  console.log("discount");
} else {
  console.log("no discount");
}

// 6.e. Create a Cart_Quantity Project.
// - Go to exercise 5.k.
// - Let's say the cart has a maximum quantity of 10. before updating the quantity,
//check if the quantity will be greater than 10:
// (1): if it is greater display: "the cart if full" else update the quantity in the cart.
// - And in case of -2,-3 before updating the quantity in cart, check if it is equals to 0 or not.
// (1) if it's equal to 0, display "Not enough items in the cart" else just update the cart.

// ---->Done this Part in Challenge 5
