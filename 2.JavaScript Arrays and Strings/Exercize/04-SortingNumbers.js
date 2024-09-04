function solve(input) {
    //const arr = input.slice();
    //const initialLength=arr.length;
    //let newArr= new Array(initialLength);
    //arr.sort((a, b) => a-b);
    //let ind=0;
    //for (let i=0; i< initialLength; i++){
    //    if(i%2===0){
    //        newArr[ind]=arr.shift();
    //    } else{
    //        newArr[ind]=arr.pop();
    //    }
    //    ind++;
    //};
    //return newArr;

    const arr = input.sort((a, b) => a-b);;
    const initialLength=arr.length;
    let newArr= new Array(initialLength).fill(0);
    newArr = arr.map((_, index) => {
       const isEven= index % 2;
       const smallIndex = index/2;
       const bigIndex = initialLength-Math.ceil(index/2)
       return isEven ? arr[smallIndex] : arr[bigIndex];
    });

    return newArr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));