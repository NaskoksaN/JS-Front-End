function solve(numOne, numTwo, operator) {
    //switch(operator){
    //    case'multiply':
    //        return numOne*numTwo
    //        break;
    //    case'divide':
    //        return numOne/numTwo;
    //        break;
    //    case 'add':
    //        return numOne+numTwo;
    //        break;
    //    case 'subtract':
    //        return numOne-numTwo;
    //        break;
    //}

    const operators = ['multiply', 'divide', 'add', 'subtract'];
    const actions = [
        (a, b) => a * b,
        (a, b) => a / b,
        (a, b) => a + b,
        (a, b) => a - b,

    ]
    let index = operators.indexOf(operator);
    return actions[index](numOne, numTwo);

}

console.log(solve(5,
    5,
    'multiply'
));
console.log(solve(40,
    8,
    'divide'
));
console.log(solve(12,
    19,
    'add'
));
console.log(solve(50,
    13,
    'subtract'
));
