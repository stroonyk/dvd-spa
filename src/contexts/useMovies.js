import { useMoviesContext } from "./MoviesContextProvider";

/*
* This is our custom hook for accessing the state variables and handlers across our app
*/
const useMovies = () => {
    const {
        DEFAULT_NUMBER_OF_MOVIES,
        numberOfMovies,
        setNumberOfMovies,
        uiNumberOfMovies,
        setUINumberOfMovies,
        selectedStartDate,
        setSelectedStartDate,
        selectedEndDate,
        setSelectedEndDate,
        selectedGenre,
        setSelectedGenre,
        selectedLanguage,
        setSelectedLanguage,
        selectedStatus,
        setSelectedStatus,
        selectedBudget,
        setSelectedBudget,
        selectedRating,
        setSelectedRating,
        selectedRuntime,
        setSelectedRuntime,
        genres,
        languages,
        statuses,
        liked,
        setLiked,
        disliked,
        setDisliked,
        movies
    } = useMoviesContext();
//#region 

    /*
    * These are just our handlers to change state
    */
    const onMovieLikedHandler = (id) => {
        if (liked.get(id)){        
            liked.delete(id)
        } else {    
            disliked.delete(id);            
            setLiked(liked => liked.set(id,true));  
        }
    }
    const onMovieDislikedHandler = (id) => {
        if (disliked.get(id)){        
            disliked.delete(id)
        } else {       
            liked.delete(id);        
            setDisliked(disliked => disliked.set(id,true));  
        }         
    }
    const onNumberMoviesChangeHandler = e => {
        let number = e.currentTarget.value ? e.currentTarget.value : DEFAULT_NUMBER_OF_MOVIES;
        setUINumberOfMovies(e.currentTarget.value);
        setNumberOfMovies(number);
    }
    const clearMoviesEventHandler = () => {
        setUINumberOfMovies('');
        setNumberOfMovies(DEFAULT_NUMBER_OF_MOVIES);
    }
    const handleStartDateSelected = (value) => {
        setSelectedStartDate(value)
    }
    const handleEndDateSelected = (value) => {
        setSelectedEndDate(value)
    }
    const handleBudgetSelected = (value) => {
        setSelectedBudget(value)
    }
    const handleRatingSelected = (value) => {
        setSelectedRating(value)
    }
    const handleRuntimeSelected = (value) => {
        setSelectedRuntime(value)
    }
    const handleGenreSelected = (e) => {
        setSelectedGenre(e.target.value)
    }
    const handleLanguageSelected = (e) => {
        setSelectedLanguage(e.target.value)
    }
    const handleStatusSelected = (e) => {
        setSelectedStatus(e.target.value)
    }
//#endregion

    /*
    * now just return our exposed list of variables and handlers
    */
    return {
        DEFAULT_NUMBER_OF_MOVIES,
        numberOfMovies,
        uiNumberOfMovies, 
        onNumberMoviesChangeHandler,
        clearMoviesEventHandler,
        selectedStartDate,
        handleStartDateSelected,
        selectedEndDate,
        handleEndDateSelected,
        selectedGenre,
        handleGenreSelected,
        selectedLanguage,
        handleLanguageSelected,
        selectedStatus,
        handleStatusSelected,
        selectedBudget,
        handleBudgetSelected,
        selectedRating,
        handleRatingSelected,
        selectedRuntime,
        handleRuntimeSelected,
        liked,
        disliked,
        onMovieLikedHandler,
        onMovieDislikedHandler,
        genres,
        languages,
        statuses,
        movies
    }
}
export default useMovies;