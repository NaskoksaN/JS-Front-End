function printCharInRange(charA, charB){
    const charFirstValue = charA.charCodeAt(0);
    const charSecondValue = charB.charCodeAt(0);
    let arrayRange=new Array();
    const startIndex = Math.min(charFirstValue,charSecondValue);
    const endIndex = Math.max(charFirstValue,charSecondValue);
    
    function returnArrayWithChars(start, end){
        let result=new Array();
        for (let index = startIndex+1; index < endIndex; index++) {
            result.push(String.fromCharCode(index));       
        }
        return result;
    }
    
    arrayRange=returnArrayWithChars(startIndex,endIndex);
    console.log(arrayRange.join(' '));
}

printCharInRange('a',
    'd'
);
printCharInRange('#',
    ':'
);
printCharInRange('C',
    '#'
);