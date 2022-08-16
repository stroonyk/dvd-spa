import React, {useState, useContext, useEffect} from "react";
import {filterMoviesAsync, getMovieFilters } from '../services/movieService';

/*
* This is our wrapper for the context provider
* 1. We create our context
* 2. Expose the context
* 3. Initialise our states
* 4. use side effects to gather our movie and filter data
* 5. Create the context object for the Provider
*/

// our context 
const MoviesContext = React.createContext({})

// we export this
const useMoviesContext = () => {
    const context = useContext(MoviesContext);
    if (!context){
        throw new Error("useFilterContext must be used within a filtercprovider");
    }
    return context;
}

//  our provider with state and values
const MoviesProvider = (props) => {
    const DEFAULT_NUMBER_OF_MOVIES = 200;
    const [numberOfMovies, setNumberOfMovies] = useState(DEFAULT_NUMBER_OF_MOVIES);
    const [uiNumberOfMovies,setUINumberOfMovies] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedBudget, setSelectedBudget] = useState([0, 350]);
    const [selectedRating, setSelectedRating] = useState([0, 10]);
    const [selectedRuntime, setSelectedRuntime] = useState([0, 180]);
    const [selectedStartDate, setSelectedStartDate] = useState(); 
    const [selectedEndDate, setSelectedEndDate] = useState();
    const [genres,setGenres] = useState([]);
    const [languages,setLanguages] = useState([]);  
    const [statuses,setStatus] = useState([]);
    const [movies, setMovies] = useState([]);
    const [liked,setLiked] = useState(new Map());
    const [disliked,setDisliked] = useState(new Map());

    // get our filters
    useEffect(() => {
        let filters = getMovieFilters();
        
        // assign them to our states for our dropdowns
        setGenres(filters.genres);
        setLanguages(filters.languages);
        setStatus(filters.statuses);
      },[]);

      // get our movies
      useEffect(() => {
        const search = async () => {
            let movies = await filterMoviesAsync(selectedGenre, selectedLanguage, selectedStatus,
            selectedBudget,selectedRating,selectedRuntime,selectedStartDate,selectedEndDate,numberOfMovies);
            setMovies(movies)
        }
        search()
    }, [selectedGenre, selectedLanguage, selectedStatus,selectedBudget,selectedRating,
        selectedRuntime, selectedStartDate,selectedEndDate,numberOfMovies])

    // value for our context provider
    const MoviesContextValue = {
        DEFAULT_NUMBER_OF_MOVIES,
        numberOfMovies,
        setNumberOfMovies,
        uiNumberOfMovies,
        setUINumberOfMovies,
        selectedStartDate,
        setSelectedStartDate,
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
        selectedEndDate,
        setSelectedEndDate,
        genres,
        setGenres,
        languages,
        setLanguages,
        statuses,
        setStatus,
        liked,
        setLiked,
        disliked,
        setDisliked,
        movies,
        setMovies
    }

    return (
        <MoviesContext.Provider value={MoviesContextValue} >
            {props.children}
        </MoviesContext.Provider>
    )
}
export {MoviesProvider, useMoviesContext};