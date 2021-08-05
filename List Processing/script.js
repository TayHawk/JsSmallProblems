/////////////////////////////////// Problem 1 - Sum Of Digits /////////////////////////////////////////
/*
Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.
*/
/*
function sum(num) {
  const arr = Array.from(String(num), Number);
  const sum = arr.reduce((acc, curr) => acc + curr);
  console.log(sum);
}

sum(23); // 5
sum(496); // 19
sum(123456789); // 45
*/

/////////////////////////////////// Problem 2 - Alphabetical Numbers  //////////////////////////////////////////////////////////
/*
Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:
zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen
*/
/*
function alphabeticNumberSort(arr) {
  let word = "";
  arr.map((let) => {
    switch (let) {
      case 0:
        word += `zero `;
        break;
      case 1:
        word += `one `;
        break;
      case 2:
        word += `two `;
        break;
      case 3:
        word += `three `;
        break;
      case 4:
        word += `four `;
        break;
      case 5:
        word += `five `;
        break;
      case 6:
        word += `six `;
        break;
      case 7:
        word += `seven `;
        break;
      case 8:
        word += `eight `;
        break;
      case 9:
        word += `nine `;
        break;
      case 10:
        word += `ten `;
        break;
      case 11:
        word += `eleven `;
        break;
      case 12:
        word += `twelve `;
        break;
      case 13:
        word += `thirteen `;
        break;
      case 14:
        word += `fourteen `;
        break;
      case 15:
        word += `fifteen `;
        break;
      case 16:
        word += `sixteen `;
        break;
      case 17:
        word += `seventeen `;
        break;
      case 18:
        word += `eighteen `;
        break;
      case 19:
        word += `nineteen `;
        break;
    }
  });
  const x = word.split(" ");
  const sorted = x.sort();
  const sortedArr = [];
  sorted.map((let) => {
    switch (let) {
      case `zero`:
        sortedArr.push(0);
        break;
      case `one`:
        sortedArr.push(1);
        break;
      case `two`:
        sortedArr.push(2);
        break;
      case `three`:
        sortedArr.push(3);
        break;
      case `four`:
        sortedArr.push(4);
        break;
      case `five`:
        sortedArr.push(5);
        break;
      case `six`:
        sortedArr.push(6);
        break;
      case `seven`:
        sortedArr.push(7);
        break;
      case `eight`:
        sortedArr.push(8);
        break;
      case `nine`:
        sortedArr.push(9);
        break;
      case `ten`:
        sortedArr.push(10);
        break;
      case `eleven`:
        sortedArr.push(11);
        break;
      case `twelve`:
        sortedArr.push(12);
        break;
      case `thirteen`:
        sortedArr.push(13);
        break;
      case `fourteen`:
        sortedArr.push(14);
        break;
      case `fifteen`:
        sortedArr.push(15);
        break;
      case `sixteen`:
        sortedArr.push(16);
        break;
      case `seventeen`:
        sortedArr.push(17);
        break;
      case `eighteen`:
        sortedArr.push(18);
        break;
      case `nineteen`:
        sortedArr.push(19);
        break;
    }
  });
  console.log(sortedArr);
}

alphabeticNumberSort([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
*/

/////////////////////////////////// Problem 3 - Multiply All Pairs  //////////////////////////////////////////////////////////
/*
Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.
*/
/*
function multiplyAllPairs(arr1, arr2) {
  let arr = [];
  arr1.forEach((number1) => {
    arr2.forEach((number2) => {
      arr.push(number1 * number2);
    });
  });

  arr.sort((a, b) => a - b);
  console.log(arr);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]); // [2, 4, 4, 6, 8, 8, 12, 16]
*/
/////////////////////////////////// Problem 4 - Leading Substrings  //////////////////////////////////////////////////////////
/*
Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.
*/

