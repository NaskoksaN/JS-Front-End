function addItem() {
    const ulEl = document
        .getElementById('items');
    const inputValueEl = document
        .getElementById('newItemText');
    
    const input = inputValueEl.value;
    let li= document.createElement('li');
    li.textContent=input;
    
    ulEl.appendChild(li);
    inputValueEl.value=''
}