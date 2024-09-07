function stringWithChangedLetters(input) {
    const arr = input.split(' ');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join('');
  }
function solve(input){
    const arr = stringWithChangedLetters(input);
    console.log(arr);
}

solve('this is an example');