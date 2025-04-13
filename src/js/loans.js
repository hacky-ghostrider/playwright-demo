(() => {
  'use strict'

  const applyBtn = document.getElementById('apply');

  applyBtn.addEventListener('click', () => {
    const msg = document.getElementById('message');
    msg.classList.add("alert");
    msg.innerText = 'Thank you for applying'

  })

  let input = document.getElementById('borrow');
  let period = document.getElementById('period');
  let result = document.getElementById('result');

  input.addEventListener('input', event => {
    setTimeout(displayResult, 3000);
  });

  period.addEventListener('change', event => {
    setTimeout(displayResult, 3000);
  });

  function displayResult() {
    let sum = input.value;
    result.removeAttribute("style");
    result.innerText = `You will learn ${sum}`;
  }

})()
