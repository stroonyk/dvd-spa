import DateFilter from "../core/DateFilter";
import {default as useMovies} from "../../../contexts/useMovies";

/*
* just a wrapper for our start date widget using the customhook
*/
const DateStartFilter = () => {
    // get our values from our customhook
    const {handleStartDateSelected} = useMovies();
    return (
        <DateFilter label="Date From" handleDateSelected={handleStartDateSelected} /> 
    )
}
export default DateStartFilter;