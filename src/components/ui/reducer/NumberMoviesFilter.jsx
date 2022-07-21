import { useContext } from "react";
import NumberFilter from '../core/NumberFilter';
import MoviesContext from "../../../store/movies-context";

/*
* Our Number of Movies Filter. Does what it says on the tin :)
*/
// const NumberMoviesFilter = (props) => {
const NumberMoviesFilter = (props) => {

  // get our values from our customhook
  //const {uiNumberOfMovies,DEFAULT_NUMBER_OF_MOVIES,onNumberMoviesChangeHandler,clearMoviesEventHandler} = useMovies();
  const moviesCtx = useContext(MoviesContext);

  return (
    <NumberFilter uiNumberOfMovies={moviesCtx.uiNumberOfMovies}
       />
    // <NumberFilter uiNumberOfMovies={uiNumberOfMovies}
    //   DEFAULT_NUMBER_OF_MOVIES={DEFAULT_NUMBER_OF_MOVIES}
    //   onNumberMoviesChangeHandler={onNumberMoviesChangeHandler}
    //   clearMoviesEventHandler={clearMoviesEventHandler}
    //    />
  );
}
export default NumberMoviesFilter;