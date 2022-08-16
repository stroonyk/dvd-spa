import DateFilter from "../core/DateFilter";
import { useContext } from "react";
import MoviesContext from "../../../store/movies-context";

/*
* just a wrapper for our select widget using the context provider/reducer
*/
const DateEndFilter = () => {
    const moviesCtx = useContext(MoviesContext);
    return (
        <DateFilter label="Date To" handleDateSelected={moviesCtx.endDateChanged} /> 
    )
}
export default DateEndFilter;