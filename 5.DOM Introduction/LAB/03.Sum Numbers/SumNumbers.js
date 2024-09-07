function calc() {
    // TODO: sum = num1 + num2
    const num1El = document
        .getElementById('num1');
    const num2El = document
        .getElementById('num2');
    const result= document.getElementById('sum');

    const sum = Number(num1El.value) +
                Number(num2El.value);  
    //console.log(sum);
    result.value=sum;
}
