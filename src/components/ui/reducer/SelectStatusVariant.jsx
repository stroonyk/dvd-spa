import SelectVariant from "../core/SelectVariant"
import { useContext } from "react";
import MoviesContext from "../../../store/movies-context";

/*
* just a wrapper for our select widget using the context provider/reducer
*/
const SelectStatusVariant = () => {
    const moviesCtx = useContext(MoviesContext);
    return (
        <SelectVariant items={moviesCtx.statuses} 
            onSelectVariant={moviesCtx.selectedStatusChanged} 
            selectedValue={moviesCtx.selectedStatus} label="Status" 
        />
    )
}
export default SelectStatusVariant;