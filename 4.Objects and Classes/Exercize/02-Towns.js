function towns(input){
    const townArr = [];
    input.forEach(element => {
        const tokens = element.split(' | ');
        const townObj ={
            townName:tokens[0],
            latitude:Number(tokens[1]).toFixed(2),
            longitude : Number(tokens[2]).toFixed(2),
        }


        // NOT GIVE EXACT RETURN OF OBJ
        //const [townName, latitude, longitude] = element.split(' | ');

        //const townObj={[townName]:{
        //    latitude:Number(latitude).toFixed(2),
        //    longitude:Number(longitude).toFixed(2),
        //}};

        townArr.push(townObj);
    });
    for (const item of townArr) {
        console.log(item);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
    );
towns(['Plovdiv | 136.45 | 812.575']);