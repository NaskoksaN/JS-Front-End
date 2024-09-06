function sortedCatalog(input){
    const productsObj={};
    input.forEach(element => {
        const [product, price] = element.split(' : ');
        productsObj[product]=price;
    });
    const sorted = Object
                    .entries(productsObj)
                    .sort((a,b) => a[0].localeCompare(b[0]));
    const letters=sorted.map(word => word[0].charAt(0));
    const uniqueLetters = Array.from(new Set(letters));
    uniqueLetters.forEach(element=> {
        console.log(`${element}`);
        for (const [product, price] of sorted) {
            if(product.startsWith(element)){
                console.log(`  ${product}: ${price}`);
            }
        }
    })
}

sortedCatalog([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
);