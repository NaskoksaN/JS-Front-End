function printSortedByNameAddressBook(input){
    let addressBook ={};
    for (let line of input){
        const tokens = line.split(':');
        const name = tokens[0];
        const address =tokens[1];
        //if(addressBook.hasOwnProperty(name)){
        //    console.log(`${name} already exist`);
        //    //continue;
        //}
        addressBook[name]=address;
    }
    const sortedEntries = Object
                            .entries(addressBook)
                            .sort((a,b) => a[0].localeCompare(b[0]));
    for(let[key,value] of sortedEntries){
        console.log(`${key} -> ${value}`)
    }
}

printSortedByNameAddressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
   );
printSortedByNameAddressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
    );