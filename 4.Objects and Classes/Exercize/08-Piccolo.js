function printCarParking(input){
    const cars = {};
    const tokens = input;
    tokens.forEach(line => {
        const[direction, carNumber] = line.split(', ');
        if(direction === 'IN' && !cars.hasOwnProperty(carNumber)){
            cars[carNumber]=true;
        } else if(direction === 'IN' && cars.hasOwnProperty(carNumber) && cars[carNumber]===false){
            cars[carNumber]=true;
        } else if(direction==='OUT' && cars.hasOwnProperty(carNumber)){
            cars[carNumber]=false;
        }
    });    
    const parking = Object
                .entries(cars)
                .filter(([, direction])=> direction===true)
                .sort((a,b) => a[0].localeCompare(b[0]));
    
    function printer(parkingInput){
        for (const carNumber of parkingInput) {
            console.log(`${carNumber[0]}`);
        }
    }
    parking.length === 0 ? console.log('Parking Lot is Empty') 
                         :printer(parking);
}

printCarParking(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);
printCarParking(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);