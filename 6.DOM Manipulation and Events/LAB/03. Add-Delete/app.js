function addItem() {
    const ulEl = document
        .getElementById('items');
    const inputItemEl = document
        .getElementById('newItemText');
    
    const input=inputItemEl.value;
    if(input.length===0) {
        return;
    }
    let li = document.createElement('li');
    li.textContent=input;

    let deleteA = document.createElement('a');
    deleteA.textContent='[Delete]';
    deleteA.href='#';
    deleteA.addEventListener('click' , (el)=>{
        el.currentTarget.parentElement.remove();
    });
    li.append(deleteA);

    ulEl.append(li);

    inputItemEl.value='';
}