/*
* This is our bad boy reducer. It abstacts away the state manipulation from
* our context and our components
* 1. Localise all our ACTION_TYPES
* 2. Expose an action factory for creating actions by the Provider
* 3. Expose and initialise our Inital State
*/

// Our action types
const ACTION_TYPE = {
    INITIALISE_MOVIES : "INITIALISE_MOVIES",
    INITIALISE_LANGUAGES : "INITIALISE_LANGUAGES",
    INITIALISE_STATUSES : "INITIALISE_STATUSES",
    INITIALISE_GENRES : "INITIALISE_GENRES",
    NUMBER_MOVIES_CHANGED : "NUMBER_MOVIES_CHANGED",
    NUMBER_MOVIES_CLEARED : "NUMBER_MOVIES_CLEARED",
    START_DATE_CHANGED : "START_DATE_CHANGED",
    END_DATE_CHANGED : "END_DATE_CHANGED",
    SELECTED_BUDGET_CHANGED : "SELECTED_BUDGET_CHANGED",
    SELECTED_RATING_CHANGED : "SELECTED_RATING_CHANGED",
    SELECTED_RUNTIME_CHANGED : "SELECTED_RUNTIME_CHANGED",
    SELECTED_GENRE_CHANGED : "SELECTED_GENRES_CHANGED",
    SELECTED_LANGUAGE_CHANGED : "SELECTED_LANGUAGES_CHANGED",
    SELECTED_STATUS_CHANGED : "SELECTED_STATUS_CHANGED",
    MOVIE_LIKED_CHANGED : "MOVIE_LIKED_CHANGED",
    MOVIE_DISLIKED_CHANGED : "MOVIE_DISLIKED_CHANGED",
    FILTER_MOVIES : "FILTER_MOVIES",
};

// Our exposed factory/
export const moviesActionFactory = {
    createInitialiseMoviesAction : (movies) => {
        return { type : ACTION_TYPE.INITIALISE_MOVIES, payload : movies};
    },
    createInitialiseGenresAction : (genres) => {
        return { type : ACTION_TYPE.INITIALISE_GENRES, payload : genres};
    }, 
    createInitialiseLanguagesAction : (languages) => {
        return { type : ACTION_TYPE.INITIALISE_LANGUAGES, payload : languages};
    },    
    createInitialiseStatusesAction : (statuses) => {
        return { type : ACTION_TYPE.INITIALISE_STATUSES, payload : statuses};
    },               
    createFilterMoviesAction : (filter) => {
        return {type:ACTION_TYPE.FILTER_MOVIES, payload : filter};
    },
    createNumberOfMoviesAction : (numberOfMovies) => {
        return {type:ACTION_TYPE.NUMBER_MOVIES_CHANGED, payload : numberOfMovies};
    },
    createNumberOfMoviesClearedAction : () => {
        return {type:ACTION_TYPE.NUMBER_MOVIES_CLEARED};
    },
    createStartDateChangedAction : (startDate) => {
        return {type:ACTION_TYPE.START_DATE_CHANGED, payload : startDate};
    }, 
    createEndDateChangedAction : (endDate) => {
        return {type:ACTION_TYPE.END_DATE_CHANGED, payload : endDate};
    },
    createSelectedBudgetChangedAction : (selectedBudget) => {
        return {type:ACTION_TYPE.SELECTED_BUDGET_CHANGED, payload : selectedBudget};
    },   
    createSelectedRatingChangedAction : (selectedRating) => {
        return {type:ACTION_TYPE.SELECTED_RATING_CHANGED, payload : selectedRating};
    },  
    createSelectedRuntimeChangedAction : (selectedRuntime) => {
        return {type:ACTION_TYPE.SELECTED_RUNTIME_CHANGED, payload : selectedRuntime};
    },   
    createSelectedLanguageChangedAction : (selectedLanguage) => {
        return {type:ACTION_TYPE.SELECTED_LANGUAGE_CHANGED, payload : selectedLanguage};
    },  
    createSelectedGenreChangedAction : (selectedGenre) => {
        return {type:ACTION_TYPE.SELECTED_GENRE_CHANGED, payload : selectedGenre};    
    },                              
    createSelectedStatusChangedAction : (selectedStatus) => {
        return {type:ACTION_TYPE.SELECTED_STATUS_CHANGED, payload : selectedStatus};
    }, 
    createMovieLikedChangedAction : (selectedMovieId) => {
        return {type:ACTION_TYPE.MOVIE_LIKED_CHANGED, payload : selectedMovieId};
    },           
    createMovieDislikedChangedAction : (selectedMovieId) => {
        return {type:ACTION_TYPE.MOVIE_DISLIKED_CHANGED, payload : selectedMovieId};
    },     
};

