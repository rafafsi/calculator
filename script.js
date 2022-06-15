var numb1 = document.getElementById("number1");
var numb2 = document.getElementById("number2");
var button = document.getElementById("result-btn");
var result = document.getElementById("view-result");

button.addEventListener("click", function (e) {
  e.preventDefault();
});

button.addEventListener("click", math);

function math() {
  var num1 = numb1.value;
  var num2 = numb2.value;

  var numb1value = Number(num1);
  var numb2value = Number(num2);

  var operator = operation.value;

  if (operator == "") {
    alert("choose the operation!");
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