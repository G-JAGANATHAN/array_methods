movie=[{
    movieId:1,
    title:"vikram",
    year:2022,
    rating:8.6,
    geners:["Action","Thriller"],
    cast:[{name:"Actor1",role:"Hero"},
        {name:"Actor2",role:"Villain"}
    ],
    deatils:{
        language:"Tamil",duration:175
    }
}];

const displayMoviedeatils = (movie) => {
    const moviedeatil= movie;
    for(const key in moviedeatil){

        console.log(key + ":" + moviedeatil[key]);
        
    }
}  
displayMoviedeatils(movie[0]);

const displayGeners =(movie)=>{
    for(const gener of movie.geners){
    

     console.log("\n",gener);}
     
}
displayGeners(movie[0]);

const displayMovieByYear=(movie,target)=>{
    const filterMovies=movie.filter(movie => movie.year === target);
    console.log("\n",filterMovies);
};
displayMovieByYear(movie,2022);

const displayMovieById = (movie,targetId) => {
    const foundMovie=movie.find(movie => movie.movieId === targetId);
    console.log("\n",foundMovie);

}
displayMovieById(movie,1);

const addgener=(movie,newgener)=>{
    movie.geners.push(newgener);
};
addgener(movie[0],'Drama');
console.log(movie[0].geners);

const getmovieTitle=(movies)=>{
    return movies.map(movie=>movie.title);
};
console.log(getmovieTitle(movie));
