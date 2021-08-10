alert("Welcome to the Mortgage Calculator!");

function isInvalidNumber(num) {
  return num.trimStart() === "" || num < 0 || Number.isNaN(Number(num));
}
function isInvalidYear(num) {
  return num <= 0;
}

function getLoan() {
  let loanAmount = prompt(
    "What is you loan amount?\n Example: 20000 for $20,000"
  );
  while (isInvalidNumber(loanAmount)) {
    loanAmount = prompt(
      "Not a valid number....please try again!\n Please no $ or , or ."
    );
  }
  return loanAmount;
}

function getApr() {
  let apr = prompt("What is your APR %\n Example: 5 for 5% or 2.5 for 2.5%");
  while (isInvalidNumber(apr)) {
    apr = prompt("Not a valid number....please try again!");
  }
  return apr;
}

function getLoanDuration() {
  let loanDuration = prompt("What is your loan duration (in years)").toString();

  while (isInvalidNumber(loanDuration) || isInvalidYear(loanDuration)) {
    loanDuration = prompt("Not a valid number....please try again!");
  }
  return loanDuration;
}

function getMonthlyPayments() {
  let monthlyPayments;
  if (monthlyInterestRate === 0) {
    return (monthlyPayments = loanAmount / loanDurationinMonths);
  } else {
    return (monthlyPayments =
      loanAmount *
      (monthlyInterestRate /
        (1 - Math.pow(1 + monthlyInterestRate, -loanDurationinMonths))));
  }
}

function response() {
  answer = prompt(
    "Would you like to perform another calculation?\n  'y' for yes or  'n' for no."
  ).toLowerCase();

  while (answer !== "y" && answer !== "n") {
    answer = prompt('Please enter a valid response: "y" or "n"').toLowerCase();
  }

  return answer;
}

let monthlyInterestRate;
let loanDurationinMonths;
let loanAmount;
let apr;
let aprDecimal;
let loanDuration;
let answer;
let monthlyPayments;

do {
  loanAmount = getLoan();
  apr = getApr();
  aprDecimal = apr / 100;
  monthlyInterestRate = Number(aprDecimal / 12);
  loanDuration = getLoanDuration();
  loanDurationinMonths = loanDuration * 12;
  monthlyPayments = getMonthlyPayments();

  alert(
    `Your loan amount is:$${loanAmount}\n Your APR is: ${apr}%\n Your loan duration in years is: ${loanDuration}\nYour monthly payments are: $${monthlyPayments.toFixed(
      2
    )}`
  );
  answer = response();
  if (answer === "n") {
    alert(
      "Ok Goodbye 🤙\n\nThank you for using the Mortgage Calculator app 😁"
    );
    break;
  }
} while (answer === "y");
