fetch("numbers.json")
  .then((response) => response.json())
  .then((data) => {
    const numberSelect = document.getElementById("numberSelect");
    data.numbers.forEach((number) => {
      const option = document.createElement("option");
      option.setAttribute = number;
      option.textContent = number;
      numberSelect.appendChild(option);
    });
  })
.catch((error) => console.error("Error loading JSON:", error));
document.getElementById("calculateBtn").addEventListener("click", () => {
const numberSelect = parseFloat(document.getElementById("numberSelect").value);
const userInput = parseFloat(document.getElementById("userInput").value);
const operation = document.querySelector('input[name="operation"]:checked').value;
let result;
if(isNaN(userInput)) {
  alert("Please enter a valid number");
 return; 
}
switch (operation) {
  case "add":
    result = numberSelect + userInput;

    break;
  case "subtract":
    result = numberSelect - userInput;

    break;
  case "multiply":
    result = numberSelect * userInput;

    break;
  case "divide":
    if (userInput === 0) {
      alert("you cant devide by 0")
      return;
    }
    result = numberSelect / userInput;
    break;

  default:
    result = 0;
    break;
}
document.getElementById("result").textContent = result;
});


