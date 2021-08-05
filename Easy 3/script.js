///////////////////////////////// Problem 1 - ddaaiillyy ddoouubbllee
///////////////////////////////////////////////
/*
Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.
*/
/*
function crunch(str) {
  let str1 = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) str1 += str[i];
  }
  return str1;
}
console.log(crunch("ddaaiillyy ddoouubbllee"));
console.log(crunch("4444abcabccba"));
console.log(crunch("ggggggggggggggg"));
console.log(crunch("a"));
console.log(crunch(""));
*/
///////////////////////////////// Problem 2 - Bannerizer//////////////////////////////////////////////

/* Write a function that will take a short line of text, and write it to the console log within a box.
 */
/*
function logInBox(str) {
  const dash = `+${"-".repeat(str.length + 2)}+`;
  const space = `|${" ".repeat(str.length + 2)}|`;
  console.log(dash);
  console.log(space);
  console.log(`| ${str} |`);
  console.log(space);
  console.log(dash);
}

logInBox("To boldly go where no one has gone before.");
logInBox("");
logInBox("LalA");
*/
///////////////////////////////// Problem 3 - Stringy Strings////////////////////////////////////////

/*
Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.
*/
/*
function stringy(int) {
  let str = "";
  for (let i = 0; i < int; i++) {
    let num = i % 2 === 0 ? 1 : 0;
    str += num;
  }

  console.log(str);
}

stringy(6); // "101010"
stringy(9); // "101010101"
stringy(4); // "1010"
stringy(7); // "1010101"
*/
///////////////////////// Problem 4 - Fibonacci Number Location By Length//////////////////////////
/*


*/
function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = first + second;
    count += 1n;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return count;
}

findFibonacciIndexByLength(2n) === 7n; // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n; // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
// findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.
////////////////////////////////// Problem 5 - Right Triangles ////////////////////////////////////
/*
Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.
*/
/*
function triangle(num) {
  const star = "*";

  for (let i = 1; i <= num; i++) {
    let str = "";
    str += star.repeat(i);
    console.log(str.padStart(num, " "));
  }
}

triangle(5);
triangle(9);
*/

////////////////////////////////// Problem 6  - Madlibs ////////////////////////////////////
/*
Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.
*/
/*
const noun = prompt(`Enter a noun:`);
const verb = prompt(`Enter a verb:`);
const adjective = prompt(`Enter an adjective:`);
const adverb = prompt(`Enter an adverb:`);

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!
`);
*/

////////////////////////////////// Problem 7  - Double Doubles ////////////////////////////////////
/*
A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.
*/
/*
function twice(num) {
  num = num.toString();
  if (num.slice(0, num.length / 2) === num.slice(num.length / 2)) {
    console.log(Number(num));
  } else {
    console.log(num * 2);
  }
}

twice(37); // 74
twice(44); // 44
twice(334433); // 668866
twice(444); // 888
twice(107); // 214
twice(103103); // 103103
twice(3333); // 3333
twice(7676); // 7676
*/
////////////////////////////////// Problem 8  - Grade Book ////////////////////////////////////
/*
Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.
*/
/*
function getGrade(num1, num2, num3) {
  const sum = num1 + num2 + num3;
  const avg = Math.floor(sum / 3);
  if (avg >= 90 && avg <= 100) {
    console.log("A");
  } else if (avg >= 80 && avg < 90) {
    console.log("B");
  } else if (avg >= 70 && avg < 80) {
    console.log("C");
  } else if (avg >= 60 && avg < 70) {
    console.log("D");
  } else {
    console.log("F");
  }
}

getGrade(95, 90, 93); // "A"
getGrade(50, 50, 95); // "D"
*/

////////////////////////////////// Problem 9 - Clean up the words ////////////////////////////////////
/*
Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).


*/
/*
function cleanUp(str) {
  console.log(str.replace(/\W/g, " ").replace(/ +(?= )/g, ""));
}

cleanUp("---what's my +*& line?"); // " what s my line "
*/

/////////////////// Problem 10 - What Century is That? ////////////////////////////////////
/*
Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.
*/
/*
function century(num) {
  let count = 0;
  for (let i = 1; i <= num; i += 100) {
    count++;
  }
  count = count.toString();
  if (count.slice(-2) === "12") {
    console.log(`${count}th`);
  } else if (count.slice(-2) === "11") {
    console.log(`${count}th`);
  } else if (count.slice(-2) === "13") {
    console.log(`${count}th`);
  } else if (count.slice(-1) === "2") {
    console.log(`${count}nd`);
  } else if (count.slice(-1) === "3") {
    console.log(`${count}rd`);
  } else if (count.slice(-1) === "1") {
    console.log(`${count}st`);
  } else {
    console.log(`${count}th`);
  }
}

century(2000); // "20th"
century(2001); // "21st"
century(1965); // "20th"
century(256); // "3rd"
century(5); // "1st"
century(10103); // "102nd"
century(1052); // "11th"
century(1127); // "12th"
century(11201); // "113th"
*/
