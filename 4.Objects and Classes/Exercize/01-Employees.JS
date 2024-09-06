function printEmployee(input){
    const person ={};
    const arr =[];
    input.forEach(x=> {
       const person ={
        name : x,
        personalNumber : x.length,
       }
       arr.push(person);
    })
    //arr.forEach(person => {
    //    console.log(`Name: ${person.name} -- Personal Number: ${person.personalNumber}`);
    //});

    for (const { name, personalNumber } of arr) {
        console.log(`Name: ${name} -- Personal Number: ${personalNumber}`);
    }
}

printEmployee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);
printEmployee([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]
);