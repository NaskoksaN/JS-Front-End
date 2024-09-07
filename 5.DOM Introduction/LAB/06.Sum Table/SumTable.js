function sumTable() {
    const products = document
        .querySelectorAll('table tr:not(:last-child) td');
    console.log(products);
    let totalSum=0;
    let ind=0;
    //debugger;
    for (const product of products) {
        ind++;
        if(ind%2==0){
            totalSum+=(Number(product.textContent));
        }
    }
    //console.log(totalSum);
    const sumEl = document.getElementById('sum');
    sumEl.textContent = totalSum;

}