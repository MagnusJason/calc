// Get the calculator screen elements
const storedInput = document.getElementById("stored-input");
const result = document.getElementById("result");

// Get all the calculator buttons
const buttons = document.querySelectorAll(".button");

// Add event listeners to the calculator buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.dataset.value;

    if (buttonValue === "clear") {
      storedInput.textContent = "";
      result.textContent = "";
    } else if (buttonValue === "delete") {
      storedInput.textContent = storedInput.textContent.slice(0, -1);
    } else if (buttonValue === "=") {
      const equation = storedInput.textContent;
      if (equation) {
        const answer = eval(equation);
        result.textContent = answer;
      }
    } else {
      storedInput.textContent += buttonValue;
    }
  });
});