function solve(number, power){
    
    //if(power<=1){
    //    return number;
    //}
    //return number*=solve(number, power-1);
   let result=1;
   for(let i =1; i<=power; i++){
    result*=number
   }
   return result;
}

let result = solve(2, 8);
console.log(result);
