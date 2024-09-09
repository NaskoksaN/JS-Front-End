function deleteByEmail() {
    //const table = document
    //    .getElementById('customers');
    //const trEl = table.querySelectorAll('tbody tr');
    //
    //const inputEl =document
    //    .querySelector('input');
    //const resultEl = document
    //    .getElementById('result');
    //const inputRes = inputEl.value;
    //let isDelete=false;
    //trEl.forEach(el=>{
    //    const mail=el.children[1].textContent;
    //    if(mail.includes(inputRes)){
    //        el.remove();
    //        isDelete=true;
    //    }
    //})
    //resultEl.textContent = isDelete ? 'Deleted.' : 'Not found.';
    //inputEl.value='';

    const table = document
        .getElementById('customers');
    const trEl = table.querySelectorAll('tbody tr td');
    const inputEl =document
        .querySelector('input[type=text][name=email]');
    const resultEl = document
        .getElementById('result');
    const inputRes = inputEl.value;
    let isDelete=false;
    trEl.forEach(el => {
        if (el.textContent.includes(inputRes)) {
            let tempTr = el.parentNode;
            tempTr.remove();
            isDelete=true;
        }
    })

    resultEl.textContent = isDelete ? 'Deleted.' : 'Not found.';
    inputEl.value='';
}

//function deleteByEmail() {
//    // Get input, result and table element references
//    const customerTableElement = document.getElementById('customers');
//    const inputElement = document.querySelector('input[type=text][name=email]');
//    const resultElement = document.getElementById('result');
//
//    // Get input text value
//    const searchEmail = inputElement.value;
//
//    // Get all td elements
//    const tdElements = customerTableElement.querySelectorAll('tbody td:last-child');
//
//    // Search for email
//    const searchElement = Array.from(tdElements).find(el => el.textContent === searchEmail);
//
//    // remove element if found and print result
//    if (searchElement) {
//        searchElement.parentElement.remove();
//        resultElement.textContent = 'Deleted.';
//    } else {
//        resultElement.textContent = 'Not found.';
//    }
//}