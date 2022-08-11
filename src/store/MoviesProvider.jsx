import {useReducer, useEffect} from "react";
import MoviesContext from "./movies-context";
import { filterMoviesAsyncNumber } from "../services/movieService";
import moviesReducer, {moviesActionFactory, moviesInitialState, DEFAULT_NUMBER_OF_MOVIES} from "./moviesReducer";

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
    const numberMoviesChangedHandler = (numberMovies) => {
        console.log('hehe' + numberMovies );
        const action = moviesActionFactory.createNumberOfMoviesAction(numberMovies);
        moviesDispatch(action);
    }
    const numberMoviesClearedHandler = () => {
        const action = moviesActionFactory.createNumberOfMoviesClearedAction();
        moviesDispatch(action);
    }
    // const filterMoviesHandler = (filter) => {
    //     const action = 
    //     moviesDispatch(action);
    // }
    const moviesContext = {
        ...state,
        DEFAULT_NUMBER_OF_MOVIES : DEFAULT_NUMBER_OF_MOVIES,
        numberMoviesChanged : numberMoviesChangedHandler,
        numberMoviesCleared : numberMoviesClearedHandler,
    };
    return (
        <MoviesContext.Provider value={moviesContext} >
            {children}
        </MoviesContext.Provider>
    );

}

export default MoviesProvider;