import MoviesProvider from "../store/MoviesProvider";
import MovieList from "../components/ui/reducer/MovieList";
import { Segment } from "semantic-ui-react";
import MoviesFilter from "../components/ui/reducer/MoviesFilter";

/*
* Just our normal filter and list components wrapped in our new provider which wraps our reducer hook and context
* This means that state and handler logic is abstracted away from here into their respective components
*/
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