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

console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(["hi", "hello", "good"]));

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

console.log(increaseByOne([1, 2, 3]));

//11i
function addNum(array, num) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + num;
  }
  return array;
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));

//11j
function addArray(array1, array2) {
  let array3 = [];
  for (let i = 0; i < array1.length; i++) {
    array3[i] = array1[i] + array2[i];
  }

  return array3;
}

console.log(addArray([1, 1, 2], [1, 1, 3]));
console.log(addArray([1, 2, 3], [4, 5, 6]));

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

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

//11l
function minMax(nums) {
  let min = nums[0];
  let max = nums[0];
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

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));
