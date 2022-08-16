import {default as useMovies} from "../../../contexts/useMovies";
import NumberFilter from '../core/NumberFilter';

/*
* Our Number of Movies Filter. Does what it says on the tin :)
*/
const NumberMoviesFilter = (props) => {
  // get our values from our customhook
  const {uiNumberOfMovies,DEFAULT_NUMBER_OF_MOVIES,onNumberMoviesChangeHandler,clearMoviesEventHandler} = useMovies();

  return (
    <NumberFilter uiNumberOfMovies={uiNumberOfMovies}
      DEFAULT_NUMBER_OF_MOVIES={DEFAULT_NUMBER_OF_MOVIES}
      onNumberMoviesChangeHandler={onNumberMoviesChangeHandler}
      clearMoviesEventHandler={clearMoviesEventHandler}
       />
  );
}
export default NumberMoviesFilter;