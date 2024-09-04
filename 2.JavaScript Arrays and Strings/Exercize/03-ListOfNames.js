function solve(input){
    const arr=input;
    //let ind=1;
    //arr.sort((a,b)=> a.localeCompare(b))
    //    .forEach(element => {
    //        console.log(`${ind}.${element}`)
    //        ind++;
    //    });;
    
    arr.sort((a, b) => a.localeCompare(b))
        .map((elem, index) => {
            let ind = index + 1;
            console.log(`${ind}.${elem}`);
        });
}

solve(["John", "Bob", "Christina", "Ema"]);