////////////////// Problem 1 - Cute Angles ////////////////////////////////////////////
/*
Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.
*/
/*
const DEGREE = "\xB0";
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(num) {
  let degreesInt = Math.floor(num);
  let minutes = Math.floor((num - degreesInt) * MINUTES_PER_DEGREE);
  let seconds = Math.floor(
    (num - degreesInt - minutes / MINUTES_PER_DEGREE) * SECONDS_PER_DEGREE
  );
  return (
    String(degreesInt) +
    DEGREE +
    padZeroes(minutes) +
    "'" +
    padZeroes(seconds) +
    '"'
  );
}

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? "0" + numString : numString;
}

console.log(dms(30)); // 30°00'00"
console.log(dms(76.73)); // 76°43'48"
console.log(dms(254.6)); // 254°35'59"
console.log(dms(93.034773)); // 93°02'05"
console.log(dms(0)); // 0°00'00"
console.log(dms(360)); // 360°00'00" or 0°00'00"
*/
///////////////////////// Problem 2 - Combining Arrays ///////////////////////////////////////////

/*
Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.
*/
/*
function union(arr1, arr2) {
  const arrTotal = arr1.concat(arr2);
  const uniqueArr = [...new Set(arrTotal)];
  console.log(uniqueArr);
}
union([1, 3, 5], [3, 6, 9]); // [1, 3, 5, 6, 9]
*/
/*
function union(arr1, arr2) {
  let uniqueArr = [];
  const arr = arr1.concat(arr2);
  arr.forEach((num) => {
    if (!uniqueArr.includes(num)) {
      uniqueArr.push(num);
    }
  });
  console.log(uniqueArr);
}

union([1, 3, 5], [3, 6, 9]); // [1, 3, 5, 6, 9]
*/
///////////////////////// Problem 3 - Halvsies /////////////////////////////////////
/*
Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array
*/
/*
function halvsies(arr) {
  if (arr.length % 2 === 0) {
    const arr1 = arr.slice(0, arr.length / 2);
    const arr2 = arr.slice(arr.length / 2);
    const arrTotal = [arr1, arr2];
    console.log(arrTotal);
  } else {
    const x = arr.slice(0, arr.length / 2 + 1);
    const y = arr.slice(arr.length / 2 + 1);
    const arrTotal2 = [x, y];
    console.log(arrTotal2);
  }
}

halvsies([1, 2, 3, 4]); // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]); // [[1, 5, 2], [4, 3]]
halvsies([5]); // [[5], []]
halvsies([]); // [[], []]
*/
///////////////////////// Problem 4 - Find the Duplicate /////////////////////////////////////

/*
Given an unordered array and the information that exactly one value in the array occurs twice (every other value occurs exactly once), determine which value occurs twice. Write a function that will find and return the duplicate value that is in the array.
*/
/*
function findDup(arr) {
  let result = [];
  arr.sort();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === arr[i]) {
      result.push(arr[i]);
    }
  }
  return result.join();
}

findDup([1, 5, 3, 1]); // 1
console.log(
  findDup([
    18, 9, 36, 96, 31, 19, 54, 75, 42, 15, 38, 25, 97, 92, 46, 69, 91, 59, 53,
    27, 14, 61, 90, 81, 8, 63, 95, 99, 30, 65, 78, 76, 48, 16, 93, 77, 52, 49,
    37, 29, 89, 10, 84, 1, 47, 68, 12, 33, 86, 60, 41, 44, 83, 35, 94, 73, 98,
    3, 64, 82, 55, 79, 80, 21, 39, 72, 13, 50, 6, 70, 85, 87, 51, 17, 66, 20,
    28, 26, 2, 22, 40, 23, 71, 62, 73, 32, 43, 24, 4, 56, 7, 34, 57, 74, 45, 11,
    88, 67, 5, 58,
  ])
); // 73
*/
///////////////////////// Problem 5 - Combine Two Lists /////////////////////////////////////
/*
function interleave(arr1, arr2) {
  let arr = [];
  for (let i = 0; i < arr2.length; i++) {
    arr.push(arr1[i], arr2[i]);
  }
  console.log(arr);
}

interleave([1, 2, 3], ["a", "b", "c"]); // [1, "a", 2, "b", 3, "c"]
*/

///////////////////////// Problem 6 - Multiplicative Average /////////////////////////////////////
/*
Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.
*/
/*
function multiplicativeAverage(arr) {
  const mulAvg = arr.reduce((num, curr) => num * curr);
  const result = (mulAvg / arr.length).toFixed(3);
  console.log(result);
}

multiplicativeAverage([3, 5]); // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]); // "28361.667"
*/
///////////////////////// Problem 7 -  Multiply Lists/////////////////////////////////////
/*
Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.
*/
/*
function multiplyList(arr1, arr2) {
  let arr = [];
  for (let i = 0; i < arr2.length; i++) {
    arr.push(arr1[i] * arr2[i]);
  }
  console.log(arr);
}

multiplyList([3, 5, 7], [9, 10, 11]); // [27, 50, 77]
*/
///////////////////////// Problem 8 -  List of Digits /////////////////////////////////////
/*
Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.
*/
/*
function digitList(num) {
  num = num.toString();
  let arr = [];
  for (let i = 0; i < num.length; i++) {
    arr.push(Number(num[i]));
  }
  console.log(arr);
}

digitList(12345); // [1, 2, 3, 4, 5]
digitList(7); // [7]
digitList(375290); // [3, 7, 5, 2, 9, 0]
digitList(444); // [4, 4, 4]
*/

///////////////////////// Problem 9 -  How Many? /////////////////////////////////////
/*
Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").
*/
/*
let vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "motorcycle",
  "car",
  "truck",
];

function countOccurrences(arr) {
  let car = 0;
  let truck = 0;
  let SUV = 0;
  let motorcycle = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "car") {
      car++;
    } else if (arr[i] === "truck") {
      truck++;
    } else if (arr[i] === "SUV") {
      SUV++;
    } else {
      motorcycle++;
    }
  }
  console.log(
    `car => ${car}\ntruck => ${truck}\nSUV => ${SUV}\nmotorcycle => ${motorcycle}`
  );
}

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
*/
///////////////////////// Problem 10 -  Array Average /////////////////////////////////////
/*
Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.
*/
/*
function average(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr);
  console.log(Math.floor(sum / arr.length));
}

average([1, 5, 87, 45, 8, 8]); // 25
average([9, 47, 23, 95, 16, 52]); // 40
*/

///////////////////////// Problem 11 - After Midnight (Part 1) ////////////////////////////////
/*
The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

You may not use javascript's Date class methods.
*/
/*
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
*/
