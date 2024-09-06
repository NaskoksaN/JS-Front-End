function printSongs(input) {
    class Songs{
        constructor(typeList, name, time){
            this.typeList=typeList;
            this.name=name;
            this.time=time;
        }
    }
    function songPrinter(songsToPrint, theme, all=false){
        const arr= songsToPrint.filter(x=> x.typeList===theme ||all);
          arr.forEach(s=> {
                console.log(`${s.name}`);
            });
    }
    const [number,...tokens]=input;
    const songsArr = new Array();
    const theme = tokens.pop();
    tokens.forEach(line => {
        const token = line.split('_');
        let tempSong = new Songs(token[0], token[1], token[2]);
        songsArr.push(tempSong);
    });
    
    const all='all';
    if(theme===all){
        songPrinter(songsArr, theme, true)
    }
    else{
        songPrinter(songsArr, theme);
    }
}

//printSongs([3,
//    'favourite_DownTown_3:14',
//    'favourite_Kiss_4:16',
//    'favourite_Smooth Criminal_4:01',
//    'favourite']
//);
//printSongs([4,
//    'favourite_DownTown_3:14',
//    'listenLater_Andalouse_3:24',
//    'favourite_In To The Night_3:58',
//    'favourite_Live It Up_3:48',
//    'listenLater']
//);

printSongs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);