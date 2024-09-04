let array1 = [5, 12, 8, 130, 44];
let found = array1.filter(function(element) {
return element > 10;
});
console.log(found); 


//t numbers = [1, 4, 9, 16, 25];
//t roots = numbers.map((num, i, arr) => {
//  console.log(`Processing element at index ${i}: ${num}`);
//  console.log(`Original array: ${arr}`);
//  return Math.sqrt(num);
//;
//nsole.log(roots); 
///let arr=['a', 'b', 'c'];
//console.log(arr.includes('a',-100));

//let fruits = ['Banana', 'Orange', 'Lemon', 'Apple'];
//let citrus = fruits.slice(0,2);
//console.log(citrus);
//let copyCitrus=citrus.slice();
//console.log(copyCitrus);

//let arr = [1, 2, 3, 4];
//arr.reverse();
//console.log(arr); 
//
//let elements = ['Fire', 'Air', 'Water'];
//console.log(elements.join()); // "Fire,Air,Water"
//console.log(elements.join('')); // "FireAirWater"
//console.log(elements.join('-')); // "Fire-Air-Water"
//console.log(['Fire'].join("."));

//let nums = [10, 20, 30, 40, 50, 60, 70];
//const n=nums.pop();
//console.log(`${n} =>>> ${nums} with length=${nums.length}`);
//nums.push(n+10);
//console.log(nums);
//console.log(nums.shift());
//console.log(nums.unshift(1111));
//console.log(nums.unshift(11,222));
//console.log(nums);

//let numbers=[10,20,30,40,50]
//let [a,b, ...elems]=numbers;
//console.log(a);
//console.log(b);
//console.log(elems);
//for(let el of elems){
//    
//    if(el===50){
//        console.log('break error ');
//        break;
//    }
//    console.log(el);
//}