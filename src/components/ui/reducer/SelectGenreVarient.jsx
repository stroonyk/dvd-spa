import SelectVariant from "../core/SelectVariant"
import { useContext } from "react";
import MoviesContext from "../../../store/movies-context";

/*
* just a wrapper for our select widget using the context provider/reducer
*/
const SelectGenreVariant = () => {
    const moviesCtx = useContext(MoviesContext);
    return (
        <SelectVariant items={moviesCtx.genres} 
            onSelectVariant={moviesCtx.selectedGenreChanged} 
            selectedValue={moviesCtx.selectedGenre} label="Genre" 
        />
    )
}
export default SelectGenreVariant;