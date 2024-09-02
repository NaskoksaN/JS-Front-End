function solve(fruit, grams, price){
    const kilos = grams/1000;
    const totalPrice = kilos*price;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);