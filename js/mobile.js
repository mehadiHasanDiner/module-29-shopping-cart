function numberOfMobileUpdates(isIncreased) {
  const numberOfMobile = document.getElementById("mobile-number");
  const numberOfMobileString = numberOfMobile.value;
  const totalNumberOfMobile = parseInt(numberOfMobileString);

  let newNumberOfMobile;
  if (isIncreased === true) {
    newNumberOfMobile = totalNumberOfMobile + 1;
  } else {
    newNumberOfMobile = totalNumberOfMobile - 1;
  }
  numberOfMobile.value = newNumberOfMobile;
  return newNumberOfMobile;
}

function perMobileTotalUpdatePrice(increaseOrDecrease) {
  const perMobileTotalPrice = increaseOrDecrease * 1219;
  const mobilePrice = document.getElementById("mobile-price");
  mobilePrice.innerText = perMobileTotalPrice;
}

// plus buttons
document
  .getElementById("btn-plus-mobile")
  .addEventListener("click", function () {
    const mobileNumberIncrease = numberOfMobileUpdates(true);
    perMobileTotalUpdatePrice(mobileNumberIncrease);
  });

//   minuses button
document
  .getElementById("btn-minus-mobile")
  .addEventListener("click", function () {
    const mobileNumberDecrease = numberOfMobileUpdates(false);
    perMobileTotalUpdatePrice(mobileNumberDecrease);
  });
