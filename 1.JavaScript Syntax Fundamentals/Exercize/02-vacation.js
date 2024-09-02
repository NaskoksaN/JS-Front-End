function vacation(count, visitorType, day){
    const isFriday = day === 'Friday';
    const isSaturday = day === 'Saturday';
    const isSunday = day === 'Sunday';

    const isStudents = visitorType==='Students';
    const isBusiness = visitorType==='Business';
    const isRegular = visitorType==='Regular';

    let ticket;
    if(isFriday && isStudents ){
        ticket=8.45;
    }else if(isFriday && isBusiness){
        ticket=10.90;
    } else if(isFriday && isRegular){
        ticket=15;
    } else if(isSaturday && isStudents ){
        ticket=9.8;
    }else if(isSaturday && isBusiness){
        ticket=15.6;
    } else if(isSaturday && isRegular){
        ticket=20;
    }else if(isSunday && isStudents ){
        ticket=10.46;
    }else if(isSunday && isBusiness){
        ticket=16;
    } else if(isSunday && isRegular){
        ticket=22.5;
    }
    let totalPrice = ticket*count;

    if(isStudents && count>=30){
        totalPrice = totalPrice*0.85;
    } 
    if(isBusiness && count>=100){
        totalPrice =totalPrice - 10*ticket;
    } 
    if(isRegular && (count>=10 && count<=20)){
        totalPrice = totalPrice*0.95;
    } 
    
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}


vacation(40,
    "Regular",
    "Saturday"
);