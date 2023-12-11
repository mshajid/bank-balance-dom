const depositEl = document.querySelector("#depositInput");
const debitedEl = document.querySelector("#debitedInput");
const intraEl = document.querySelector("#intraInput");

const depositBtn = depositEl.nextElementSibling;

// Should add numbers only without any texts.
depositBtn.addEventListener("click", () => {
  console.log(depositEl.value);
});

// Then It should equal with the card # 1 which is deposited.
