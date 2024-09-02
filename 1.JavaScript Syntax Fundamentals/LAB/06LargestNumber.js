//function solve(num1, num2, num3){
//    let result=`The largest number is ${num1}.`;
//    let greater=num1;
//    if(num1 < num2){
//        result = `The largest number is ${num2}.`;
//        greater = num2;
//    } 
//    if (greater < num3){
//        result = `The largest number is ${num3}.`;
//    }
//    console.log(result);
//}//

function solve(num1, num2, num3){
    let result;
    if( num1>num2 && num1 > num3){
        result=`The largest number is ${num1}.`;
    } else if (num2>num1 && num2 >num3){
        result = `The largest number is ${num2}.`;
    } else if( num3 >num2 && num3>num1){
        result = `The largest number is ${num3}.`;
    }
    console.log(result);
}

solve(-3, -5, -22.5)