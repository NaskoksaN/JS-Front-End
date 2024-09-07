function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    const input = document.querySelector('#inputs textarea').value;
    const bestRestaurantEl = document.querySelector('#outputs #bestRestaurant p');
    const workersEl = document.querySelector('#outputs #workers p');
    function onClick() {

        function takeArrFromInput(inputArr) {
            const restaurants = [];
            for (const element of inputArr) {
                const name = element.split(' - ');
                console.log(typeof name);
                console.log(name);
                let sum = 0;
                const workerList = [];
                const workers = people.split(', ');
                workers.forEach(element => {
                    const [name, temSalary] = element.split(' ');
                    const salary = Number(temSalary);
                    workerList.push({ name, salary })
                    sum += salary;
                });
                const avgSalary = sum / workerList.length;
                restaurants.push({ name, avgSalary, workers });
            }
            return restaurants;
        }
        const restaurants = [];
        for (const line of JSON.parse(input)) {
            const [name, ...people] =line.split(' - ');
            const workersList =[];
            let sum=0;
            people.forEach(element=>{
                const [name, tempSalary] = element.split(' ');
                const salaryString = tempSalary.trim().replace(/[^0-9.]/g, "");
                const salary = Number(salaryString);
               
                sum+=salary;
                
                workersList.push({name,salary});
            });
            console.log(workersList);
            const avgSum = sum/workersList.length;
            const tObj={
                name,
                avgSum,
                workersList : workersList
            }
            restaurants.push(tObj);
        }
        //console.log(restaurants);
        const best = restaurants.sort((a, b) => b.avgSum - a.avgSum)[0];
        console.log(best.workersList);
        const bestSalary = best.workersList.sort((a, b) => b.salary - a.salary);
        const [_, bestS] = bestSalary[0].split(' ');

        const str = `Name: ${best.name} Average Salary: ${best.avgSalary.toFixed(2)} Best Salary: ${bestS}`
        const wl = bestSalary.map(worker => {
            return `Name: ${worker.name} With Salary: ${worker.salary}`;
        }).join(' ');

        bestRestaurantEl.textContent=str;
        workersEl.textContent=wl;
    }
}
 