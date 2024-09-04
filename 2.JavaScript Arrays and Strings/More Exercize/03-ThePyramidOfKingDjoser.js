function solve(base, height){
    function volumeCalc(number,height){
        return (Math.pow((number-2),2)*height);
    }
    function perimeterCalc(number,height){
        return (4 * (number -1))*height;
    }

    let stone =0;
    let marble =0;
    let lapisLazuli =0;
    let gold =0;
    let countStep=0;

    for(let step =base; step>0; step-=2){
        countStep++;
        let volume= volumeCalc(step,height);
        let perimeter = perimeterCalc(step,height);

        if(step-2<=0){
            
            gold+=volume+perimeter;
            continue; 
        }
        if(countStep%5===0){
            
            lapisLazuli+=perimeter;
            stone+=volume;
            continue;
        }
        stone+=volume;
        marble+=perimeter;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(countStep*height)}`);
}


//solve(11, 1);
//solve(11,0.75);
solve(12,1);
solve(23, 0.5 );