function printPhoneBook(input){
    let phoneBook = {};
    for(let item of input){
        let tokens = item.split(' ');
        let name = tokens[0];
        let phone= tokens[1];
        //if(phoneBook.hasOwnProperty(name)){
        //    console.log(`name ${name} is duplicate and will have new phone ${phone}`);
        //}
        //if(name in phoneBook){
        //    console.log(`name ${name} is duplicate and will have new phone ${phone}`);
        //}
        phoneBook[name]=phone;
    }
    //const phoneBookKeys = Object
    //                .keys(phoneBook);
    //for (let key of phoneBookKeys){
    //    console.log(`${key} -> ${phoneBook[key]}`);
    //}
    const phoneBookKyeValue = Object.entries(phoneBook);
    for (let [key, value] of phoneBookKyeValue){
        console.log(`${key} -> ${value}`);
    }
}

printPhoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
   );
printPhoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']
   );