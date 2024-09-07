function processRestaurants(inputArray) {
    const restaurants = [];
    for (const element of inputArray) {
        const [name, people] = element.split(' - ');
        let sum=0;
        const workerList=[];
        console.log(typeof people);
        //const workers = people.split(', ');
        const workers =[];
        workers.forEach(element => {
            const [name,temSalary] = element.split(' ');
            const salary = Number(temSalary);
            workerList.push({name,salary})
            sum+=salary;
        });
        const avgSalary = sum/workerList.length;
        restaurants.push({name,avgSalary ,workers});
    }

    const best = restaurants.sort((a,b) => b.avgSalary-a.avgSalary)[0];
    //console.log(best);
    const bestSalary = best.workers.sort((a,b) => b.salary-a.salary);
    const [_, bestS] = bestSalary[0].split(' ');
    const str = `Name: ${best.name} Average Salary: ${best.avgSalary.toFixed(2)} Best Salary: ${bestS}`
    const wl = bestSalary.map(x=> {
        const [nam,sal] = x.split(' ');
        return `Name: ${nam} With Salary: ${sal}`
    }).join(' ');
    console.log(str);
    console.log(wl);
}

// Example usage:
const inputArray = [
    "PizzaHut - Peter 500, George 300, Mark 800",
    "TheLake - Bob 1300, Joe 780, Jane 660"
];

 processRestaurants(inputArray);

