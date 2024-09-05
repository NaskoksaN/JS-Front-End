function printCarWashLevel(args){
    
    let sum=0;
    args.forEach(element => {
        switch(element){
            case'soap': 
                sum+=10;
                break;
            case 'water':
                sum+=sum*0.20;
                break;
            case 'vacuum cleaner':
                sum+=sum*0.25;
                break;
            case 'mud':
                sum-=sum*0.1;
                break;
        }
    });
   
    console.log(`The car is ${sum.toFixed(2)}% clean.`);
}

printCarWashLevel(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
printCarWashLevel(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
