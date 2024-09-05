function printNumberModification(inputNumber){
    let tempNumber = inputNumber
    function getAverageDigits(number){
        const digits= number.toString().split('').map(x=>Number(x));
        const sum = digits.reduce((a,b)=> a+b,0);
        return sum/digits.length;
    }
    const symbols='9';
    let temp = getAverageDigits(inputNumber);
    while(temp<=5){
        tempNumber = tempNumber.toString().concat(symbols);
        temp = getAverageDigits(tempNumber);
    }

    console.log(tempNumber);
}

printNumberModification(101);
printNumberModification(5835);