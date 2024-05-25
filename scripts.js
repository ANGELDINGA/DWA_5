const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Validation for empty inputs
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return;
  }

  // Convert input values to numbers
  const numDividend = Number(dividend);
  const numDivider = Number(divider);

  // Check for invalid numbers
  if (isNaN(numDividend) || isNaN(numDivider)) {
    console.error("Critical error: Invalid input values");
    document.body.innerHTML = "Something critical went wrong. Please reload the page";
    return;
  }

  // Check for negative divider
  if (numDivider <= 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error(new Error("Divider must be a positive number"));
    return;
  }

  // Perform division
  const divisionResult = numDividend / numDivider;

  // Display the integer part of the division result
  result.innerText = Math.floor(divisionResult);
});
