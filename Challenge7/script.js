// Challenge7 - Functions

// 7.a. Create a function called 'greet' that displays the message "hello!" in the console. '

function greet() {
  console.log("hello!");
}

// 7.b. Continue from 7.a, add a parameter called 'name' to the 'greet' function and display the message: Hello (your name).
// e.g. -> Hello James

// 7.c. Now, try calling greet() without a name (it will display 'Hello undefined()).
// So, you need to modify the function so that if 'name' is undefined, it will display "hi there!", else.. display "Hey name".

function greatByName(name) {
  console.log(`Hello ${name}`);
  if (name === undefined) {
    console.log("hi there!");
  }
}

// 7.d. Create a function 'convertTemperature(degree,unit)' that takes a number and a unit (c or f) and converts it into the other unit.
// <> convertTemperature(25,c)=> 77F
// <> convertTemperature(86,f)=> 30C

function convertTemperature(degree, unit) {
  // let fah = 86;
  // let cel = 0.55 * (fah - 32);

  let converted_Temp = 0;
  if (unit == "c") {
    convertTemperature = degree * 1.8 + 32;
    console.log(
      `Temperature from celcuis to fahrenheit is : ${convertTemperature}`
    );
  } else if (unit == "f") {
    convertTemperature = 0.55 * (degree - 32);
    console.log(
      `Temperature from celcuis to fahrenheit is : ${convertTemperature}`
    );
  }
}

greet();
greatByName("Zainab");
greatByName();
convertTemperature(25, "c");

// {Add-on, in this same question} ->
// 1) You need to take the input from the user in both degree and units.
// 2) And while taking the input from unit, user should not be allowed to give input more than 1 character in input box.
// e.g. -> f (is correct input)
// 	fah (is not correct input: because it's taking more than 1 character).

// Challenger exercise:
// <-> Create a simple To-Do List.
// Things to add:
// 1. Users can add, edit, and delete tasks.
// 2. Implement checkboxes to mark tasks as completed.
// 3. Integrate functions to set custom reminders for tasks (using browser popups)
