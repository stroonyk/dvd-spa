import DateFilter from "../core/DateFilter";

/*
* Our component using Prop Drilling
*/
const DateStartFilter = (props) => {
    return (
        <DateFilter label="Date From" handleDateSelected={props.handleDateSelected} /> 
    )
}
export default DateStartFilter;