
import Box from '@mui/material/Box';
import NumberFilter from '../core/NumberFilter';

/*
* Our Number of Movies Filter. Does what it says on the tin :)
*/
const NumberMoviesFilter = (props) => {

    // show placeholder text depending on whether user has typed in a value or not
    //let placeholderText = props.numberOfMovies ? '' : `Show ${props.DEFAULT_NUMBER_OF_MOVIES} Movies`;
    
    return (
      // <Box sx={{ width: 300,height:70 }} >  
      //   <div style={{width:"150px",}} >Number Of Movies</div>
      //   <Input 
      //     value={props.numberOfMovies}
      //     type="number"  
      //     onChange={props.setNumberOfMoviesHandler}       
      //     placeholder={placeholderText}
      //     icon={<Icon name="delete" link onClick={props.clearMovies} />} 
      //   />    
      // </Box>
      <NumberFilter uiNumberOfMovies={props.uiNumberOfMovies}
        DEFAULT_NUMBER_OF_MOVIES={props.DEFAULT_NUMBER_OF_MOVIES}
        onNumberMoviesChangeHandler={props.setNumberOfMoviesHandler}  
        clearMoviesEventHandler={props.clearMoviesEventHandler}
      />
    );
  }

  export default NumberMoviesFilter;