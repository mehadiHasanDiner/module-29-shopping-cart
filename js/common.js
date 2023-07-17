function mobileAndCaseTotal(elementId) {
  const mobileTotal = document.getElementById(elementId);
  const mobileTotalPriceString = mobileTotal.innerText;
  const mobileTotalPrice = parseFloat(mobileTotalPriceString);
  return mobileTotalPrice;
}

// সাবটোটাল, ট্যাক্স এবং গ্রান্ড টোটাল ৩টাকে একসাথে সেট করার জন্য এই ফাংশন, এই ফাংশনটা আমার কাছে খুব ভালো লেগেছে।
function setTextElementByValue(elementId, value) {
  const subTotalAmountElement = document.getElementById(elementId);
  subTotalAmountElement.innerText = value;
}

function calculateSubtotal() {
  const mobileTotal = mobileAndCaseTotal("mobile-price");
  const caseTotal = mobileAndCaseTotal("case-total");
  const subTotalAmount = mobileTotal + caseTotal;
  setTextElementByValue("sub-total", subTotalAmount);

  const setTexAmount = (subTotalAmount * 0.1).toFixed(2);
  const totalTaxAmount = parseFloat(setTexAmount);
  setTextElementByValue("tax-amount", setTexAmount);

  const grandTotal = totalTaxAmount + subTotalAmount;
  setTextElementByValue("grand-total", grandTotal);
}