// function leadingSubstrings(str) {
//   let arr = [];
//   for (let i = 1; i <= str.length; i++) {
//     arr.push(str.substring(0, i));
//   }
//   return arr;
// }
/*
function leadingSubstrings(str) {
  return str.split("").map((_, i) => str.substring(0, i + 1));
}



console.log(leadingSubstrings("abc")); // ["a", "ab", "abc"]
leadingSubstrings("a"); // ["a"]
console.log(leadingSubstrings("xyzzy")); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
*/
/////////////////////////////////// Problem 5 - All Substrings  //////////////////////////////////////////////////////////
/*
Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.
*/
/*
function leadingSubstrings(str) {
  return str.split("").map((_, i) => str.substring(0, i + 1));
}
// function substrings(str) {
//   let substrings = [];
//   for (let startI = 0; startI < str.length; startI++) {
//     let substring = str.substring(startI);
//     substrings = substrings.concat(leadingSubstrings(substring));
//   }
//   return substrings;
// }

function substrings(str) {
  return str.split("").flatMap((_, i) => leadingSubstrings(str.slice(i)));
}

console.log(substrings("abcde"));
*/
/*
// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
*/
/////////////////////////////////// Problem 6 - Palindromic  //////////////////////////////////////////////////////////
/*
Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.
*/
/*
function substrings(str) {
  return str.split("").flatMap((_, i) => leadingSubstrings(str.slice(i)));
}
function leadingSubstrings(str) {
  return str.split("").map((_, i) => str.substring(0, i + 1));
}
function isPalindrome(word) {
  return word.length > 1 && word === word.split("").reverse().join("");
}

function palindromes(str) {
  return substrings(str).filter(isPalindrome);
}

console.log(palindromes("abcd")); // []
console.log(palindromes("madam")); // [ "madam", "ada" ]

palindromes("hello-madam-did-madam-goodbye");
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

//palindromes("knitting cassettes");
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
*/

/////////////////////////////////// Problem 7 - Sum of Sums  //////////////////////////////////////////////////////////
/*
Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. Examine the examples to see what we mean. You may assume that the array always contains at least one number.
*/
//Pronlem ----
// create a function that takes an array of numbers and returns the sum of the number before it.
//data structure----
// none but working with arrays
// Alogrithm-------
// 3 + 0 = 3; 3+5 = 8 ; 8 + 3 + 5 + 2 = 21;
// Which method to use?
/*
function sumOfSums(numbers) {
  return numbers
    .map((_, idx) =>
      numbers.slice(0, idx + 1).reduce((sum, value) => sum + value)
    )
    .reduce((sum, value) => sum + value);
}
console.log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3])); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4])); // 4
console.log(sumOfSums([1, 2, 3, 4, 5])); // 35
*/
/////////////////////////////////// Problem 8- Grocery List  //////////////////////////////////////////////////////////
/*

Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. The output array is such that each fruit name appears the number of times equal to its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.
*/
/*
function buyFruit(arr) {
  let list = [];
  arr.map((pair) => {
    for (let i = 0; i < pair[1]; i++) {
      list.push(pair[0]);
    }
  });
  console.log(list);
}

buyFruit([
  ["apple", 3],
  ["orange", 1],
  ["banana", 2],
]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
*/
/////////////////////////////////// Problem 9 - Inventory Item Transactions  /////////////////////////////////////////////////////////
/*
Write a function that takes two arguments, an inventory item ID and a list of transactions, and returns an array containing only the transactions for the specified inventory item.
*/
/*

let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

function transactionsFor(itemID, list) {
  const x = list.filter((item) => {
    if (item.id === itemID) {
      return item;
    }
  });
  return x;
}

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
*/
/////////////////////////////////// Problem 10 - Inventory Item Availability /////////////////////////////////////////////////////////
/*
Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

You may (and should) use the transactionsFor function from the previous exercise.
*/
/*
let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

function transactionsFor(itemID, list) {
  const x = list.filter((item) => {
    if (item.id === itemID) {
      return item;
    }
  });
  return x;
}

function isItemAvailable(id, list) {
  const y = transactionsFor(id, list);
  let post = 0;
  let sub = 0;
  for (let i = 0; i < y.length; i++) {
    if (y[i].movement === "in") {
      post += y[i].quantity;
    } else if (y[i].movement === "out") {
      sub -= y[i].quantity;
    }
  }
  const total = post + sub;
  console.log(total > 0 ? true : false);
}

isItemAvailable(101, transactions); // false
isItemAvailable(103, transactions); // false
isItemAvailable(105, transactions); // true
*/
