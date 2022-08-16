import React, { useEffect, useState } from 'react';
import MoviesFilter from "../components/ui/prop-drilling/MoviesFilter";
import { Segment } from "semantic-ui-react";
import MovieList from "../components/ui/prop-drilling/MovieList";
import {filterMoviesAsync, getMovieFilters } from '../services/movieService';

/*
* For our Prop Drilling component, we have all our state, useeffect and state handling in one place. Here!
* 1. Initialise our state
* 2. Gather our data using side effects. 
* 3. Handle the change of states when components change by the UI
* 4. Send all the states and handlers into the Filter components using Prop Drilling
* 5. Same for the Movies List. 
*/
const MovieSearch = () => {
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

  /*
  * Get our filters from the movieService
  */
  useEffect(() => {
    // get our filters
    let filters = getMovieFilters();

    // assign them to our states for our dropdowns
    setGenres(filters.genres);
    setLanguages(filters.languages);
    setStatus(filters.statuses);
  },[]);

  /*
  * Get our movies based on our filters
  */
  useEffect(() => {
    const search = async () => {
        let movies = await filterMoviesAsync(selectedGenre, selectedLanguage, selectedStatus,
         selectedBudget,selectedRating,selectedRuntime,selectedStartDate,selectedEndDate,numberOfMovies);
        setMovies(movies)
    }
    search()
  }, [selectedGenre, selectedLanguage, selectedStatus,selectedBudget,selectedRating,selectedRuntime,selectedStartDate,selectedEndDate,numberOfMovies])
/*
* all our change handlers
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
/*
* using a lot of prop drilling for state management across components
* probably best to use context with a reducer custom hooks?
*/
return (
    <>
        <MoviesFilter 
          genres={genres}
          languages={languages}
          status={statuses}
          selectedGenre={selectedGenre}
          selectedLanguage={selectedLanguage}
          selectedStatus={selectedStatus}
          selectedBudget={selectedBudget}
          selectedRuntime={selectedRuntime}
          selectedRating={selectedRating}
          selectedStartDate={selectedStartDate}
          selectedEndDate={selectedEndDate}
          DEFAULT_NUMBER_OF_MOVIES={DEFAULT_NUMBER_OF_MOVIES}
          uiNumberOfMovies={uiNumberOfMovies}
          clearMoviesEventHandler={clearMoviesEventHandler}
          onNumberMoveiesSelected={onNumberMoviesChangeHandler}
          onStartDateSelected={handleStartDateSelected}
          onEndDateSelected={handleEndDateSelected}
          onRuntimeSelected={handleRuntimeSelected}
          onRatingSelected={handleRatingSelected}
          onBudgetSelected={handleBudgetSelected}
          onGenreSelected={handleGenreSelected}
          onLanguageSelected={handleLanguageSelected}
          onStatusSelected={handleStatusSelected} 
        />
        <Segment className="outer-div prop-drilling" textAlign="center">
          <MovieList movies={movies} onMovieLikedHandler={onMovieLikedHandler} 
            onMovieDislikedHandler={onMovieDislikedHandler}
            liked={liked} disliked={disliked} 
          />
        </Segment>
    </>
);

}

export default MovieSearch;