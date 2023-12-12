// Should add numbers only without any texts.
// Then It should equal with the card # 1 which is deposite

const depositEl = document.querySelector("#depositInput");
const debitedEl = document.querySelector("#debitedInput");
const intraEl = document.querySelector("#intraInput");

// Buttons Added. 
const depositBtn = depositEl.nextElementSibling;
const debitedBtn = debitedEl.nextElementSibling;
const intraBtn = intraEl.nextElementSibling;

let depositAmountEl = document.querySelector("#depositAmount");


depositBtn.addEventListener("click", () => {
  // console.log(typeof depositEl.value);
  let depositElNum = parseInt(depositEl.value)
  let depositAmountNum = parseInt(depositAmountEl.textContent);
  const finalOutput = depositElNum + depositAmountNum;
  depositAmountEl.textContent = finalOutput;

  if(depositElNum){
    confirm(`You want to deposit ${depositElNum}`)
  }
})













// ! Vasanth's Suggestion on Concat the empty string + Number
// depositBtn.addEventListener("click", () => {
//   // let depositAmountConvert = 0;
//   if (depositAmountEl.innerText.trim() === '') {
//     let depositAmountConvert = 0;
//   } else {
//     let depositAmountConvert = parseInt(depositAmountEl.innerText);
//   };

//   const convertDepositEl = parseInt(depositEl.value);
//   const finalDepositedAmount = depositAmountConvert + convertDepositEl;
//   depositAmountEl.innerText = finalDepositedAmount;
  
// });

