function solve(input){
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;
    const goldAmounts = input;
    let currentSum=0;
    let countOfBitcoin=0;
    let dayOfFirstBuying = 0;
    for (let day = 1; day <= goldAmounts.length; day++) {
        let dayPrice = day % 3 === 0 ? goldAmounts[day-1] * 0.7*goldPrice : goldAmounts[day-1]*goldPrice;
        currentSum+=dayPrice;
        if(currentSum>=bitcoinPrice){
            dayOfFirstBuying= dayOfFirstBuying>0 ? dayOfFirstBuying : day;
            let count = Math.floor(currentSum/bitcoinPrice);
            currentSum-=bitcoinPrice*count;
            countOfBitcoin+=count;
        }
    }
    console.log(`Bought bitcoins: ${countOfBitcoin}`);
    if(countOfBitcoin>0){
        console.log( `Day of the first purchased bitcoin: ${dayOfFirstBuying}`);
    }
    console.log( `Left money: ${currentSum.toFixed(2)} lv.`);
}

solve([3124.15, 504.212, 2511.124]);
//solve([50, 100]);
//solve([100, 200, 300]);