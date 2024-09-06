function printMeetingAppointments(input) {
    let meetings ={};
    for(let line of input){
        let tokens= line.split(' ');
        let day = tokens[0];
        let name =tokens[1];
        if(!meetings.hasOwnProperty(day)){
            meetings[day]=name;
            console.log(`Scheduled for ${day}`);
        }else{
            console.log(`Conflict on ${day}!`);
        }
    }
    //const arr=Object.entries(meetings);
    //for(let [key,value] of arr){
    //    console.log(`${key} -> ${value}`);
    //}

    const arrOfMeetings = Object
                    .keys(meetings)
                    .forEach(e=> {
                        console.log(`${e} -> ${meetings[e]}`);
                    });

}

printMeetingAppointments(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
   );

printMeetingAppointments(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']
    );