function solve(numA, numB, operator){
    let result;
    switch(operator){
        case '+':
            result = numA+numB;
            break;
        case '-':
            result = numA-numB;
            break;
        case '*' :
            result = numA*numB;
            break;
        case '/' :
            result = numA/numB;
            break;
        case '%':
            result = numA%numB;
            break;
        case '**':
            result =numA**numB;
            break;
    }
    console.log(result);
}

solve(3, 5.5, '*')