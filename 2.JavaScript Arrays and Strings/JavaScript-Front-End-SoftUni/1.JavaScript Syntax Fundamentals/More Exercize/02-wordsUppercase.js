function solve(input){
    let regex = /[\W]+/g; 
    let sanitizedInput = input.replace(regex, ' ').trim();
    let args = sanitizedInput.split(' ');
   
    //let result = args.map(word => word.toUpperCase()).join(', ');
    let result='';
    for (let i=0; i<args.length; i++){
        if(args.length===1 || i===args.length-1){
            result+=args[i].toUpperCase();
        } else {
            result+=`${args[i].toUpperCase()}, `
        }
    }

    console.log(result);
}

solve('Hi, how are you?'); // Output: "HI, HOW, ARE, YOU"
solve('hello'); // Output: "HELLO"
solve('   Hi,  how    are   you?   '); // Output: "HI, HOW, ARE, YOU"
solve('one, two, three!'); // Output: "ONE, TWO, THREE"
solve('  '); // Output: ""