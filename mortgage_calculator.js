// Problem
/*
-Ask the user for 3 pieces of information:
1) The loan amount
2)The APR
3)the loan duration
-How do we verify all the users data information?
create a function that checks:
1) if it a number
2)clears all of the non numerical values
3)clears any spaces
- Calculate these two things:
1. Monthly interest rate
2. loan duration in months
*/
// Validation function

function isValidNumber(num) {
  return num.trimStart() === "" || num < 0 || Number.isNaN(Number(num));
}
function isValidYear(num) {
  return num <= 0;
}

while (true) {
  let loanAmount = prompt("What is you loan amount?");
  while (isValidNumber(loanAmount)) {
    loanAmount = prompt("Not a valid number....please try again!");
  }
  let APR = prompt("What is your APR %\n Example: 5 for 5% or 2.5 for 2.5%");
  while (isValidNumber(APR)) {
    APR = prompt("Not a valid number....please try again!");
  }
  let loanDuration = Math.round(
    prompt("What is your loan duration (in years)")
  ).toString();

  while (isValidNumber(loanDuration) || isValidYear(loanDuration)) {
    loanDuration = prompt("Not a valid number....please try again!");
  }

  const aprDecimal = APR / 100;
  const loanDurationinMonths = loanDuration * 12;
  const monthlyInterestRate = Number(aprDecimal / 12);

  let monthlyPayments;
  if (monthlyInterestRate === 0) {
    monthlyPayments = loanAmount / loanDurationinMonths;
  } else {
    monthlyPayments =
      loanAmount *
      (monthlyInterestRate /
        (1 - Math.pow(1 + monthlyInterestRate, -loanDurationinMonths)));
  }
  console.log(`Your monthly payments are: ${monthlyPayments.toFixed(2)}`);

  let answer = prompt(
    "Would you like to perform another calculation?"
  ).toLowerCase();
  while (answer[0] !== "n" && answer[0] !== "y") {
    answer = prompt('Must enter "y" or "n"').toLowerCase();
  }
  if (answer[0] === "n") {
    console.log("Ok Goodbye =^.^=");
    break;
  }
}
