function solve(input){
    //let odd=0;
    //let even=0;
    //for(let i=0; i<input.length; i++){
    //    if(input[i]%2===0){
    //        even+=input[i];
    //    }else{
    //        odd+=input[i];
    //    }
    //}
    //console.log(even-odd);
    let even = input.filter(numb => numb % 2 === 0).reduce((acc, val) => acc + val, 0);
    let odd = input.filter(numb => numb % 2 !== 0).reduce((acc, val) => acc + val, 0);
    
    console.log(even - odd);
}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);