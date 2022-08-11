import { useContext } from "react";
import NumberFilter from '../core/NumberFilter';
import MoviesContext from "../../../store/movies-context";

/*
* Our Number of Movies Filter. Does what it says on the tin :)
*/
const onNumberMoviesChangeHandler = e => {
  let number = e.currentTarget.value ? e.currentTarget.value : 1;
  console.log('number' + number);
}
const NumberMoviesFilter = (props) => {

  // get our values from our customhook
  //const {uiNumberOfMovies,DEFAULT_NUMBER_OF_MOVIES,onNumberMoviesChangeHandler,clearMoviesEventHandler} = useMovies();
  const moviesCtx = useContext(MoviesContext);

  return (
    <NumberFilter uiNumberOfMovies={moviesCtx.uiNumberOfMovies}
      DEFAULT_NUMBER_OF_MOVIES={moviesCtx.DEFAULT_NUMBER_OF_MOVIES}
      //onNumberMoviesChangeHandler={moviesCtx.numberMoviesChanged}
      onNumberMoviesChangeHandler={onNumberMoviesChangeHandler}
      clearMoviesEventHandler={moviesCtx.numberMoviesCleared}
       />
    // <NumberFilter uiNumberOfMovies={uiNumberOfMovies}
    //   DEFAULT_NUMBER_OF_MOVIES={DEFAULT_NUMBER_OF_MOVIES}
    //   onNumberMoviesChangeHandler={onNumberMoviesChangeHandler}
    //   clearMoviesEventHandler={clearMoviesEventHandler}
    //    />
  );
}
export default NumberMoviesFilter;