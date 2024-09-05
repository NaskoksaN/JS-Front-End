function findSmallestNumber(numOne, numTwo, numThree){
    let result=0;
    //function compare(num1, num2,num3) {
    //    let smallest=0;
    //    if (num1 <= num2 && num1 <= num3) {
    //        smallest = num1;
    //    } else if (num2 <= num3) {
    //        smallest = num2;
    //    } else {
    //        smallest = num3;
    //    }
    //    return smallest;
    //}
    function compare(num1, num2,num3) {
        const smallest = num1<=num2 && num1<=num3 ? num1 :
            num2<=num3 ? num2 : num3; 
        return smallest;
    }

    result=compare(numOne,numTwo,numThree);
    console.log(result);
}

findSmallestNumber(2,
    5,
    3
);
findSmallestNumber(2,
    2,
    2
);
findSmallestNumber(25,
    21,
    4
);