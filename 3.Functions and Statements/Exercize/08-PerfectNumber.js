function printPerfectNumberMsg(inputNumber){
    const isPerfectNumbMsg = 'We have a perfect number!';
    const notPerfectNumbMsg = 'It\'s not so perfect.';
    if (inputNumber < 0) {
        console.log(notPerfectNumbMsg);
        return;
    }

    function findArrWithNumbers(number){
        const half = number/2;
        let tempArr=[];
        for (let index = 0; index <= half; index++) {
            if(number%index !==0){
                continue;
            }
            tempArr.push(index);
        }
        return tempArr;
    }

    const arr=findArrWithNumbers(inputNumber);
    const sumNumb = arr.reduce((a,b)=>a+b,0);
    const result = sumNumb===inputNumber? isPerfectNumbMsg : notPerfectNumbMsg;

    console.log(result);
}

printPerfectNumberMsg(6);
printPerfectNumberMsg(28);
printPerfectNumberMsg(1236498);