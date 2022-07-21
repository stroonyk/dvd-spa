import MoviesProvider from "../store/MoviesProvider";
import MovieList from "../components/ui/reducer/MovieList";
import { Segment } from "semantic-ui-react";
import MoviesFilter from "../components/ui/reducer/MoviesFilter";

const MovieSearchReducer = () => {
    return (
        <MoviesProvider >
            <MoviesFilter />
            <Segment className="outer-div reducer" textAlign="center">
              <MovieList />
            </Segment> 
        </MoviesProvider>
     
    );
}

export default MovieSearchReducer;