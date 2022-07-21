

const ACTION_TYPE = {
    INITIALISE_MOVIES : "INITIALISE_MOVIES",
    NUMBER_MOVIES_CHANGED : "NUMBER_MOVIES_CHANGED",
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
};

export const moviesInitialState = {
    movies : [],
    numberOfMovies : 200,
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
        default : 
            throw new Error('menu reducer: unknown action type');
    }
}

export default moviesReducer;