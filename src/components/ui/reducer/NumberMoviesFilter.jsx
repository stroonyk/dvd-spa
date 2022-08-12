import { useContext } from "react";
import MoviesContext from "../../../store/movies-context";
import NumberFilter from '../core/NumberFilter';

/*
* Our Number of Movies Filter. Does what it says on the tin :)
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