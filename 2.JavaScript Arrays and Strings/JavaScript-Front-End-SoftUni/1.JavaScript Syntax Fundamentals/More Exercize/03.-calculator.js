function solve (numbA, operator, numbB){
    let result=0;
    switch(operator){
        case '+':
            result=numbA+numbB;
            break;
        case '-':
            result=numbA-numbB;
            break;
        case '*':
            result=numbA*numbB;
            break;
        case '/' :
            result =numbA/numbB;
            break;
    }
    console.log(result.toFixed(2));
}

solve(5,
    '+',
    10
    );
solve(25.5,
    '-',
    3
    );