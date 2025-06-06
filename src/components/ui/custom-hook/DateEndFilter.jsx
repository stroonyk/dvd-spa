import DateFilter from "../core/DateFilter";
import {default as useMovies} from "../../../contexts/useMovies";

/*
* just a wrapper for our start date widget using the customhook
*/
const DateEndFilter = () => {
    // get our values from our customhook
    const {handleEndDateSelected} = useMovies();
    return (
        <DateFilter label="Date To" handleDateSelected={handleEndDateSelected} /> 
    )
}
export default DateEndFilter;