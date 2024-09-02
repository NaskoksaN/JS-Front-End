function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmet = parseInt(lostFightsCount / 2);
    let sword = parseInt(lostFightsCount / 3);
    let shield = 0;
    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            shield += 1;
        }
    }

    let armour = parseInt(shield / 2);

    //console.log(`Trashed helmet -> ${helmet} times`);
    //console.log(`Trashed sword -> ${sword} times`);
    //console.log(`Trashed shield -> ${shield} times`);
    //console.log(`Trashed armour -> ${armour} times`);
    let helmetExpense=helmet*helmetPrice;
    let swordExpense = sword*swordPrice;
    let shieldExpense = shield*shieldPrice;
    let armourExpense = armour*armorPrice;

    let expenses = helmetExpense+swordExpense+shieldExpense+armourExpense;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

solve(7,
    2,
    3,
    4,
    5
    );

solve(23,
    12.50,
    21.50,
    40,
    200
    );