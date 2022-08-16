
import Box from '@mui/material/Box';
import NumberFilter from '../core/NumberFilter';

/*
* Our Number of Movies Filter. Does what it says on the tin :)
*/
const NumberMoviesFilter = (props) => {
    
    return (
      <NumberFilter uiNumberOfMovies={props.uiNumberOfMovies}
        DEFAULT_NUMBER_OF_MOVIES={props.DEFAULT_NUMBER_OF_MOVIES}
        onNumberMoviesChangeHandler={props.setNumberOfMoviesHandler}  
        clearMoviesEventHandler={props.clearMoviesEventHandler}
      />
    );
  }

  export default NumberMoviesFilter;