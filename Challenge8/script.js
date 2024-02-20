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
  button.innerHTML = button.innerHTML + "<p>You choose heads</p>";
}

// When clicking on the tails display:
// You chose: tails
// (You need to display in a paragraph (< p >) tag)

function displayTails() {
  let button = document.querySelector("#tails");
  button.innerHTML = button.innerHTML + "<p>You choose Tail</p>";
}

// 4.Create a text box and a sumbit button. When clicking 'Sumbit' button, display the text as:
//[You name is: Simon] in a < p > tag (and this name you need to take the user's input).

function displayName() {
  //let name = document.getElementById("name");
  //console.log(`Name is ${name}`);

  //document.getElementById("myText").value = "Johnny Bravo";
  console.log(document.getElementById("myText").value);
  let button = document.querySelector("#submit"); //TODO: why # in id in input feel gives null??

  const para = document.createElement("p");
  //para.innerHTML = "some text here";
  para.textContent = "dadadadad";

  button.appendChild(para);

  /*let name_string = `<p>name is ${
    document.getElementById("myText").value
  } </p>`;
  console.log(name_string);
  button.innerHTML = button.innerHTML + name_string;*/
}

// 5. Modify (4)th qos in such a way that if you press "enter" in the < input >, it will
//also display the same message on the page that you're displaying above in qos-4.

// Challenge Exercise
// Create an Amazon Shipping Calculator.
// What is an Amazon Shipping Calculator?

// There is an input box where you're only allowed to enter the numbers (no string).

// If the number is greater than 8, add (+10) and display the answer '$18'
// And if the number is less or equal to 8, return/display the number as it is. '$8
