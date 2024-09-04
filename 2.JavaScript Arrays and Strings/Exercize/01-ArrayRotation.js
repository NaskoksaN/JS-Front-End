function solve(input, number){
    const arr= input;
    //for (let i=0; i< number; i++){
    //    let tempNumber=arr.shift();
    //    arr.push(tempNumber);
    //}
    const rotation= number%input.length;
    let partOne= arr.slice(rotation);
    let partTwo = arr.slice(0, rotation);
    const result=partOne.concat(partTwo);
    console.log(result.join(' '));
}   

solve([2, 4, 15, 31], 5);