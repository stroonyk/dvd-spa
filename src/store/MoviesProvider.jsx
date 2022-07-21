import {useReducer, useEffect} from "react";
import MoviesContext from "./movies-context";
import { filterMoviesAsyncNumber } from "../services/movieService";
import moviesReducer, {moviesActionFactory, moviesInitialState} from "./moviesReducer";

const MoviesProvider = ({children}) => {
    const [state, moviesDispatch] = useReducer(moviesReducer, moviesInitialState);


    useEffect(() => {
        // get our filters
        // let filters = getMovieFilters();
        
        // // assign them to our states for our dropdowns
        // setGenres(filters.genres);
        // setLanguages(filters.languages);
        // setStatus(filters.statuses);
      },[]);

      useEffect(() => {
        //console.log('useeffect');
        const search = async () => {
            let movies = await filterMoviesAsyncNumber(state.numberOfMovies);
            const action = moviesActionFactory.createInitialiseMoviesAction(movies);
            moviesDispatch(action)
        }
        search([state.numberOfMovies])
    }, )

    // const filterMoviesHandler = (filter) => {
    //     const action = 
    //     moviesDispatch(action);
    // }
    const moviesContext = {
        ...state,
    };
    return (
        <MoviesContext.Provider value={moviesContext} >
            {children}
        </MoviesContext.Provider>
    );

}

export default MoviesProvider;