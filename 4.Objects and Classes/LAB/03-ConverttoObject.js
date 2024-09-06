function printObjDetails(jsonToken){
    let person = JSON.parse(jsonToken);
    //const personArr = Object.entries(person);
    //for([key, value] of personArr){
    //    console.log(`${key}: ${value}`);
    //}
    const personKey = Object
                .keys(person)
                .forEach(element => {
                    console.log(`${element}: ${person[element]}`);    
                });;
}

printObjDetails('{"name": "George", "age": 40, "town": "Sofia"}');
printObjDetails('{"name": "Peter", "age": 35, "town": "Plovdiv"}');