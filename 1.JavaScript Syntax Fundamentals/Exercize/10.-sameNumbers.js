function solve(numb){
    let tempNumb=numb;
    let sum=0;
    const number = tempNumb%10;
    tempNumb = parseInt(tempNumb/10);
    sum+=number;
    let equal=true;
    while(tempNumb>0){
        let numberToCheck = tempNumb%10;
        if(number!==numberToCheck){
            equal=false;
        }
        sum+=numberToCheck;
        tempNumb = parseInt(tempNumb/10);
    }
    let result = equal ? 'true':'false';
    console.log(result);
    console.log(sum);
}

solve(2222222);
solve(1234);