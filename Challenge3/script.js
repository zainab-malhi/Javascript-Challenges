//Challenge (3):

//1. Create the text "My name is: as a string.
let text = "My name is:";

//2. Create your name as a string (for eg: "Simon")
let myName = "zainab";

//3. Using Concatenation, add the 2 strings from 1st qos and 2nd qos together to
//create the text: 'My name is ___' (replace ___ with you name).

let concatenatingString = text + " " + myName;
console.log(concatenatingString);

//4. At a restaurant, you order 1 coffee (rs-5) and 1 bagel(rss-3).
//Using math, calculate the total cost, and using concatenation, create the text:
//'Total cost: $___' (replace ___ with the total you calculated).

let coffeePrice = 5;
let bagelPrice = 3;

let coffeeQuanity = 1;
let bagelQuantity = 1;

let totalBill = coffeePrice * coffeeQuanity + bagelPrice * bagelQuantity;
console.log("Total cost: " + totalBill);

//5. Do the same thins as 4th qos, but use a template string and interpolation.
console.log(`Total cost: ${totalBill}`);

//6. Display the text from 5th qos in a popup using alert(...);
alert("totalcost: " + totalBill);

//7. You order 1 coffee ($5.99) and 1 bagel($2.95). Using math, calculate the total cost, and
//using concatenation, create the text: 'Total cost: $____' (hint: calculate in cents to avoid inaccuracies)

coffeePrice = 5.99;
bagelPrice = 2.95;

totalBill = coffeePrice * coffeeQuanity + bagelPrice * bagelQuantity;
console.log("Total cost: " + totalBill);

//8. Do the same thing as 7th question, but use a template string and interpolation.
console.log(`Total cost: ${totalBill}`);

//9. Display the text from 8th question in a popup.
alert("totalcost: " + totalBill);

//10. Using a multi-line string, create the text from 8th question and add a line of text underneath:
//'Thank You, come again!'. Display both lines in a popup.
console.log(`Total cost: ${totalBill} \n Thank You, come again!`);
