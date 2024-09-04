function solve(start, end){
    let sum=0;
    let numberLine='';
    for (let i=start; i<=end; i++){
        sum+=i;
        numberLine+=i+' ';
    }
    console.log(numberLine.trimEnd());
    console.log(`Sum: ${sum}`);
}

solve(5,10);
solve(0,26);
solve(50,60);