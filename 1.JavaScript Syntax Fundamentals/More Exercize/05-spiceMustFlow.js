function solve(totalAmountSpice){
    let amount=totalAmountSpice;
    let spice=0;
    let days=0;
    const crewSalaryPerDay=26;
    let crew=0;
    while(amount>=100){
        spice+=amount-crewSalaryPerDay;
        //crew+=crewSalaryPerDay;
        days+=1;
        amount-=10;
        //console.log(`day ${days} spice amount= ${spice} `);
    }
    //if(spice>26){
    //    spice-=crewSalaryPerDay;
    //} else{
    //    spice=0;
    //}
    spice = spice > 26 ? spice -= crewSalaryPerDay : spice = 0;
    
    console.log(days);
    console.log(spice);
}

solve(111);
solve(450);