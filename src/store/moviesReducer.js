

const ACTION_TYPE = {
    INITIALISE_MOVIES : "INITIALISE_MOVIES",
    NUMBER_MOVIES_CHANGED : "NUMBER_MOVIES_CHANGED",
    NUMBER_MOVIES_CLEARED : "NUMBER_MOVIES_CLEARED",
    FILTER_MOVIES : "FILTER_MOVIES",
};

export const moviesActionFactory = {
    createInitialiseMoviesAction : (movies) => {
        return { type : ACTION_TYPE.INITIALISE_MOVIES, payload : movies};
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
};
export const DEFAULT_NUMBER_OF_MOVIES = 1;
export const moviesInitialState = {
    movies : [],
    numberOfMovies : DEFAULT_NUMBER_OF_MOVIES,
    uiNumberOfMovies : '',
};

const moviesReducer = (state,action) => {

    switch (action.type){
        case ACTION_TYPE.INITIALISE_MOVIES : {
            let movies= [...action.payload];
            return {
                ...state,
                movies,
            }
        }
        case ACTION_TYPE.NUMBER_MOVIES_CHANGED : {
            let numberOfMovies= [action.payload];
            return {
                ...state,
                numberOfMovies,
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
        default : 
            throw new Error('menu reducer: unknown action type');
    }
}

export default moviesReducer;