function printBooks(input){
    const genreSplit=' -> ';
    const genresList=[];
    for (const line of input) {
        //console.log(line);
        if(line.includes(genreSplit)){
            const[shelfId, shelfGene]=line.split(genreSplit);
            const shelf =shelfId+' '+shelfGene;
            const matchingKey = Object.keys(genresList).find(key => {
                const [tempShelfId, shelfGene] = key.split(' ');
                return tempShelfId === shelfId;
            });
            if(!matchingKey){
                genresList[shelf]=[];
            }
        }else if(line.includes(': ') && line.includes(', ')){
            const[bookTitle, data] = line.split(': ');
            const [author, genre] = data.split(', ');
            const [keys,values] =Object.keys(genresList);
            const matchingKey = Object.keys(genresList).find(key => {
                const [shelfId, shelfGene] = key.split(' ');
                return shelfGene === genre;
            });

            if(matchingKey){
                const tempObj ={
                    bookTitle,
                    author,
                    genre,
                };
                genresList[matchingKey].push(tempObj);
            }
        }
    }
    function getBookCount(arrObj){
        const list = Object.entries(genresList);
        const obj ={}
        for (const [shelf,value] of list) {
            const count = value.length;
            obj[shelf]=count
        }
        return obj;
    }
    const list = (Object.entries(getBookCount(genresList)))
        .sort(([, a], [, b]) => b - a);

    for (const [shelf,count] of list) {
        const [id, genre] = shelf.split(' ');
        console.log(`${id} ${genre}: ${count}`);
        const tempBook = Object.entries(genresList[shelf]);
        tempBook.sort(([, a], [, b]) => a.bookTitle.localeCompare(b.bookTitle));
        for (const [key,value] of tempBook) {
            console.log(`--> ${value.bookTitle}: ${value.author}`);
        }
    }

    const t=0;
}

printBooks(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history']);
//printBooks(['1 -> mystery', '2 -> sci-fi',
//    'Child of Silver: Bruce Rich, mystery',
//    'Lions and Rats: Gabe Roads, history',
//    'Effect of the Void: Shay B, romance',
//    'Losing Dreams: Gail Starr, sci-fi',
//    'Name of Earth: Jo Bell, sci-fi']
//);