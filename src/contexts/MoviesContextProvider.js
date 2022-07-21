import React, {useState, useContext, useEffect} from "react";
import {filterMoviesAsync, getMovieFilters } from '../services/movieService';


const MoviesContext = React.createContext({})

const useMoviesContext = () => {
    const context = useContext(MoviesContext);
    if (!context){
        throw new Error("useFilterContext must be used within a filtercprovider");
    }
    return context;
}

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

    useEffect(() => {
        // get our filters
        let filters = getMovieFilters();
        
        // assign them to our states for our dropdowns
        setGenres(filters.genres);
        setLanguages(filters.languages);
        setStatus(filters.statuses);
      },[]);

      useEffect(() => {
        //console.log('useeffect');
        const search = async () => {
            let movies = await filterMoviesAsync(selectedGenre, selectedLanguage, selectedStatus,
            selectedBudget,selectedRating,selectedRuntime,selectedStartDate,selectedEndDate,numberOfMovies);
            setMovies(movies)
        }
        search()
    }, [selectedGenre, selectedLanguage, selectedStatus,selectedBudget,selectedRating,selectedRuntime,selectedStartDate,selectedEndDate,numberOfMovies])

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