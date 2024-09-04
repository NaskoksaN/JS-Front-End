function solve(input, word){
    let result=0;
    let temp=input.split(' ');
    for (let text of temp){
        result += text.toLowerCase()===word.toLowerCase() ? +1 : +0;
    }
    console.log(result);
}

solve('This is a word and it also is a sentence',
    'is'
);
solve('softuni is great place for learning new programming languages',
    'softuni'
);