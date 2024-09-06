function printFlightSchedule(input){
    const [flight, canceledFlights, token] = input;
    const flightObj = {};
    flight.forEach(element => {
        const [flightNumber, ...destinationArr] = element.split(' ');
        let tempDestination='';
        tempDestination = destinationArr.length >=1 ? destinationArr.join(' ') : destinationArr[0];
        flightObj[flightNumber]={
            tempDestination,
            statusOn:true,
        }
        
    });
    //const f=Object.entries(flightObj);
    //for (const [key, details] of f) {
    //    console.log(`${key} => ${details.tempDestination} => ${details.statusOn}`);
    //}
    canceledFlights.forEach(element=>{
        const [flight, action]=element.split(' ');
        if(flightObj.hasOwnProperty(flight)){
            flightObj[flight].statusOn=false;
        }
    });
    //print 
    const status = token[0]==='Cancelled' ? false : true;
    const printMsg = status ? 'Ready to fly' :  'Cancelled'
    function printer (flightObj, status, printMsg){
        const forPrint = Object.entries(flightObj)
            .filter(([_, f]) => f.statusOn===status);
        
        for (const [_, values] of forPrint) {
            console.log(`{ Destination: '${values.tempDestination}', Status: '${printMsg}' }`);
        }

    }
    printer( flightObj ,status,printMsg)
}

printFlightSchedule([
    ['WN269 Delaware',
    'FL2269 Oregon',
     'WN498 Las Vegas',
     'WN3145 Ohio',
     'WN612 Alabama',
     'WN4010 New York',
     'WN1173 California',
     'DL2120 Texas',
     'KL5744 Illinois',
     'WN678 Pennsylvania'],
     ['DL2120 Cancelled',
     'WN612 Cancelled',
     'WN1173 Cancelled',
     'SK430 Cancelled'],
     ['Cancelled']
 ]
 );