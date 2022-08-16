import { useContext } from "react";
import MoviesContext from "../../../store/movies-context";
import GenericMovieList from "../core/GenericMovieList";

/*
* our Movies List component. We're contained within a Provider
* which allows the component to use it and then the Reducer. No need for Prop Drilling!
*/
const MovieList = () => {
    const moviesCtx = useContext(MoviesContext);
    return (
        <>
            <GenericMovieList movies={moviesCtx.movies} />
        </>
    );
}

export default MovieList;