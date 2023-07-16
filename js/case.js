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
  caseNumber.value = newCaseQuantity;
  return newCaseQuantity;
}

// function casePriceTotalById() {
//   const casePerPrice = document.getElementById("case-total");
//   const casePriceTotalString = casePerPrice.innerText;
//   const casePriceTotal = parseInt(casePriceTotalString);
//   casePerPrice.innerText = casePriceTotal;
//   return casePriceTotal;
// }

document.getElementById("btn-plus-case").addEventListener("click", function () {
  const increaseCaseNumber = updateCaseQuantityById(true);

  const caseTotalPrice = increaseCaseNumber * 59;
  const caseTotalElement = document.getElementById("case-total");
  caseTotalElement.innerText = caseTotalPrice;
});

document
  .getElementById("btn-minus-case")
  .addEventListener("click", function () {
    updateCaseQuantityById(false);
  });
