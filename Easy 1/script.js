///////////////////////////////// Problem 1 - Isn't it Odd? ///////////////////////////////////////////////

/*
Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.
*/

//let isOdd = (num) => (Math.abs(num) % 2 === 1 ? true : false);

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

///////////////////////////////////// Problem 2 - Odd Numbers ////////////////////////////////////////////

/*
Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
*/

//for (let i = 1; i < 100; i++) if (i % 2 === 1) console.log(i);

//////////////////////////////// Problem 3 - Even Numbers ////////////////////////////////////////////////

/*
Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
*/

//for (let i = 1; i < 100; i++) if (i % 2 === 0) console.log(i);

//////////////////////////// Problem 4 - How big is the room?//////////////////////////////////////////////

/*
Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.
*/

/*
let length = Number(
  prompt(`Enter the length of the room in meters:
`)
);

let width = Number(
  prompt(`Enter the width of the room in meters:
`)
);

let area = length * width;
let squareFeet = area * 10.7639;

console.log(
  `The area of the room is ${area.toFixed(
    2
  )} square meters (${squareFeet.toFixed(2)} square feet)`
);
*/

//////////////////////////// Problem 5 - Tip Calculator //////////////////////////////////////////////

/*
Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.
*/
// Collect Varibles

/*
const bill = Number(
  prompt(`What is the bill?
`)
);
const tipPercent =
  Number(
    prompt(`What is the tip percentage?
`)
  ) / 100;

const tip = bill * tipPercent;
console.log(`The tip is $${tip}.`);

console.log(`The total is $${tip + bill}.`);
*/

///////////////////////////////////// Problem 6 - Sum or Product of Consecutive Integers ////////////////////////////////////////////

/*
Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.
*/
/*
const int = Number(prompt(`Please enter an integer greater than 0:`));
console.log(int);
const answer = prompt(
  `Enter "s" to compute the sum, or "p" to compute the product:`
).toLowerCase();

if (answer === "s") {
  let sum = 0;
  for (let i = 1; i <= int; i++) {
    sum += i;
  }
  console.log(`The sum of the integers between 1 and ${int} is ${sum}`);
} else if (answer === "p") {
  let product = 1;
  for (let i = 1; i <= int; i++) {
    product *= i;
  }
  console.log(`The product of the integers between 1 and ${int} is ${product}`);
}
*/

///////////////////////////////////// Problem 7 - Short Long Short ///////////////////////////////////////////
/*
Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.
*/

/*

function shortLongShort(str1, str2) {
  if (str1.length < str2.length) {
    console.log(str1 + str2 + str1);
  } else {
    console.log(str2 + str1 + str2);
  }
}

shortLongShort("abc", "defgh"); // "abcdefghabc"
shortLongShort("abcde", "fgh"); // "fghabcdefgh"
shortLongShort("", "xyz"); // "xyz"
*/

///////////////////////////////////// Problem 8 - Leap Years (Part 1) ////////////////////////////////////////

/*

In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.

*/

/*
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year, "true");
  } else {
    console.log(year, "false");
  }
}

isLeapYear(2016); // true
isLeapYear(2015); // false
isLeapYear(2100); // false
isLeapYear(2400); // true
isLeapYear(240000); // true
isLeapYear(240001); // false
isLeapYear(2000); // true
isLeapYear(1900); // false
isLeapYear(1752); // true
isLeapYear(1700); // false
isLeapYear(1); // false
isLeapYear(100); // false
isLeapYear(400); // true

*/

///////////////////// Problem 9 - Leap Years (Part 2)////////////////////////////
/*
function isLeapYear(year) {
  if (year < 1751 && year % 4 === 0) {
    console.log(year, "true");
  } else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year, "true");
  } else {
    console.log(year, "false");
  }
}

isLeapYear(2016); // true
isLeapYear(2015); // false
isLeapYear(2100); // false
isLeapYear(2400); // true
isLeapYear(240000); // true
isLeapYear(240001); // false
isLeapYear(2000); // true
isLeapYear(1900); // false
isLeapYear(1752); // true
isLeapYear(1700); // true
isLeapYear(1); // false
isLeapYear(100); // true
isLeapYear(400); // true
*/

//////////////////////////////// Problem 10 - Multiples of 3 and 5 /////////////////////////////////////

/*
Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.
*/
/*
function multisum(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}

multisum(3); // 3
multisum(5); // 8
multisum(10); // 33
multisum(1000); // 234168
*/
///////////////////////////////////////////////////// Problem 11 - UTF-16 String Value ////////////////////////////////////////////////////////////////

/*
Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the string. (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)
*/

/*
function utf16Value(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt([i]);
  }
  console.log(sum);
}

utf16Value("Four score"); // 984
utf16Value("Launch School"); // 1251
utf16Value("a"); // 97
utf16Value(""); // 0
*/
///// Option 2
/*
function utf16Value(str) {
  let sum = 0;
  str.split("").forEach((let) => (sum += let.charCodeAt(let)));
  console.log(sum);
}

utf16Value("Four score"); // 984
utf16Value("Launch School"); // 1251
utf16Value("a"); // 97
utf16Value(""); // 0
*/
