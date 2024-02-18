// 6.d. Create a Coin-flip game:
// - Generate a random_number and save it in a variable.
// - If the no > 0.5 then display 'heads' else 'tails'.
// - [Add-on]: Now create a variable and save the user's response (head/tail)
// and match with the computer_choice (basically from the random_number)(just need
// to add your code in bullet point 1).
// - [Challenge]: Instead of using if-else try to use ternery operators for the same question.r

let random_number = Math.random();
random_number = random_number.toPrecision(1);
//console.log(`random number ${random_number}`);

let computer_response = "";

if (random_number > 0.5) {
  console.log("heads");
  computer_response = "H";
} else {
  console.log("tails");
  computer_response = "T";
}

let guess = prompt("Guess heads (H) & Tails (T)");

const result = guess == computer_response ? "You won " : "You Lose";
console.log(result);
