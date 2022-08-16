import {useReducer, useEffect} from "react";
import MoviesContext from "./movies-context";
import { filterMoviesAsync, getMovieFilters } from "../services/movieService";
import moviesReducer, {moviesActionFactory, moviesInitialState, DEFAULT_NUMBER_OF_MOVIES} from "./moviesReducer";

/*
* This is our wrapper for our Provider/Context 
* 1. We use a reducer hook to take care of the state manipulation
* 2. We use side effects here to gather the movie data, which may change depending on the state of the components
* 3. We handle all the components change of state by creating actions and dispatching them to the reducer
* 4. We provide state and handler context for all our components
*/
const MoviesProvider = ({children}) => {
    // this is our reducer hook
    const [state, moviesDispatch] = useReducer(moviesReducer, moviesInitialState);

    // get our filters
    useEffect(() => {
        let filters = getMovieFilters();
        
        // create an action relating to populating the dropdowns. then dispatch. 
        let action = moviesActionFactory.createInitialiseGenresAction(filters.genres);
        moviesDispatch(action);
        action = moviesActionFactory.createInitialiseLanguagesAction(filters.languages);
        moviesDispatch(action)
        action = moviesActionFactory.createInitialiseStatusesAction(filters.statuses);
        moviesDispatch(action)
    },[]);

    // get our movies using an async await pattern
    useEffect(() => {
        const search = async () => {
            let movies = await filterMoviesAsync(
                state.selectedGenre,
                state.selectedLanguage,
                state.selectedStatus,
                state.selectedBudget,
                state.selectedRating,                
                state.selectedRuntime,                
                state.selectedStartDate,
                state.selectedEndDate,
                state.numberOfMovies,                                
            );            
            const action = moviesActionFactory.createInitialiseMoviesAction(movies);
            moviesDispatch(action);
        }
        search()        
    }, [state.numberOfMovies,state.selectedStartDate,state.selectedEndDate,
        state.selectedBudget, state.selectedRuntime, state.selectedRating,                
        state.selectedGenre, state.selectedLanguage, state.selectedStatus, ]
    )
    /*
    * these are our handlers executed when the components values change
    * Just create an action using the factory and sending in our payload
    * Then dispatch our action to the reducer
    */
    const numberMoviesChangedHandler = (e) => {
        let numberMovies =  e.currentTarget.value ? e.currentTarget.value : DEFAULT_NUMBER_OF_MOVIES;
        const action = moviesActionFactory.createNumberOfMoviesAction(numberMovies);
        moviesDispatch(action);
    }
    const numberMoviesClearedHandler = () => {
        const action = moviesActionFactory.createNumberOfMoviesClearedAction();
        moviesDispatch(action);
    }
    const selectedStartDateHandler = (startDate) => {
        const action = moviesActionFactory.createStartDateChangedAction(startDate);
        moviesDispatch(action);
    }
    const selectedEndDateHandler = (endDate) => {
        const action = moviesActionFactory.createEndDateChangedAction(endDate);
        moviesDispatch(action);
    }    
    const selectedBudgetChangedHandler = (budget) => {
        const action = moviesActionFactory.createSelectedBudgetChangedAction(budget);
        moviesDispatch(action);
    }   
    const selectedRatingChangedHandler = (rating) => {
        const action = moviesActionFactory.createSelectedRatingChangedAction(rating);
        moviesDispatch(action);
    }
    const selectedRuntimeChangedHandler = (runtime) => {
        const action = moviesActionFactory.createSelectedRuntimeChangedAction(runtime);
        moviesDispatch(action);
    }
    const selectedLanguageChangedHandler = (e) => {
        let language = e.target.value;
        const action = moviesActionFactory.createSelectedLanguageChangedAction(language);
        moviesDispatch(action);
    }   
    const selectedGenreChangedHandler = (e) => {
        let genre = e.target.value;
        const action = moviesActionFactory.createSelectedGenreChangedAction(genre);
        moviesDispatch(action);
    }   
    const selectedStatusChangedHandler = (e) => {
        let status = e.target.value;
        const action = moviesActionFactory.createSelectedStatusChangedAction(status);
        moviesDispatch(action);
    }     
    /*
    * Heres our context object. State is nicely saved as is 
    * Just expose our handlers
    */              
    const moviesContext = {
        ...state,
        DEFAULT_NUMBER_OF_MOVIES : DEFAULT_NUMBER_OF_MOVIES,
        numberMoviesChanged : numberMoviesChangedHandler,
        numberMoviesCleared : numberMoviesClearedHandler,
        startDateChanged : selectedStartDateHandler,
        endDateChanged : selectedEndDateHandler,
        selectedBudgetChanged : selectedBudgetChangedHandler,
        selectedRatingChanged : selectedRatingChangedHandler,
        selectedRuntimeChanged : selectedRuntimeChangedHandler,
        selectedLanguageChanged : selectedLanguageChangedHandler,
        selectedGenreChanged : selectedGenreChangedHandler,
        selectedStatusChanged : selectedStatusChangedHandler,
    };
    // just wrap our children in our context provider
    return (
        <MoviesContext.Provider value={moviesContext} >
            {children}
        </MoviesContext.Provider>
    );
}

export default MoviesProvider;