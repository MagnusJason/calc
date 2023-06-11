// Operator functions

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(num1, num2, operator) {
  switch(operator) {
      case "+":
      return add(num1, num2);
      case "-":
      return subtract(num1, num2);
      case "*":
      return multiply(num1, num2);
      case "/":
      return divide(num1, num2);
      default:
      return null;
  }
}

let displayValue = "";

document.querySelectorAll(".number").forEach(button => {
  button.addEventListener("click", () => {
      if (displayValue === "0") {
          displayValue = button.textContent;
      } else if (displayValue === "-0") {
          displayValue = "-" + button.textContent;
      } else {
          displayValue += button.textContent;
      }
      document.getElementById("display").textContent = displayValue;
  });
});

document.querySelectorAll(".decimal").forEach(button => {
  button.addEventListener("click", () => {
      let lastOperatorIndex = displayValue.search(/[-+*/]/g);
      if (lastOperatorIndex >= 0 && !displayValue.slice(lastOperatorIndex + 1).includes(".")) {
          displayValue += ".";
      } else if (lastOperatorIndex < 0 && !displayValue.includes(".")) {
          displayValue += ".";
      }
      document.getElementById("display").textContent = displayValue;
  });
});

document.querySelectorAll(".operator").forEach(button => {
  button.addEventListener("click", () => {
      if (displayValue !== "" && !isNaN(displayValue.slice(-1))) {
          displayValue += ` ${button.value} `;
      }
      document.getElementById("display").textContent = displayValue;
  });
});

document.querySelector(".clear").addEventListener("click", () => {
  displayValue = "";
  document.getElementById("display").textContent = displayValue;
});

document.querySelector(".delete").addEventListener("click", () => {
  if (displayValue !== "") {
      displayValue = displayValue.slice(0, -1);
      document.getElementById("display").textContent = displayValue;
  }
});

document.querySelector(".equals").addEventListener("click", () => {
  let parts = displayValue.match(/^\s*(-?\d*\.?\d+)\s*([-+*/])\s*(-?\d*\.?\d+)\s*$/);
  if (parts) {
      let num1 = parseFloat(parts[1]);
      let operator1 = parts[2];
      let num2 = parseFloat(parts[3]);
      let result1 = operate(num1, num2, operator1); /*add-on*/
      displayValue = result1.toString();
      document.getElementById("display").textContent = displayValue;
  }
});