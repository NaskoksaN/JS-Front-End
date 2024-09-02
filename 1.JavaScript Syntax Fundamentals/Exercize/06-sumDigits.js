function solve(numb) {
    let temp = numb;
    let sum = 0;

    sum += temp % 10;
    temp = parseInt(temp / 10);
    while (temp > 0) {
        sum += temp % 10;
        temp = parseInt(temp / 10);
    }
    console.log(sum);
}

solve(245678);
solve(97561);
solve(543);