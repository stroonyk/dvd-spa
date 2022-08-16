import {default as useMovies} from "../../../contexts/useMovies";
import GenericMovieList from "../core/GenericMovieList";

/*
* Our MoviesList component using a custom hook into the context stuff
*/
const MovieList = (props) => {
    // get our values from our customhook
    const {movies,onMovieLikedHandler,onMovieDislikedHandler,liked,disliked} = useMovies();
     return (
        <GenericMovieList movies={movies} 
            onMovieLikedHandler={onMovieLikedHandler}
            onMovieDislikedHandler={onMovieDislikedHandler}
            liked={liked}
            disliked={disliked}
        />
     );
   }
  export default MovieList;