function convertToJSON(firstName, lastName, hairColor){
    let person = {
        name : firstName,
        lastName,
        hairColor,
    }

    let textJSON = JSON.stringify(person);
    console.log(textJSON);
}

convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');