function printLoadingBar(number){
    function loadingSymbols(numb, symbolOne, symbolTwo){
        let result='';
        const repeatTime=numb/10;
        const maxRepeatTime=10;
        result = `[${symbolOne.repeat(repeatTime)}${symbolTwo.repeat(maxRepeatTime-repeatTime)}]`;
        return result;
    }
    
    function resultOfLoading(percentLoading){
        const loadingMsg = 'Still loading...';
        const doneLoading ='100% Complete!';
        const visualResult = loadingSymbols(number,'%', '.')
        
        let tempArr=[];
        if(percentLoading===100){
            tempArr.push(doneLoading);
            tempArr.push(visualResult);
        }else{
            const part = `${percentLoading}% `;
            const resultLoading=part.concat(visualResult);
            tempArr.push(resultLoading);
            tempArr.push(loadingMsg);
        }
        return tempArr;
    }

    const result = resultOfLoading(number);
    result.forEach(element => {
        console.log(element);
    });

}

printLoadingBar(30);
printLoadingBar(50);
printLoadingBar(100);
printLoadingBar(0);