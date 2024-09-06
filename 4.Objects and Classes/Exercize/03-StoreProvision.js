function storeProvision(inStock, orderedStock){
    let stock={};
    function toArrObj(obj, arr){
        let stockObj={};
        for(let i=0; i<arr.length; i+=2){
            let product = arr[i];
            let quantity =Number(arr[i+1]);
        
            if(!obj.hasOwnProperty(product)){
                obj[product]=0;
            }
            obj[product]+=quantity;
        }
        return obj;
    }
    stock = toArrObj(stock, inStock);
    stock = toArrObj(stock, orderedStock)
    const stockKeys = Object.keys(stock);
    for (const key of stockKeys) {
        console.log(`${key} -> ${stock[key]}`);
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
    );
//storeProvision();