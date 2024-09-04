function solve(input){
    //const regexPattern = /#[A-Za-z]+/g;
    //let words =new Array();
    //words = input.match(regexPattern) || [];
    ////console.log(words);
    //words.forEach(element => {
    //    console.log(element.substring(1));
    //})
    const regexPattern = /#[A-Za-z]+/g;;  
    const matches = [...input.matchAll(regexPattern)];  
    matches.forEach(match => {
        console.log(match[0].substring(1));  
    });
}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign');