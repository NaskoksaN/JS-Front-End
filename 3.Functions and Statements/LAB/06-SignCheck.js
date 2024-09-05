function solve(...args ){
    function checkNum (number) {
        return number >0 ? 0:1; 
    }
    let countNegative=0;
    //for (let index = 0; index < args.length; index++) {
    //    countNegative+=checkNum(args[index]);
    //}
    args.forEach(element =>{
        countNegative+=checkNum(element);
    });
    let result= countNegative%2===0 ? 'Positive' : 'Negative'
    console.log(result);
}

solve(5,
    12,
   -15
   );
solve(-6,
    -12,
     14
    );
solve(-1,
    -2,
    -3
    );
solve(-5,
    1,
    1
   );