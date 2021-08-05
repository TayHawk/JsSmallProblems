//////////////////////////////// Problem 1 - How old is Teddy? //////////////////////
/*
Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).
*/
/*
const age = Math.floor(Math.random() * 100) + 20;
console.log(`Teddy is ${age} years old!`);
*/

//////////////////// Problem 2 - Searching 101 ///////////////////////////////
/*
Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.
*/
/*
const firstNum = prompt(`Enter the 1st number:`);
const secondNum = prompt(`Enter the 2nd number:`);
const thirdNum = prompt(`Enter the 3rd number:`);
const fourthNum = prompt(`Enter the 4th number:`);
const fifthNum = prompt(`Enter the 5th number:`);
const lastNum = prompt(`Enter the last number:`);

const arr = [firstNum, secondNum, thirdNum, fourthNum, fifthNum];
if (arr.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in ${arr.join(",")}.`);
} else {
  console.log(`The number ${lastNum} does not appears in ${arr.join(",")}.`);
}
*/
//////////////////// Problem 3 - When Will I Retire? ///////////////////////////////

/*
Build a program that logs when the user will retire and how many more years the user has to work until retirement.

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

*/
/*
const age = prompt(`What is your age? `);
const retireAge = prompt(`At what age would you like to retire?`);
const year = 2021;
const retireYear = year + (retireAge - age);
console.log(`It's ${year}. You will retire in ${retireYear}.`);
console.log(`You have only ${retireAge - age} years of work to go!`);
*/

//////////////////// Problem 4 - Palindromic Strings (Part 1) ///////////////////////////////
/*
Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.
*/
/*
function isPalindrome(str) {
  if (str === str.split("").reverse().join("")) {
    console.log(true);
  } else {
    console.log(false);
  }
}
isPalindrome("madam"); // true
isPalindrome("Madam"); // false (case matters)
isPalindrome("madam i'm adam"); // false (all characters matter)
isPalindrome("356653"); // true
*/

//////////////////// Problem 5 - Palindromic Strings (Part 2) ///////////////////////////////
/*
Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.
*/
/*
function isRealPalindrome(str) {
  if (
    str.toLowerCase().replace(/\W/g, "") ===
    str.split("").reverse().join("").toLowerCase().replace(/\W/g, "")
  ) {
    console.log(true);
  } else {
    console.log(false);
  }
}
isRealPalindrome("madam"); // true
isRealPalindrome("Madam"); // true (case does not matter)
isRealPalindrome("Madam, I'm Adam"); // true (only alphanumerics matter)
isRealPalindrome("356653"); // true
isRealPalindrome("356a653"); // true
isRealPalindrome("123ab321"); // false
*/

//////////////////// Problem 6 - Palindromic Numbers ///////////////////////////////////////////
/*
Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.
*/
/*
function isPalindromicNumber(num) {
  num = num.toString();
  if (num === num.split("").reverse().join("")) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isPalindromicNumber(34543); // true
isPalindromicNumber(123210); // false
isPalindromicNumber(22); // true
isPalindromicNumber(5); // true
*/
//////////////////// Problem 7 - Running Totals ///////////////////////////////////////////
/*
Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.
*/
/*
function runningTotal(arr) {
  let runningArr = [];
  arr.reduce((acc, curr, i) => (runningArr[i] = acc + curr), 0);
  console.log(runningArr);
}

runningTotal([2, 5, 13]); // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]); // [14, 25, 32, 47, 67]
runningTotal([3]); // [3]
runningTotal([]); // []
*/

//////////////////// Problem 8 - Letter Counter (Part 1) //////////////////////////////////////////
/*
Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.
*/
/*
function wordSizes(str) {
  let obj = {};
  if (str.length === 0) return obj;
  const words = str.split(" ");
  let wordLength = words.map((word) => word.length);

  wordLength.forEach((num) => (obj[num] = obj[num] + 1 || 1));
  return obj;
}

console.log(wordSizes("Four score and seven.")); // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!")); // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes("")); // {}
*/
//////////////////// Problem 9 - Letter Counter (Part 2) //////////////////////////////////////////

/*
Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.
*/
/*
function wordSizes(str) {
  let obj = {};
  if (str.length === 0) return obj;
  const words = str.split(" ");

  let wordLength = words.map((word) => word.replace(/\W/g, "").length);

  wordLength.forEach((num) => (obj[num] = obj[num] + 1 || 1));
  return obj;
}

console.log(wordSizes("Four score and seven.")); // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!")); // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes("")); // {}
*/
/////////////////////////// Problem 10 - Letter Swap  //////////////////////////////////////////
/*
Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.
*/

function swap(str) {
  const arr = str.split(" ");
  console.log(arr);
  let swappedWords = arr.map((word) => {
    const len = word.length;
    if (len > 1) {
      word = word[len - 1] + word.substring(1, len - 1) + word[0];
    }
    return word;
  });
  const result = swappedWords.join(" ");
  console.log(result);
}
