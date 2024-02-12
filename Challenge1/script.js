/* Challenge(1): [JavaScript Basics]
Note: Do these exercises in the Console (right-click > Inspect > Console)
- Use alert (....); to display "good morning!" in a popup.
- Display your name in a popup.
- Using Math, Calculate 10+5 in the Console.
- Calculate 20-5 in the Console
- Calculate 2+2-5 in the Console
- Use document.body.innerHTML = ....; to display 'Good morning!' on the web page.
- Display your name on the web page.
- You order a T-Shirt for Rs-10, socks for Rs-8, and dinner plates for Rs-20. Use JavaScript to calculate the total cost of your order.
- Your bank account has Rs-100, you spend Rs-20 on lunch, Rs-50 on dinner, and earn Rs-200 from your job. Calculate how much money you have.
- Use document.body.innerHTML = ....; to make the web page blank. ***/

//- Use alert (....); to display "good morning!" in a popup.
alert("good morning!");

//Display your name in a popup.
alert("Zainab");

//- Using Math, Calculate 10+5 in the Console.
console.log(10 + 5);

//- Calculate 20-5 in the Console
console.log(eval(20 - 5));

//- Calculate 2+2-5 in the Console
console.log(eval(2 + 2 - 5));

//- Use document.body.innerHTML = ....; to display 'Good morning!' on the web page.
document.body.innerHTML = "Good Morning!";

//Display your name on the web page.
document.body.innerHTML = "  Zainab";

//- You order a T-Shirt for Rs-10, socks for Rs-8, and dinner plates for Rs-20.
//  Use JavaScript to calculate the total cost of your order.
let tshirt = 10;
let socks = 8;
let dinner_plates = 20;
let cost = tshirt + socks + dinner_plates;
console.log(` Total cost of your order is Rs ${cost} `);

//- Your bank account has Rs-100, you spend Rs-20 on lunch, Rs-50 on dinner,
//and earn Rs-200 from your job. Calculate how much money you have.

let account = 100;
let lunch_cost = 20;
let dinner_cost = 50;
let money_earned = 200;

let money_left = money_earned + account;
money_left = money_left - lunch_cost;
money_left = money_left - dinner_cost;

console.log(`Money you have after lunch & dinner is ${money_left}`);

//- Use document.body.innerHTML = ....; to make the web page blank. ***/
//document.body.innerHTML = "";
