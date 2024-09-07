function extractText() {
    //const items = document
    //    .querySelectorAll('ul#items li');
    //let textarea =
    //    document.querySelector("#result");
    //    
    //    let text = '';
    //    items.forEach(item => {
    //        text += item.innerText + '\n'; 
    //    });
    //    
    //    textarea.value = text; 

    //const item = document
    //    .getElementById('items');
    //const resultArea= document
    //    .getElementById('result');
    //const text = item.innerText;
    //resultArea.textContent=text;

    const item = document
        .getElementById('items');
    const resultArea= document
        .getElementById('result');

    const text = item
            .textContent
            .split('\n')
            .map(line=> line.trim())
            .join('\n')
            .trim();
    resultArea.textContent=text;
}