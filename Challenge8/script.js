// Questions based on: DOM (Document Object Model)
// 1. Create a button named as 9a, and display the name of the button into console.
function displayMessage() {
  console.log("You clicked button 9a");
}

// 2. Continue with (1), create another button named as 9b, and using .js, change the text
//in the second button to 9b done.

function changeText() {
  let button = document.querySelector("#btn");
  button.textContent = "9b done";
  //console.log(button);
}

// 3. Create (two) button named as: heads and tails.
// When clicking on the heads display:
// You chose: heads
function displayHead() {
  let button = document.querySelector("#heads");
  //button.innerHTML = button.innerHTML + "<p>You choose heads</p>";
  const para = document.createElement("p");
  para.innerHTML = "You chose Heads!";

  let container = document.getElementById("#container");
  button.parentNode.insertBefore(para, button);
}

// When clicking on the tails display:
// You chose: tails
// (You need to display in a paragraph (< p >) tag)

function displayTails() {
  let button = document.querySelector("#tails");

  const para = document.createElement("p");
  para.innerHTML = "You chose Tails!";

  let container = document.getElementById("#container");
  button.parentNode.insertBefore(para, button);
}

// 4.Create a text box and a sumbit button. When clicking 'Sumbit' button, display the text as:
//[You name is: Simon] in a < p > tag (and this name you need to take the user's input).

function displayName() {
  let button = document.querySelector("#submit"); //TODO: why # in id in input feel gives null??

  const input = document.getElementById("myInput");
  const inputValue = input.value;
  console.log(inputValue);

  const para = document.createElement("p");
  para.innerHTML = inputValue;

  let container = document.getElementById("#container");
  //button.appendChild(para);

  button.parentNode.insertBefore(para, button);
}

function displayNameEnter(event) {
  if (event.key == "Enter") {
    let button = document.querySelector("#submit"); //TODO: why # in id in input feel gives null??

    const input = document.getElementById("myInput");
    const inputValue = input.value;
    console.log(inputValue);

    const para = document.createElement("p");
    para.innerHTML = inputValue;

    let container = document.getElementById("#container");
    //button.appendChild(para);

    button.parentNode.insertBefore(para, button);
  }
}

// 5. Modify (4)th qos in such a way that if you press "enter" in the < input >, it will
//also display the same message on the page that you're displaying above in qos-4.

function press() {
  let button = document.querySelector("#submit"); //TODO: why # in id in input feel gives null??

  const input = document.getElementById("myInput");
  const inputValue = input.value;
  console.log(inputValue);

  const para = document.createElement("p");
  para.innerHTML = inputValue;

  let container = document.getElementById("#container");
  //button.appendChild(para);

  button.parentNode.insertBefore(para, button);
}

//One Challenge remianing
// Challenge Exercise
// Create an Amazon Shipping Calculator.
// What is an Amazon Shipping Calculator?

// There is an input box where you're only allowed to enter the numbers (no string).

// If the number is greater than 8, add (+10) and display the answer '$18'
// And if the number is less or equal to 8, return/display the number as it is. '$8
