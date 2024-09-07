function subtract() {
    const numbOneEl = document
        .querySelector('input:first-of-type')
        .value;
    const numbTwoEl = document
        .querySelector('input:last-of-type')
        .value;
    const resultEl = document
        .querySelector('#wrapper div');
    const result = Number(numbOneEl)-Number(numbTwoEl);
    resultEl.textContent = String(result);    
    //console.log(numbOneEl );
    //console.log(numbTwoEl);
}