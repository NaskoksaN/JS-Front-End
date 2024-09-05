function findResult(numOne, numTwo, numThree){
    const sumCalc = (a,b) => a+b;
    const subtractCalc = (a,b) => a-b;
    const result = subtractCalc(sumCalc(numOne,numTwo),numThree )
    console.log(result);
}

findResult(23,
    6,
    10
);
findResult(1,
    17,
    30
);
findResult(42,58,
    100
);