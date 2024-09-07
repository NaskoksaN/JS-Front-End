function toggle() {
    const buttonEl = document
        .querySelector('.head span.button');
    const textEl=document
        .querySelector('#extra');
    //console.log(buttonEl.textContent);
    //console.log(textEl.textContent);

    const more='More';
    const less ='Less';
    console.log(textEl.textContent);
    const isHidden = textEl.style.display === 'none';

    if(isHidden || !textEl.style.display){
        textEl.style.display = 'block';
        buttonEl.textContent = less;
    } else {
        textEl.style.display = 'none';
        buttonEl.textContent = more;
    }
}