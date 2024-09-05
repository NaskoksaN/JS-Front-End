function passwordValidator(input){
    const password = input;
    const notValidLengthMsg = 'Password must be between 6 and 10 characters';
    const notLetterNadDigitsMsg ='Password must consist only of letters and digits';
    const twoOrMoreDigitsMsg = 'Password must have at least 2 digits';
    const validPasswordMsg='Password is valid';
    
    function checkLength(password){
        return password.length>=6 && password.length<=10;
    }
    function checkLetterAndDigits(password){
        const pattern = /^[A-Za-z0-9]+$/g;
        return pattern.test(password);
    }
    function checkTwoNumbersMinimum(password){
        const pattern=/[0-9]{2,}/g
        return pattern.test(password);
    }

    let msg=[];
    if(!checkLength(password)){
        msg.push(notValidLengthMsg);
    }
    if(!checkLetterAndDigits(password)){
        msg.push(notLetterNadDigitsMsg);
    }
    if(!checkTwoNumbersMinimum(password)){
        msg.push(twoOrMoreDigitsMsg);
    }
    if(msg.length===0){
        msg.push(validPasswordMsg)
    }

    msg.forEach(element => 
        console.log(element)
    );
    
}

//passwordValidator('logIn');
//passwordValidator('MyPass123');
passwordValidator('Pa$s$s');


