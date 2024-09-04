function solve(input, number){
    //const newLength = number%input.length;
    //let arr=new Array(newLength);
    //let ind=0;
    //for(let i=0; i<input.length; i+=number){
    //    arr[ind]=input[i];
    //    ind++;
    //}
    //return arr;

    //return arr = input.filter((_, ind)=> ind%number===0);

    const arr=new Array();
    input.forEach((element,index) => {
        if(index%number===0){
            arr.push(element);
        }
    });
    return arr;
}

console.log(
    solve(['1',
        '2',
        '3',
        '4',
        '5'],
        6
    ));
console.log(
    solve(['dsa',
        'asd', 
        'test', 
        'tset'], 
        2
        
    ));

console.log(solve(['5', 
    '20', 
    '31', 
    '4', 
    '20'], 
    2
    ));
