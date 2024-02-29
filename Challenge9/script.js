//10a

//done

//10b

//done

//10c  classList has another method,classList.contains('class-name'),
// which checks if an element has a class
// * Create a button <button class="js-button">Test</button>
// * Use document.querySelector() and classList.contains('js-button')
// * console.log() the result

function changeText() {
  let button = document.getElementById("btn1");

  if (button.classList.contains("js-button")) {
    console.log('class "js-button" ');
  }
  //console.log(button.classList);
}

//10d
function changeClass() {
  let button = document.getElementById("btn2");
  if (button.classList.contains("is-toggled")) {
    button.classList.remove("is-toggled");
  } else {
    button.classList.add("is-toggled");
  }
}

//10e,10f
function changeClass3() {
  let button = document.getElementById("btn3");
  if (button.classList.contains("is-toggled")) {
    button.classList.remove("is-toggled");
  } else {
    button.classList.add("is-toggled");
  }
}

function changeClass4() {
  let button = document.getElementById("btn4");
  if (button.classList.contains("is-toggled")) {
    button.classList.remove("is-toggled");
  } else {
    button.classList.add("is-toggled");
  }
}

function changeClass5() {
  let button = document.getElementById("btn5");
  if (button.classList.contains("is-toggled")) {
    button.classList.remove("is-toggled");
  } else {
    button.classList.add("is-toggled");
  }
}

//Incomplete Exercise
//10g
//10h
