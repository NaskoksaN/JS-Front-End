function printCityInfo(objectInput){
    //const cityDetails= objectInput;
    //let properties = Object 
    //       .keys(cityDetails)
    //       .forEach(e=> {
    //           console.log(`${e} -> ${cityDetails[e]}`);
    //       });
    const cityDetails= Object.entries(objectInput);
    for([key, value] of cityDetails){
        console.log(`${key} -> ${value}`);
    }
}

printCityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);