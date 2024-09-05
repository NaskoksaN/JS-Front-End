function factorialDivision(numberOne, numberTwo){
    function factorial(numb){
        if(numb===0 || numb ===1){
            return 1;
        } 
        return numb*factorial(numb-1);
    }
    const firstNumber = factorial(numberOne);
    const secondNumber = factorial(numberTwo);
    const result=firstNumber/secondNumber;
    console.log(result.toFixed(2));
}

factorialDivision(5,
    2
);
factorialDivision(6,
    2
);
