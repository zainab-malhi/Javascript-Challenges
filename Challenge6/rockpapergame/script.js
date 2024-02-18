// 6.f. Create a rock/paper/scissor game.
// (hint: Use math.random() for generating the random values from computer)

// - You need to create (1) button that will ask from the user: rock/paper/scissor.
// - If the button's value matches with the computer's value you need to print:
//You win!, else: You lose!

let btn = document.getElementById("btn");
btn.addEventListener("click", myFunc);

function myFunc() {
  let random_number;
  let computer_guess;

  let guess = prompt("Guess Rock(R), scissor(S), Paper (P)");
  console.log(guess);

  random_number = Math.random();
  random_number = random_number.toPrecision(1);

  if (random_number > 0.5) {
    computer_guess = "R";
  } else if (random_number > 0.3 && random_number < 0.7) {
    computer_guess = "S";
  } else {
    computer_guess = "P";
  }

  console.log(`You choosed ${guess}`);
  console.log(`Computer choosed ${computer_guess}`);

  const result = guess == computer_guess ? "You won " : "You Lose";
  console.log(result);
}
