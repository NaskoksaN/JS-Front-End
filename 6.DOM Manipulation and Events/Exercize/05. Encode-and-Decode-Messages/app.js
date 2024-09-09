function encodeAndDecodeMessages() {
    const codeArea = document
        .querySelector('main > div:first-of-type');
    const decodeArea = document
        .querySelector('main > div:last-of-type');

    const encodeButton = codeArea.querySelector('button');
    const decodeButton = decodeArea.querySelector('button');

    const textAreaEl= codeArea.querySelector('textarea');
    const decodeTextArea =decodeArea.querySelector('textarea');

    encodeButton.addEventListener('click', (e)=>{
        
        const str = Array.from(textAreaEl.value)
        //decodeTextArea.removeAttribute('disabled');
        decodeTextArea.value=str
            .map(e => String.fromCharCode(e.charCodeAt(0) + 1))
            .join('');
        const placeHolder = textAreaEl.placeholder;
        textAreaEl.value='';
    });

    decodeButton.addEventListener('click', (e)=>{
        const str = Array.from(decodeTextArea.value);
        textAreaEl.value=str
            .map(e => String.fromCharCode(e.charCodeAt(0) - 1))
            .join('');
        //const placeHolder = decodeTextArea.placeholder;
        //decodeTextArea.value='';
        //decodeTextArea.setAttribute('disabled', true);
    });
}


//function encodeAndDecodeMessages() {
//    let textarea = document.getElementsByTagName('textarea');
//    [...document.getElementsByTagName('button')].forEach(b => b.addEventListener('click', message));
// 
//    function message(btn) {
//        if (btn.target.textContent === 'Encode and send it') {
//            let encoded = [...textarea[0].value].map(e => String.fromCharCode(e.charCodeAt(0) + 1)).join('');
//            textarea[1].value = encoded;
//            textarea[0].value = '';
//        } else if (btn.target.textContent === 'Decode and read it') {
//            let decoded = [...textarea[1].value].map(e => String.fromCharCode(e.charCodeAt(0) - 1)).join('');
//            textarea[1].value = decoded;
//        }
//    }
//}