function printArmies(input) {
    const leader=[];
    input.forEach(inputEl => {
        if(inputEl.includes('arrives')){
            const tokens = inputEl.split(' ');
            const leaderName = tokens.slice(0, tokens.length-1).join(' ');
            leader[leaderName]=[];
        } else if(inputEl.includes(',') && inputEl.includes(': ')){
            const [leaderName, data]=inputEl.split(': ');
            const [armyName, countStr] = data.split(', ');
            const count = Number(countStr);
            if(leader[leaderName]){
                leader[leaderName].push({ armyName, count });
            }
        }else if(inputEl.includes(' + ')){
            const [armyName, countStr] = inputEl.split(' + ');
            const count = Number(countStr);
            Object.entries(leader).forEach(([_, armies]) => {
                armies.forEach(army => {
                    if (army.armyName === armyName) {
                        army.count += count;
                    }
                });
            });
        } else if(inputEl.includes('defeated')){
            const tokens = inputEl.split(' ');
            const leaderName = tokens.slice(0, tokens.length-1).join(' ');
            if(leader[leaderName]){
                delete leader[leaderName];
            }
        }
    });
    function countArmySize(inputLeader) {
        let biggestArmy={};
        Object.entries(inputLeader)
            .forEach(([leader, armies]) => {
                let size=0;
                armies.forEach(army => {
                    size += army.count;
                });
                biggestArmy[leader]=size;
            });

        return biggestArmy;
    }
    
    const sortedOrder = Object.entries(countArmySize(leader))
        .sort(([, sizeA], [, sizeB]) => sizeB - sizeA);
    for (const [leaderName,size] of sortedOrder) {
        console.log(`${leaderName}: ${size}`);
        let armies = leader[leaderName];
        armies.sort((a,b) =>  b.count - a.count);
        armies.forEach(army=> {
            console.log(`>>> ${army.armyName} - ${army.count}`);
        });
    }
    const t=0;
}

printArmies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);