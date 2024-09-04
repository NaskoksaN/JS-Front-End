function solve(input) {
    const [userName, ...args] = input;
    let blockCount = 0;
    //for (let i = 0; i < args.length; i++) {
    //    let tempPass = args[i].split('').reverse().join('');
    //    if (userName === tempPass) {
    //        console.log(`User ${userName} logged in.`);
    //    } else {
    //        blockCount++;
    //        if (blockCount > 3) {
    //            console.log(`User ${userName} blocked!`);
    //            break;
    //        }
    //        console.log(`Incorrect password. Try again.`);
    //        
    //    }
    //}
    let loggedIn=false; 
    args.forEach(element => {
        if (loggedIn) return;
        const temp=element.split('').reverse().join('');
        blockCount = userName===temp 
            ? (console.log(`User ${userName} logged in.`), loggedIn = true)
            : (blockCount >= 3
                ? (console.log(`User ${userName} blocked!`), loggedIn = true)
                : (console.log(`Incorrect password. Try again.`), blockCount+=1));

    });
}

solve(['Acer','login','go','let me in','recA']);
solve(['sunny','rainy','cloudy','sunny','not sunny']);
solve(['momo','omom']);