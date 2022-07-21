import { useContext } from "react";
import MoviesContext from "../../../store/movies-context";
import GenericMovieList from "../core/GenericMovieList";

const MovieList = () => {
    const moviesCtx = useContext(MoviesContext);
    return (
        <>
            <GenericMovieList movies={moviesCtx.movies} 
            />
        </>
    );
}

export default MovieList;