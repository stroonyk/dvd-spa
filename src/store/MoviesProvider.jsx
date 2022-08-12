import {useReducer, useEffect} from "react";
import MoviesContext from "./movies-context";
import { filterMoviesAsync, getMovieFilters } from "../services/movieService";
import moviesReducer, {moviesActionFactory, moviesInitialState, DEFAULT_NUMBER_OF_MOVIES} from "./moviesReducer";

const MoviesProvider = ({children}) => {

    const [state, moviesDispatch] = useReducer(moviesReducer, moviesInitialState);


    useEffect(() => {
        // get our filters
        let filters = getMovieFilters();
        
        // // assign them to our states for our dropdowns
        let action = moviesActionFactory.createInitialiseGenresAction(filters.genres);
        moviesDispatch(action);
        action = moviesActionFactory.createInitialiseLanguagesAction(filters.languages);
        moviesDispatch(action)
        action = moviesActionFactory.createInitialiseStatusesAction(filters.statuses);
        moviesDispatch(action)

        // setGenres(filters.genres);
        // setLanguages(filters.languages);
        // setStatus(filters.statuses);
    },[]);

    useEffect(() => {
        const search = async () => {
            //(genre, language, status, budget, rating, runtime, startdate, enddate, recordCount)
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
        state.selectedBudget, state.selectedRuntime,
        state.selectedRating,                
        state.selectedGenre,
        state.selectedLanguage,
        state.selectedStatus, ]
    )


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
    // const filterMoviesHandler = (filter) => {
    //     const action = 
    //     moviesDispatch(action);
    // }
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
    return (
        <MoviesContext.Provider value={moviesContext} >
            {children}
        </MoviesContext.Provider>
    );

}

export default MoviesProvider;