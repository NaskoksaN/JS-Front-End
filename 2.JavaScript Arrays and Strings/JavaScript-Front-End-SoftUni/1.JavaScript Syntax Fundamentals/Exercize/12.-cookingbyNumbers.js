function solve (number , ...args){
    let tempNumber = parseInt(number);
    
    for (let i=0; i<args.length; i++){
        switch(args[i]) {
            case 'chop': 
                tempNumber /=2;
                break;
            case 'dice':
                tempNumber=Math.sqrt(tempNumber);
                break;
            case 'spice':
                tempNumber+=1;
                break;
            case 'bake':
                tempNumber*=3;
                break;
            case 'fillet' : 
                tempNumber *=0.80;
                break;
        }
        console.log(tempNumber);
    }
}

//solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');