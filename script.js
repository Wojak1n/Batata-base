fetch("numbers.json")
  .then((response) => response.json())
  .then((data) => {
    const numberSelect = document.getElementById("numberSelect");
    data.numbers.forEach((number) => {
      const option = document.createElement("option");
      option.value = number;
      option.textContent = number;
      numberSelect.appendChild(option);
    });
  })
  .catch((error) => console.error("Error loading JSON:", error));

document.getElementById("calculateBtn").addEventListener("click", () => {
  const selectedNumber = parseFloat(
    document.getElementById("numberSelect").value
  );
  const userInput = parseFloat(document.getElementById("userInput").value);
  const operation = document.querySelector(
    'input[name="operation"]:checked'
  ).value;
  let result;
  if (isNaN(userInput)) {
    alert("Please enter a valid number.");
    return;
  }
  switch (operation) {
    case "add":
      result = selectedNumber + userInput;
      break;
    case "subtract":
      result = selectedNumber - userInput;
      break;
    case "multiply":
      result = selectedNumber * userInput;
      break;
    case "divide":
      if (userInput === 0) {
        alert("Cannot divide by zero.");
        return;
      }
      result = selectedNumber / userInput;
      break;
    default:
      result = 0;
  }
  document.getElementById("result").textContent = result;
});
