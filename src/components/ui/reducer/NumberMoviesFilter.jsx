import { useContext } from "react";
import MoviesContext from "../../../store/movies-context";
import NumberFilter from '../core/NumberFilter';

/*
* just a wrapper for our select widget using the context provider/reducer
* 
* Use default properties to stop the sliders overlapping and to mark the slider points
*/
const NumberMoviesFilter = () => {
  // get our values from our context
  const moviesCtx = useContext(MoviesContext);
  return (
    <NumberFilter 
      uiNumberOfMovies={moviesCtx.uiNumberOfMovies}
      DEFAULT_NUMBER_OF_MOVIES={moviesCtx.DEFAULT_NUMBER_OF_MOVIES}
      onNumberMoviesChangeHandler={moviesCtx.numberMoviesChanged}
      clearMoviesEventHandler={moviesCtx.numberMoviesCleared}
    />
  );
}
export default NumberMoviesFilter;