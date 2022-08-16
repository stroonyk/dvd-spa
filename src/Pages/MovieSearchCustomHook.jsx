import React from 'react';
import MoviesFilter from "../components/ui/custom-hook/MoviesFilter";
import { Segment } from "semantic-ui-react";
import MovieList from "../components/ui/custom-hook/MovieList";
import { MoviesProvider } from '../contexts/MoviesContextProvider';

/*
* Just our normal filter and list components wrapped in our new provider which wraps our custom hook and context
* This means that state and handler logic is abstracted away from here
*/
const MovieSearchCustomHook = () => {
    return (
        <MoviesProvider >
            <MoviesFilter />
            <Segment className="outer-div custom-hook" textAlign="center">
                <MovieList  />
            </Segment>
        </MoviesProvider>
    );
}
export default MovieSearchCustomHook;