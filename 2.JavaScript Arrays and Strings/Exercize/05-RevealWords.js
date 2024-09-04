function solve(inputWords, inputSentence){
    const words= inputWords.split(', ')
    const sentence = inputSentence.split(' ');
    //words.forEach(word => {
    //    sentence.forEach((element,index)=> {
    //        sentence[index] = element.startsWith('*') && element.length === word.length 
    //                        ? word 
    //                        : element;
    //    })
    //    
    //});

    //for (let w=0; w<words.length; w++){
    //    let tempWord=words[w];
    //    for (let s=0; s<sentence.length ; s++){
    //        let tempSentence=sentence[s];
    //        if(tempSentence.startsWith('*') && tempWord.length===tempSentence.length){
    //            sentence[s]=tempWord;
    //        }
    //    }
    //}
    //console.log(sentence.join(' '));

    let sen = inputSentence;

    words.forEach(element => {
        let tempWord='*'.repeat(element.length);
        sen=sen.replace(tempWord, element);
    });
    console.log(sen);
}

solve('great, learning',
'softuni is ***** place for ******** new programming languages'
);