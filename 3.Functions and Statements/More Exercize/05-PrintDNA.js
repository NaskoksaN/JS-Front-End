function printDna(inputNumber){
    const dnaChain='ATCGTTAGGG';
    let workChain =dnaChain;
    if(inputNumber>5){
        let multiplicate = Math.ceil(inputNumber / 5);
        workChain=dnaChain.repeat(multiplicate);
    }
    workChain=workChain.split('');
   
    function dnaSampleReturn(position, elementA, elementB) {
        switch (position) {
            case 0:
                return `**${elementA}${elementB}**`;;
            case 2: 
                return `${elementA}----${elementB}`;
            case 1:
            case 3: 
                return `*${elementA}--${elementB}*`;
        }
    }
    const num = inputNumber*2;
    cc=0;
    for (let i = 0; i < num-1; i+=2) {
        cc= (cc===4) ? cc=0 : cc;
        const result = dnaSampleReturn(cc, workChain[i], workChain[i+1]);
        console.log(result);
        cc++;   
    }
}

printDna(10);
//printDna(10);

//Write a JS program that prints a DNA helix with a length, specified by the user. 
//The helix has a repeating structure, but the symbol in the chain follows the sequence ATCGTTAGGG. 
//See the examples for more information.
//The input comes as a single number. It represents the length of the required helix.
//The output is the completed structure, printed on the console.

//**AT**
//*C--G*
//T----T
//*A--G*
