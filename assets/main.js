const depositEl = document.querySelector("#depositInput");
const debitedEl = document.querySelector("#debitedInput");
const intraEl = document.querySelector("#intraInput");
const depositBtn = depositEl.nextElementSibling;

const depositAmountEl = document.querySelector("#depositAmount");

// Should add numbers only without any texts.
depositBtn.addEventListener("click", () => {
  const convertDepositEl = parseInt(depositEl.value);
  const depositAmountConvert = parseInt(depositAmountEl.textContent);
  const finalDepositedAmount = convertDepositEl + depositAmountConvert;
  
  depositAmountEl.innerHTML = finalDepositedAmount

});

// Then It should equal with the card # 1 which is deposited.
