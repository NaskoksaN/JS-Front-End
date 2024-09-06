function printDictionary(inputJSON){
    let dictionary={};
    //inputJSON.forEach(line => {
    //    const result = JSON.parse(line);
    //    const [word, description] = Object.entries(result);
    //    dictionary[word] = description;
    //});
    for (const line of inputJSON) {
        const result = JSON.parse(line);
        const [[word, description]] = Object.entries(result);
        dictionary[word]=description;
    }
    const sortedDic=Object.entries(dictionary);
    sortedDic.sort((a,b) => a[0].localeCompare(b[0]));
    for (const [word, description] of sortedDic){
        console.log(`Term: ${word} => Definition: ${description}`);
    }
}
   
    
printDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
);


