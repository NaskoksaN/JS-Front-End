function solve(day, age){
    let ticket;
    if (age<0 || age >122) {
        ticket='Error!'
    } else if(day=='Weekday' && (age>=0 && age<=18)){
        ticket='12$';
    } else if(day=='Weekday' && (age>18 && age<=64)){
        ticket='18$';
    } else if(day=='Weekday' && (age>64 && age<=122)){
        ticket = '12$';
    } else if(day=='Weekend' && (age>=0 && age<=18)){
        ticket='15$';
    } else if(day=='Weekend' && (age>18 && age<=64)){
        ticket='20$';
    } else if(day=='Weekend' && (age>64 && age<=122)){
        ticket = '15$';
    } else if(day=='Holiday' && (age>=0 && age<=18)){
        ticket='5$';
    } else if(day=='Holiday' && (age>18 && age<=64)){
        ticket='12$';
    } else if(day=='Holiday' && (age>64 && age<=122)){
        ticket = '10$';
    } 
    console.log(ticket);
}

solve('Weekday', 15);  // 12
solve('Weekend', 30);  // 20
solve('Holiday', 70);  // 10
solve('Holiday', -1);  // Error!
solve('Weekday', 200); // Error!