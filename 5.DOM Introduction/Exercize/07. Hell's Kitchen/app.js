
function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
       let arr = JSON.parse(document.querySelector('#inputs textarea').value);
       let objWinner = findBestRestaurant(arr);
       document.querySelector('#bestRestaurant>p').textContent = getMsgRest(objWinner);
       document.querySelector('#workers>p').textContent = getMsgEmp(objWinner.workers);
   }

   function getMsgRest(objWinner) {
       return `Name: ${objWinner.name} Average Salary: ${objWinner.avgSalary.toFixed(2)} Best Salary: ${objWinner.maxSalary.toFixed(2)}`;
   }

   function getMsgEmp(workers) {
       return workers.map(w => `Name: ${w.worker} With Salary: ${w.salary}`).join(' ');
   }

   function findBestRestaurant(arr) {
       let resultRestaurants = arr.reduce((acc, e) => {
           let [restaurant, ...workers] = e.split(/(?: - )|(?:, )/g);
           workers = workers.map(w => {
               let [worker, salary] = w.split(' ');
               return {
                   worker: worker,
                   salary: +salary
               };
           });
           let foundRestraunt = acc.find(r => r.name === restaurant);
           if (foundRestraunt) {
               foundRestraunt.workers = foundRestraunt.workers.concat(workers);
           } else {
               acc.push({
                   name: restaurant,
                   workers: workers
               });
           }
           return acc;
       }, []);

       resultRestaurants.forEach((el, idx) => {
           el.inputOrder = idx;
           el.avgSalary = el.workers.reduce((acc, el) => acc + el.salary, 0) / el.workers.length;
           el.maxSalary = Math.max(...el.workers.map(w => w.salary));
       });

       resultRestaurants.sort((a, b) => b.avgSalary - a.avgSalary || a.inputOrder - b.inputOrder);
       let bestRestaurant = resultRestaurants[0];
       bestRestaurant.workers.sort((a, b) => b.salary - a.salary);

       return bestRestaurant;
   }
}




//function solve() {
//   document.querySelector('#btnSend').addEventListener('click', onClick);
//
//   const inputTextArea = document.querySelector('#inputs textarea');
//   const bestRestaurantEl = document.querySelector('#outputs #bestRestaurant p');
//   const workersEl = document.querySelector('#outputs #workers p');
//   function onClick() {
//      const restaurants = JSON.parse(inputTextArea.value)
//         .reduce((acc, data) => {
//            const [restaurantName, workersData] = data.split(' - ');
//            const workers = workersData.split(', ')
//               .map((workersData) => {
//                  const [name, salary] = workersData.split(' ');
//                  return {
//                     name,
//                     salary: Number(salary)
//                  }
//               })
//            if (!acc.hasOwnProperty(restaurantName)) {
//               acc[restaurantName] = {
//                  workers: [],
//               }
//               acc[restaurantName].workers.push(...workers)
//            }
//            return acc;
//         }, {});
//
//      function getAvgSalary(restaurantData) {
//         return restaurantData.workers
//            .reduce((a, b) => a + b.salary, 0) / restaurantData.workers.length;
//      }
//
//      const [bestRestaurantKey] = Object.keys(restaurants).sort((a, b) =>
//         getAvgSalary(restaurants[b]) - getAvgSalary(restaurants[a]) || 1);
//
//      const bestWorkers = restaurants[bestRestaurantKey].workers
//               .slice()
//               .sort((a,b)=> b.salary-a.salary);
//
//      bestRestaurantEl.textContent = `Name: ${bestRestaurantKey} Average Salary: ${getAvgSalary(restaurants[bestRestaurantKey]).toFixed(2)} Best Salary: ${bestWorkers[0].salary}`;
//      workersEl.textContent= bestWorkers.map(x=> `Name: ${x.name} With Salary: ${x.salary}`)
//                     .join(' ');
//
//   }
//}
//
