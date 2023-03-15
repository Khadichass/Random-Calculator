"use script";

let num1 = document.getElementById("min");
let num2 = document.getElementById("max");
let input1 = document.getElementById("input");
let button = document.getElementById("button");
let symbol1 = document.getElementById("symbol");
let randomNum1 = Math.floor(Math.random() * 100 + 1);
let randomNum2 = Math.floor(Math.random() * 100 + 1);
let random3 = Math.floor(Math.random() * 4 + 1);
num1.textContent = randomNum1;
num2.textContent = randomNum2;
let symbol = "";

if (random3 == 1) {
  symbol = "+";
} else if (random3 == 2) {
  symbol = "-";
} else if (random3 == 3) {
  symbol = "/";
} else if (random3 == 4) {
  symbol = "*";
}
symbol1.textContent = symbol;

button.addEventListener("click", function () {
  sum = randomNum1 + randomNum2;
  minus = randomNum1 - randomNum2;
  div = randomNum1 / randomNum2;
  mult = randomNum1 * randomNum2;

  if (sum == input1.value) {
    alert("True");
  } else if (sum !== input1.value) {
    alert("False");
  } else if (minus == input1.value) {
    alert("True");
  } else if (minus !== input1.value) {
    alert("False");
  } else if (div == input1.value) {
    alert("True");
  } else if (div !== input1.value) {
    alert("False");
  } else if (mult == input1.value) {
    alert("True");
  } else if (mult !== input1.value) {
    alert("False");
  }
});
