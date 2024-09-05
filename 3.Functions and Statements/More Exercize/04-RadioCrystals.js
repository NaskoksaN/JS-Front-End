function printCrystalOperation(args){
    const [desiredThickness, ...arg] = args;
    let operations = ['Cut', 'Lap', 'Grind', 'Etch',  'X-ray', 'Transporting and washing'];
    let countOperations=[0,0,0,0,0,0]
    let isXrayUsed = false;

    function biggestCutPerformed(operation, crystalSize){
        let biggestCut=0;
        let tempOperation='';
        let tempCrystalSize=crystalSize;
        if(tempCrystalSize/4>=desiredThickness-1 && (tempCrystalSize-tempCrystalSize/4)>biggestCut) {
            temp=tempCrystalSize/4;
            biggestCut = temp>biggestCut ? crystalSize-temp : biggestCut;
            countOperations[0]+=1;
            tempOperation='Cut';
        }
        if((tempCrystalSize-tempCrystalSize*0.2)>=desiredThickness-1 && (tempCrystalSize*0.2)>biggestCut ){
            temp=Math.floor(tempCrystalSize-tempCrystalSize*0.2);
            biggestCut = temp>biggestCut ? crystalSize-temp : biggestCut;
            countOperations[1]+=1;
            tempOperation='Lap';
        }
        if (crystalSize-20>=desiredThickness-1 && 20>biggestCut){
            temp=crystalSize-20;
            biggestCut = temp>biggestCut ? crystalSize-temp : biggestCut;
            countOperations[2]+=1;
            tempOperation='Grind';
        }
        if(crystalSize-2>=desiredThickness-1 && 2>biggestCut){
            temp=crystalSize-2;
            biggestCut = temp>biggestCut ? crystalSize-temp : biggestCut;
            countOperations[3]+=1;
            tempOperation='Etch';
        }
        if(isXrayUsed===false && crystalSize+1===desiredThickness){
            temp=crystalSize+1;
            biggestCut=-1;
            countOperations[4]=1;
            tempOperation='X-ray';
        }
        return [biggestCut, tempOperation];
    }

    function getOperationsNameAndCOunt(index, operations, countOperations){
        countOperation = countOperations[index];
        console.log(`${operations[index]} x${countOperation}`);
        console.log(operations[5]);
        countOperations[index]=0;
    }

    for (let i = 0; i < arg.length; i++) {
        let crystalSize = arg[i];
        let countOperation = 0;
        let lastOperation = '';
        let cc = 0;
        for(let j=0; j<countOperations.length; j++){
            countOperations[j]=0;
        }
        console.log(`Processing chunk ${crystalSize} microns`);
        while (true) {
            if (crystalSize === desiredThickness) {
                let indexOfOperation = operations.indexOf(lastOperation);
                getOperationsNameAndCOunt(indexOfOperation, operations, countOperations);
                console.log(`Finished crystal ${crystalSize} microns`);
                break;
            } else {
            const size = crystalSize;
            const temp = biggestCutPerformed(operations, crystalSize);
            const cutSize = temp[0];
            let operationPerformed = temp[1];
            crystalSize -= cutSize;

            if (lastOperation !== operationPerformed && cc > 0) {
                let indexOfOperation = operations.indexOf(lastOperation);
                getOperationsNameAndCOunt(indexOfOperation, operations, countOperations);
            }

            if (operationPerformed === 'X-ray') {
                let indexOfOperation = operations.indexOf('X-ray');
                console.log(`${operations[indexOfOperation]} x${countOperations[indexOfOperation]}`);
                console.log(`Finished crystal ${crystalSize} microns`);
                break;
            }
            cc++;
            lastOperation = operationPerformed;}
        };
    }
}

//printCrystalOperation([1375, 50000]);
//printCrystalOperation([1000, 4000]);
//printCrystalOperation([1000, 8100]);
printCrystalOperation([1000, 4000, 8100]);


