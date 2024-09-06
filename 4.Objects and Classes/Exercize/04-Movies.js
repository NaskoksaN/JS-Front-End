function showMovies(input){
    let movies = [];
    
    input.forEach(line => {
        if(line.startsWith('addMovie')){
            const name = line.split('addMovie ')[1].trim();
            movies.push({name});
        } else if(line.includes('directedBy')){
            const [name, director] = line.split(' directedBy ').filter(Boolean);
            const movie = movies.find(x => x.name === name);
            if(movie){
                movie.director=director;
            }
        } else if(line.includes('onDate')){
            const [name, date] = line.split(' onDate ').filter(Boolean);
            const movie = movies.find(x => x.name === name);
            if(movie){
                movie.date=date;
            }
        }
    });

    const filtered = movies.filter(movie=> movie.name && movie.director && movie.date);
    filtered.forEach(element => {
        const json = JSON.stringify(element)
        console.log(json);
    });
}

//"addMovie {movie name}" – add the movie
//"{movie name} directedBy {director}" – check if the movie exists and then add the director
//"{movie name} onDate {date}" – check if the movie exists and then add the date


showMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);
showMovies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    );