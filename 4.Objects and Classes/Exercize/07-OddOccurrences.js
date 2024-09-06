function printOddOccurrences(input) {
    const words = input.split(' ').map(word => word.toLowerCase());    
    const wordsObj = {};
    words.forEach(element => {
        if (!wordsObj.hasOwnProperty(element)) {
            wordsObj[element] = 0;
        }
        wordsObj[element] += 1;
    });
    
    const filteredAndSorted = Object.entries(wordsObj)
        .filter(([name, count]) => count % 2 === 1)
        .map(([name, count]) => name) 
        .sort((a, b) => b.localeCompare(a)); 
                        
    console.log(filteredAndSorted.join(' '));
}

printOddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');