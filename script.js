const numb1 = document.getElementById("number1");
const numb2 = document.getElementById("number2");
const button = document.getElementById("result-btn");
const result = document.getElementById("view-result");
const operation = document.getElementById("operation");



const math = () => {
  let num1 = numb1.value;
  let num2 = numb2.value;

  let numb1value = Number(num1);
  let numb2value = Number(num2);

  let operator = operation.value;

  if (operator == "") {
    alert("choose an operation!");
  } else {
    if (operator == "add") {
      var finalResult = numb1value + numb2value;
      return (result.innerHTML = finalResult);
    }
    if (operator == "subtract") {
      var finalResult = numb1value - numb2value;
      return (result.innerHTML = finalResult);
    }
    if (operator == "multiply") {
      var finalResult = numb1value * numb2value;
      return (result.innerHTML = finalResult);
    }
    if (operator == "divide") {
      var finalResult = numb1value / numb2value;
      return (result.innerHTML = finalResult);
    }
  }
}


button.addEventListener("click", function(e) {
    e.preventDefault();
    math();
  });