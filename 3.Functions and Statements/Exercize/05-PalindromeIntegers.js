function printPalindromeStatus(inputNumbers){
    
    function reverseNumber(numb){
        let arr=numb.toString();
        return arr.split('').reverse().join('');
    }
    
    for (let index = 0; index < inputNumbers.length; index++) {
        const reversed= reverseNumber(inputNumbers[index] );
        let isPalindrome = inputNumbers[index].toString() == reversed ? true : false;
        console.log(isPalindrome);
    }
}

printPalindromeStatus([123,323,421,121]);
printPalindromeStatus([32,2,232,1010]);
