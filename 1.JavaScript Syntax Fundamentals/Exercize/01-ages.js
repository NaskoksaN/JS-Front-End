function ages (age){
    let result;
    if(age>=0 && age<=2) {
        result='baby';
    } else if(age>=3 && age<=13){
        result='child';
    }else if(age>=14 && age<=19){
        result='teenager';
    }
    else if(age>=20 && age<=65){
        result='adult';
    }else if(age>=66){
        result='elder';
    }
    else {
        result='out of bounds';
    }
    console.log(result);
}


ages(4);

//0-2 (age) – is a baby;   
//3-13 (age) – is a child; 
//14-19 (age) – is a teenager;
//20-65 (age) – is an adult;
//>=66 (age) – is an elder; 
//In all other cases print – "out of bounds";
