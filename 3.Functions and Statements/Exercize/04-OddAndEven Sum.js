function oddAndEvenSum(input){
    function returnEvenOddNumbers(x){
        let number = Number(input);
        let oddArr=new Array();
        let evenArr=new Array();
        while(number>0){
            let temp=number%10;
            if(temp % 2==0){
                evenArr.push(temp);
            } else {
                oddArr.push(temp);
            }
            number=parseInt(number/10);
        }
        return[evenArr, oddArr];
    }
    const [evenArray, oddArray] = returnEvenOddNumbers(input);

    function sumArrayDigits(inputArray){
        let sum=0;
        inputArray.forEach(element => {
            sum+=element;
        });
        return sum;
    }
    let oddSum=sumArrayDigits(oddArray);
    let evenSum=sumArrayDigits(evenArray);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);