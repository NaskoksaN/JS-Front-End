function printCats(input){
    class Cat{
        constructor (name, age){
            this.name=name;
            this.age = age;
        }
        Meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    const catArr =[];
    input.forEach(line => {
        const [name, age] = line.split(' ');
        let tempCat = new Cat(name, age);
        catArr.push(tempCat);
    });
    for(let kitty of catArr){
        kitty.Meow();
    }
}

printCats(['Mellow 2', 'Tom 5']);
printCats(['Candy 1', 'Poppy 3', 'Nyx 2']);