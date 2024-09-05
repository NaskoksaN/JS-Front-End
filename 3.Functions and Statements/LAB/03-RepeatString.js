function solve(text, repeatCount){
    //if(repeatCount<=1){
    //    return text;
    //}
    //return text+=solve(text, repeatCount-1);
    let result='';
    for (let index = 0; index < repeatCount; index++) {
        result+=text;        
    }
    return result;
}

console.log(solve("abc", 3));
console.log(solve("String", 2));