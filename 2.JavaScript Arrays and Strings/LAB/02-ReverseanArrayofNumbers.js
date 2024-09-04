function solve(n, input){
    //let tempArray = input.slice(0, n);
    //tempArray.reverse();
    //let result = tempArray.join(' ');
    //console.log(result);

    //let tempArray = input.slice(0, n);
    //console.log(tempArray.reverse().join(' '));
    let temp=[];
    for (let i=0; i<n; i++){
        temp[i]=input[i]
    }
    temp.reverse();
    let result =temp.join(' ');
    console.log(result);

    //console.log(input.slice(0, n).reverse().join(' '));
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);