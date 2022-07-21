import DateFilter from "../core/DateFilter";
/*
* just a wrapper for our start date widget using the customhook
*/
const DateStartFilter = (props) => {
    return (
        <DateFilter label="Date From" handleDateSelected={props.handleDateSelected} /> 
    )
}
export default DateStartFilter;