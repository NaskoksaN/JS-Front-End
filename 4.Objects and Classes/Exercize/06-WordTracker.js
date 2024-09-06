function printWordsTracker(input){
   const [specialWords, ...wordsArr] = input;
   const words = specialWords.split(' ').reduce((acc, word)=> {
        acc[word]=0;
        return acc;
   }, {});
   
   wordsArr.forEach(element => {
        if(words.hasOwnProperty(element)){
            words[element]+=1;
        }
   });
   const sorted= Object.entries(words)
                .sort((a,b) => b[1]-a[1]);

    sorted.forEach(([word, count]) => {
        console.log(`${word} - ${count}`);
    });
}

printWordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);
//printWordsTracker([
//    'is the',
//    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
//);