function printGarage(input){
    const result=new Array;
    input.forEach(element => {
        const [garageNumb, details] = element.split(' - ');
        const cars = details.split(', ')
        const detailsObject = {};
        cars.forEach(carElement=>{
            const[type, data] = carElement.split(': ');
            detailsObject[type]=data;
        })
        if(!result[garageNumb]){
            result[garageNumb]=[];
        }
        result[garageNumb].push(detailsObject);
    });
    
    for (const [keyGarage, obj] of Object.entries(result)) {
        console.log(`Garage № ${keyGarage}`);
        obj.forEach(objEl => {
            const carDetails = Object.entries(objEl)
                .map(([key, value]) => `${key} - ${value}`)
                .join(', ');
            console.log(`--- ${carDetails}`);
        });
    }
   
}

printGarage(['1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol']
);

