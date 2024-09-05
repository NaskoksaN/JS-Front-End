function drawMatrix(input){
    const number = Number(input);
    //for(let i = 1; i<=number; i++){
    //    let arr=[];
    //    for (let j=1; j<=number; j++){
    //        arr[j]=number;
    //    }
    //    console.log(arr.join(' '));
    //}
    const arrLine= (numb) => {
        const result= `${numb.toString()} `.repeat(numb).trim();
        return result;
    }
    for(let i=1; i<=number ; i++){
        console.log(arrLine(number));
    }
}

drawMatrix(3);
//drawMatrix(2);
//drawMatrix(1);
