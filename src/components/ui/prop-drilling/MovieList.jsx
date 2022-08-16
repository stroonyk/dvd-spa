import GenericMovieList from "../core/GenericMovieList";

/*
* Our MoviesList component when using prop drilling
*/
const MovieList = (props) => {
    return (
        <GenericMovieList movies={props.movies} 
            onMovieLikedHandler={props.handleMoviesLiked}
            onMovieDislikedHandler={props.onMovieDislikedHandler}
            liked={props.liked}
            disliked={props.disliked}
        />  
    );
  }

  export default MovieList;