function addItem() {
    const menuEl = document.getElementById('menu');

    const buttonEl = document.querySelector('input[type=button]');
    //console.log(buttonEl);
    const item = document.createElement('option');

    const newItemEL = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');

    //console.log(newItemEL.value);
    //console.log(newItemValue.value);
    if (newItemEL.value.length === 0 || newItemValue.value.length === 0) {
        return;
    }
    item.textContent = newItemEL.value + ' ' + newItemValue.value;

    menuEl.append(item);
    //console.log(menuEl);
    newItemEL.value = '';
    newItemValue.value = '';


}