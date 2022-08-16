import { Input,Icon } from 'semantic-ui-react';
import Box from '@mui/material/Box';

/*
* Our Number of Movies Filter. Does what it says on the tin :)
*/
const NumberFilter = (props) => {
  // show placeholder text depending on whether user has typed in a value or not
  let placeholderText = props.uiNumberOfMovies ? '' : `Show ${props.DEFAULT_NUMBER_OF_MOVIES} Movies`;
  
  return (
    <Box sx={{ width: 300,height:70 }} >  
      <div style={{width:"150px",}} >Number Of Movies</div>
      <Input 
        value={props.uiNumberOfMovies}
        type="number"  
        onChange={props.onNumberMoviesChangeHandler}       
        placeholder={placeholderText}
        icon={<Icon name="delete" link onClick={props.clearMoviesEventHandler} />} 
      />    
    </Box>
  );
}

  export default NumberFilter;