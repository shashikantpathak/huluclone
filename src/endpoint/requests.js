
const API_KEY = process.env.REACT_APP_API_KEY

const requests= {
    trending: `/trending/all/day?api_key=${API_KEY}&&language=en-US`,
    actionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    SciFicMovies:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
    Romance:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    Animation:`/discover/movie?api_key=${API_KEY}&with_genres=16`,
    TVShows:`/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    TopRated:`/movie/top_rated?api_key=${API_KEY}&&language=en-US`,
    Western:`/discover/movie?api_key=${API_KEY}&with_genres=37`,
    genre: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`

}

module.exports={requests}