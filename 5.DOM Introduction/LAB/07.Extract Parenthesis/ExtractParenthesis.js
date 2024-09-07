function extract(content) {
    const regex = /\(([^)]+)\)/g;

    const tokenText = document
            .querySelector('p');
    
    const result = tokenText.textContent.matchAll(regex);
    const temp = Array.from(result)
        .map(match => match[1]).join('; ');    
    //console.log(temp);
    return temp;
}