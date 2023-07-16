function updateCaseQuantityById(isIncrease) {
  const caseNumber = document.getElementById("case-number");
  const caseNumberString = caseNumber.value;
  const caseQuantity = parseInt(caseNumberString);
  let newCaseQuantity;

  if (isIncrease === true) {
    newCaseQuantity = caseQuantity + 1;
  } else {
    newCaseQuantity = caseQuantity - 1;
  }

  if (newCaseQuantity < 0) {
    alert("Case number must not be less than zero (0)!");
    return false;
  }
  // In JavaScript “0” is equal to false because “0” is of type string but when it tested for equality the automatic type conversion of JavaScript comes into effect and converts the “0” to its numeric value which is 0 and as we know 0 represents false value. So, “0” equals to false.

  caseNumber.value = newCaseQuantity;
  return newCaseQuantity;
}

function casePriceTotalById(increaseOrDecrease) {
  const caseTotalPrice = increaseOrDecrease * 59;
  const caseTotalElement = document.getElementById("case-total");
  caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById("btn-plus-case").addEventListener("click", function () {
  const increaseCaseNumber = updateCaseQuantityById(true);
  casePriceTotalById(increaseCaseNumber);
});

document
  .getElementById("btn-minus-case")
  .addEventListener("click", function () {
    const decreaseCaseNumber = updateCaseQuantityById(false);
    casePriceTotalById(decreaseCaseNumber);
  });
