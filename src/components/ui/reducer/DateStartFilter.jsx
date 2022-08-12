import DateFilter from "../core/DateFilter";
import { useContext } from "react";
import MoviesContext from "../../../store/movies-context";
/*
* just a wrapper for our start date widget using the customhook
*/
const DateStartFilter = () => {
    const moviesCtx = useContext(MoviesContext);
    return (
        <DateFilter label="Date From" handleDateSelected={moviesCtx.startDateChanged} /> 
    )
}
export default DateStartFilter;