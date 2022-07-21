import SelectVariant from "../core/SelectVariant"
import {default as useMovies} from "../../../contexts/useMovies";
/*
* just a wrapper for our select widget using the customhook
*/
const SelectStatusVariant = () => {
    const {statuses,handleStatusSelected,selectedStatus} = useMovies();
    return (
        <SelectVariant items={statuses} onSelectVariant={handleStatusSelected} selectedValue={selectedStatus} label="Status" />
    )
}
export default SelectStatusVariant;