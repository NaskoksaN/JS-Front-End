function validPoints(args){
    //args = [x1, y1, x2, y2] 
    function distanceCalculation(x1,y1,x2,y2){
        let distance=Math.sqrt((x2-x1)**2+(y2-y1)**2);
        return Number.isInteger(distance);
    }

    //x1, y1} to {0, 0}
    const isFirstDistance = distanceCalculation(args[0], args[1], 0 ,0);
    //{x2, y2} to {0, 0} 
    const isSecondDistance = distanceCalculation(args[2], args[3], 0 ,0);
    //{x1, y1} to {x2, y2}. 
    const isFinal = distanceCalculation(args[0], args[1], args[2] ,args[3]);

    if(isFirstDistance){
        console.log(`{${args[0]}, ${args[1]}} to {0, 0} is valid`);
    } else{
        console.log(`{${args[0]}, ${args[1]}} to {0, 0} is invalid`);
    }
    if(isSecondDistance){
        console.log(`{${args[2]}, ${args[3]}} to {0, 0} is valid`);
    } else{
        console.log(`{${args[2]}, ${args[3]}} to {0, 0} is invalid`);
    }

    if (isFinal) {
        console.log(`{${args[0]}, ${args[1]}} to {${args[2]}, ${args[3]}} is valid`);
    } else {
        console.log(`{${args[0]}, ${args[1]}} to {${args[2]}, ${args[3]}} is invalid`);
    }
}

//validPoints([3, 0, 0, 4]);
validPoints([2, 1, 1, 1]);