function solve(input, startIndex, count){
    const result=input.substring(startIndex, startIndex+count);
    
    //const result = input.split('').slice(startIndex,count+1).join('');
    //const result = input.slice(startIndex, count+1);
    console.log(result);
}

solve('ASentence', 1, 8);
solve('SkipWord', 4, 7);