// our exposed initial state
export const DEFAULT_NUMBER_OF_MOVIES = 200;
export const moviesInitialState = {
    movies : [],
    numberOfMovies : DEFAULT_NUMBER_OF_MOVIES,
    uiNumberOfMovies : '',
    selectedStartDate : '',
    selectedEndDate : '',
    selectedBudget : [0, 350],
    selectedRating : [0, 10] ,
    selectedRuntime : [0, 180] ,
    selectedLanguage : '',
    selectedGenre : '',
    selectedStatus : '',
    genres : [],
    languages : [],
    statuses : [],
    liked : new Map(),
    disliked : new Map(),
};

/*
* What everyone has been waiting for. THe meat of the reducer. 
* Just a massive switch to create a new state object depending on the action
*/
const moviesReducer = (state,action) => {
    switch (action.type){
        case ACTION_TYPE.INITIALISE_MOVIES : {
            let movies= [...action.payload];
            return {
                ...state,
                movies,
            }
        }
        case ACTION_TYPE.INITIALISE_LANGUAGES : {
            let languages= [...action.payload];
            return {
                ...state,
                languages,
            }
        }
        case ACTION_TYPE.INITIALISE_GENRES : {
            let genres = [...action.payload];
            return {
                ...state,
                genres,
            }
        }
        case ACTION_TYPE.INITIALISE_STATUSES : {
            let statuses = [...action.payload];
            return {
                ...state,
                statuses,
            }
        }
        case ACTION_TYPE.NUMBER_MOVIES_CHANGED : {
            let numberOfMovies= [action.payload];
            let uiNumberOfMovies = numberOfMovies;
            return {
                ...state,
                numberOfMovies,
                uiNumberOfMovies,
            }
        }
        case ACTION_TYPE.NUMBER_MOVIES_CLEARED : {
            let numberOfMovies = DEFAULT_NUMBER_OF_MOVIES;
            let uiNumberOfMovies = '';
            return {
                ...state,
                numberOfMovies,
                uiNumberOfMovies,
            }
        }
        case ACTION_TYPE.START_DATE_CHANGED : {
            let selectedStartDate = [action.payload];
            return {
                ...state,
                selectedStartDate,
            }
        }   
        case ACTION_TYPE.END_DATE_CHANGED : {
            let selectedEndDate = [action.payload];
            return {
                ...state,
                selectedEndDate,
            }
        }      
        case ACTION_TYPE.SELECTED_BUDGET_CHANGED : {
            let selectedBudget = [...action.payload];
            return {
                ...state,
                selectedBudget,
            }
        }   
        case ACTION_TYPE.SELECTED_RATING_CHANGED : {
            let selectedRating = [...action.payload];
            return {
                ...state,
                selectedRating,
            }
        }   
        case ACTION_TYPE.SELECTED_RUNTIME_CHANGED : {
            let selectedRuntime = [...action.payload];
            return {
                ...state,
                selectedRuntime,
            }
        }   
        case ACTION_TYPE.SELECTED_LANGUAGE_CHANGED : {
            let selectedLanguage = action.payload;
            return {
                ...state,
                selectedLanguage,
            }
        }   
        case ACTION_TYPE.SELECTED_GENRE_CHANGED : {
            let selectedGenre = action.payload;
            return {
                ...state,
                selectedGenre,
            }
        }  
        case ACTION_TYPE.SELECTED_STATUS_CHANGED : {
            let selectedStatus = action.payload;
            return {
                ...state,
                selectedStatus,
            }
        } 
        case ACTION_TYPE.MOVIE_LIKED_CHANGED : {
            let id = action.payload;
            if (state.liked.get(id)){        
                state.liked.delete(id)
            } else {    
                state.disliked.delete(id);            
                state.liked.set(id,true);  
            }            
            return {
                ...state
            }
        }   
        case ACTION_TYPE.MOVIE_DISLIKED_CHANGED : {
            let id = action.payload;
            if (state.disliked.get(id)){        
                state.disliked.delete(id)
            } else {    
                state.liked.delete(id);            
                state.disliked.set(id,true);  
            }            
            return {
                ...state
            }
        }                                                                         
        default : 
            throw new Error('menu reducer: unknown action type');
    }
}

export default moviesReducer;