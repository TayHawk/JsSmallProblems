///////////////////////// Problem 1 - Double Char (Part 1)//////////////////////////
/*
Write a function that takes a string, doubles every character in the string, and returns the result as a new string.
*/
/*
function repeater(str) {
  str = str
    .split("")
    .map((letter) => letter + letter)
    .join("");
  console.log(str);
}

repeater("Hello"); // "HHeelllloo"
repeater("Good job!"); // "GGoooodd  jjoobb!!"
repeater(""); // ""
*/
///////////////////////// Problem 2 - Double Char (Part 2)//////////////////////////
/*
Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.
*/
/*
function doubleConsonants(string) {
  const CONSONANTS = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let stringArray = [];
  for (let idx = 0; idx < string.length; idx += 1) {
    stringArray.push(string[idx]);
    if (CONSONANTS.indexOf(string[idx].toLowerCase()) >= 0) {
      stringArray.push(string[idx]);
    }
  }

  return stringArray.join("");
}

console.log(doubleConsonants("String")); // "SSttrrinngg"
// doubleConsonants("Hello-World!"); // "HHellllo-WWorrlldd!"
// doubleConsonants("July 4th"); // "JJullyy 4tthh"
// doubleConsonants(""); // ""
*/

// OR
/*
const doubleConsonants = (str) => str.replace(/[^\Waeiou\d_]/g, "$&$&");

console.log(doubleConsonants("Hello-World!")); // "HHellllo-WWorrlldd!"
// doubleConsonants("July 4th"); // "JJullyy 4tthh"
// doubleConsonants(""); // ""
*/
/*
[] Match any character that matches any value inside the brackets.
^ If inside the brackets, then match any character that does not match a value inside the brackets. So exclude:
\W Any non-word character, equivalent to [^a-zA-Z0-9_].
aeiou Vowels.
\d digits.
_ Literal underscore character.
/g Return all matches of the regex rather than just the first one
*/
///////////////////////// Problem 3 - Reverse Number///////////////////////////////////////////
/*
Write a function that takes a positive integer as an argument and returns that number with its digits reversed.
*/
/*
function reverseNumber(num) {
  num = num.toString();
  num = num.split("").reverse().join("");
  num = Number(num);
  console.log(num);
}

reverseNumber(12345); // 54321
reverseNumber(12213); // 31221
reverseNumber(456); // 654
reverseNumber(12000); // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1); // 1
*/
///////////////////////// Problem 4 - Get The Middle Character/////////////////////////////////////////////
/*
Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.
*/
/*

function centerOf(str) {
  if (str.length === 1) {
    console.log(str);
  } else if (str.length % 2 === 1) {
    const middle = str.slice(str.length / 2, -str.length / 2);
    console.log(middle);
  } else {
    const middle = str.slice(str.length / 2 - 1, -str.length / 2 + 1);
    console.log(middle);
  }
}

centerOf("I Love JavaScript"); // "a"
centerOf("Launch School"); // " "
centerOf("Launch"); // "un"
centerOf("Launchschool"); // "hs"
centerOf("x"); // "x"
*/
///////////////////////// Problem 5 - Always Return Negative/////////////////////////////////////////////
/*
Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.
*/
/*
function negative(num) {
  return Math.abs(num) === num ? -num : num;
}

console.log(negative(5)); // -5
console.log(negative(-3)); // -3
console.log(negative(0)); // -0
*/
///////////////////////// Problem 6 - Counting Up/////////////////////////////////////////////
/*
Write a function that takes an integer argument and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.
*/
/*
function sequence(num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  console.log(arr);
}

sequence(5); // [1, 2, 3, 4, 5]
sequence(3); // [1, 2, 3]
sequence(1); // [1]
*/
///////////////////////// Problem 7 - Name Swappin/////////////////////////////////////////////////////////
/*
Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.
*/
/*
function swapName(str) {
  str = str.split(" ");
  console.log(`${str.pop()}, ${str.join(" ")}`);
}

//swapName("Joe Roberts"); // "Roberts, Joe"
swapName("Karl Oskar Henriksson Ragvals"); // "Ragvals, Karl Oskar Henriksson"
swapName("Taylor simone Hockley");
*/

///////////////////////// Problem 8 - Sequence Count/////////////////////////////////////////////////////////
/*
Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.

You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer. If the count is 0, the function should return an empty array.
*/
/*
function sequence(num1, num2) {
  const arr = [];
  for (let i = 1; i <= num1; i++) {
    arr.push(i * num2);
  }
  console.log(arr);
}

sequence(5, 1); // [1, 2, 3, 4, 5]
sequence(4, -7); // [-7, -14, -21, -28]
sequence(3, 0); // [0, 0, 0]
sequence(0, 1000000); // []
*/
/////////////////////////////////////////// Problem 9 - Reverse It (Part 1)/////////////////////////////////////////////////////////////////////
/*
Write a function that takes a string argument and returns a new string containing the words from the string argument in reverse order.
*/
/*
function reverseSentence(str) {
  str = str.split(" ").reverse().join(" ");
  console.log(str);
}

reverseSentence(""); // ""
reverseSentence("Hello World"); // "World Hello"
reverseSentence("Reverse these words"); // "words these Reverse"


/////////////////////////////////////////// Problem 10 - Reverse It (Part 2)/////////////////////////////////////////////////////////////////////
/*
Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.
 */
/*
function reverseWords(str) {
  str = str.split(" ");
  const reversed = str.map((word) => {
    if (word.length >= 5) {
      return word.split("").reverse().join("");
    } else {
      return word;
    }
  });
  console.log(reversed.join(" "));
}

reverseWords("Professional"); // "lanoisseforP"
reverseWords("Walk around the block"); // "Walk dnuora the kcolb"
reverseWords("Launch School"); // "hcnuaL loohcS"
*/

/////////////////////////////////////////// Problem 11 - Reversed Arrays/////////////////////////////////////////////////////////////////////
/*
Write a function that takes an Array as an argument and reverses its elements in place. That is, mutate the Array passed into this method. The return value should be the same Array object.

You may not use Array.prototype.reverse().
 */
/*
function reverse(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < array.length / 2) {
    [array[leftIndex], array[rightIndex]] = [
      array[rightIndex],
      array[leftIndex],
    ];
    leftIndex += 1;
    rightIndex -= 1;
  }
  return array;
}
*/
/*
let list = [1, 3, 2, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
*/
/////////////////////////////////////////// Problem 12 - Matching Parentheses?/////////////////////////////////////////////////////////////////////
/*
Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.
*/
/*
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
*/
