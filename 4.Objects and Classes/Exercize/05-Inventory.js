function printHeroes(input){
    const heroes = [];
    input.forEach(line => {
        const [name, level, items] = line.split(' / ');
        const hero  ={
            name,
            level,
            items,
        }
        heroes.push(hero)
    });
    const sortedHeroes = heroes.sort((a,b)=> a.level-b.level)
    for (const hero of sortedHeroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

printHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);
printHeroes([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]
);