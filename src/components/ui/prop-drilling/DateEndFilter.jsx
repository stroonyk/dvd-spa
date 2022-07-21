import DateFilter from "../core/DateFilter";
/*
* just a wrapper for our start date widget using prop drilling
*/
const DateEndFilter = (props) => {
    return (
        <DateFilter label="Date To" handleDateSelected={props.handleDateSelected} /> 
    )
}
export default DateEndFilter;