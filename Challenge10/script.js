//Lesson 11 Exercises -Array & Loops
//11a
const nums = [10, 20, 30];
nums[nums.length - 1] = 99;
//console.log(nums);

//11b
function getLastValue(array) {
  return array[array.length - 1];
}

//console.log(getLastValue([1, 20, 22, 24, 5]));
//console.log(getLastValue(["hi", "hello", "good,"]));

//11c
function arraySwap(array) {
  let firstval = array[0];
  let secondVal = array[array.length - 1];

  array[0] = secondVal;
  array[array.length - 1] = firstval;

  return array;
}

//console.log(arraySwap([1, 20, 22, 24, 5]));
//console.log(arraySwap(["hi", "hello", "good"]));

//11d
for (let i = 0; i <= 10; i = i + 2) {
  console.log(i);
}

//11e
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

//11f
let i = 0;
while (i <= 10) {
  console.log(i);
  i = i + 1;
}

i = 5;
while (i >= 0) {
  console.log(i);
  i = i - 1;
}

//11g  11h
function increaseByOne(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + 1;
  }
  return array;
}

//console.log(increaseByOne([1, 2, 3]));

//11i
function addNum(array, num) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + num;
  }
  return array;
}

//console.log(addNum([1, 2, 3], 2));
//console.log(addNum([1, 2, 3], 3));
//console.log(addNum([-2, -1, 0, 99], 2));

//11j
function addArray(array1, array2) {
  let array3 = [];
  for (let i = 0; i < array1.length; i++) {
    array3[i] = array1[i] + array2[i];
  }

  return array3;
}

//console.log(addArray([1, 1, 2], [1, 1, 3]));
//console.log(addArray([1, 2, 3], [4, 5, 6]));

//11k
function countPositive(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      count = count + 1;
    }
  }

  return count;
}

//console.log(countPositive([1, -3, 5]));
//console.log(countPositive([-2, 3, -5, 7, 10]));

//11l & 11m
//handle following cases
// minMax([1,-3,5]) => {min: -3, max:10 }
// minMax([-2,3,-5,7,10]) => {min: -5, max:10}

function minMax(nums) {
  let min, max;

  if (nums.length == 0) {
    return {
      min: null,
      max: null,
    };
  }

  if (nums.length == 1) {
    return {
      min: nums[0],
      max: nums[0],
    };
  }

  min = nums[0];
  max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }

    if (nums[i] < min) {
      min = nums[i];
    }
  }

  return {
    min: min,
    max: max,
  };
}

console.log(minMax([]));
console.log(minMax[3]);
console.log(minMax([-2, 3, -5, 7, 10]));

//11n
let words = [
  "apple",
  "grape",
  "apple",
  "apple",
  "mangoes",
  "mangoes",
  "banana",
];
let word_copy = [];
word_copy.push(words[0]);

for (let i = 0; i < words.length; i++) {
  if (!word_copy.includes(words[i])) {
    word_copy.push(words[i]);
  }
}

let counter = [];
for (let i = 0; i < word_copy.length; i++) {
  counter[i] = 0;
}

for (let i = 0; i < word_copy.length; i++) {
  for (let k = 0; k < words.length; k++) {
    if (word_copy[i] == words[k]) {
      //console.log(`word_copy is ${word_copy[i]}`)
      //console.log(`word_copy is ${word_copy[i]}`);
      counter[i] = counter[i] + 1;
    }
  }
}

//console.log(words);
//console.log(word_copy);
//console.log(counter);

//////////////////////////
//Array & Loops
//11o & 11p
let strarray = ["hello", "world", "dsds", "good"];

function findArrays(strarray) {
  for (let i = 0; i < strarray.length; i++) {
    if (strarray[i] == "search") {
      console.log(`index is ${i}`);
      return;
    }
  }
  console.log(`index is -1`);
}

//findArrays(strarray);
//11q
function findIndex(array, str) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == str) {
      console.log(`index is ${i}`);
      return;
    }
  }
  console.log(`index is -1`);
}

//findIndex(["green", "red", "blue", "red"], "red");

//11r
function removeEgg(foods) {
  let result = [];

  for (let i = 0; i < foods.length; i++) {
    if (!(foods[i] == "egg")) {
      result.push(foods[i]);
    }
  }
  return result;
}

//console.log(removeEgg(["egg", "apple", "egg", "egg", "ham"]));

//11s
function removeTwoEgg(foods) {
  let result = [];

  let count = 0;
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] == "egg") {
      count = count + 1;
      if (count > 2) {
        result.push(foods[i]);
      }
    } else {
      result.push(foods[i]);
    }
  }
  return result;
}

//console.log(removeTwoEgg(["egg", "apple", "egg", "egg", "ham", "egg", "egg"]));

// 11s
function removeLastTwoEgg(foods) {
  let result = [];

  let count = 0;
  console.log(`Lentgh of array  ${foods.length}`);
  for (let i = foods.length - 1; i >= 0; i--) {
    if (foods[i] == "egg") {
      count = count + 1;
      if (count > 2) {
        result.push(foods[i]);
      }
    } else {
      result.push(foods[i]);
    }
  }
  return result;
}

// console.log(
//   removeLastTwoEgg(["egg", "apple", "egg", "egg", "ham", "egg", "egg"])
// );

//11t not done

////////////////////////////////////////////////////
////////////////////////////////////////////

//11v
// console.log("Fizz Buzz problem");
// for (let i = 1; i <= 20; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("Fizz Buzz");
//   } else if (i % 5 == 0) {
//     console.log("Bizz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }

//11W
function unique(words) {
  let word_copy = [];
  word_copy.push(words[0]);

  for (let i = 0; i < words.length; i++) {
    if (!word_copy.includes(words[i])) {
      word_copy.push(words[i]);
    }
  }
  return word_copy;
}

//console.log(  unique(["green", "red", "blue", "blue", "yellow", "yellow", "orange"]));
