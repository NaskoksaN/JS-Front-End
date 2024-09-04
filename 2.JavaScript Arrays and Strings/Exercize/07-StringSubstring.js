function solve(word, input) {
    //const tempWord=word.toLowerCase();
    //const tempInput = input.toLowerCase();
    //let exist= tempInput.includes(tempWord) ? word : `${word} not found!`;
    //console.log(exist); not work 80% 
    const result = input.split(' ').find((w) => w.toLowerCase() === word.toLowerCase())
    console.log(result? word : `${word} not found!`);
}

solve('python',
'JavaScript is the best programming language'
);
solve('javascript',
'JavaScript is the best programming language'
);