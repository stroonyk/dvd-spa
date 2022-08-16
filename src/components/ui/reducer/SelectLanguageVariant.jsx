import SelectVariant from "../core/SelectVariant"
import { useContext } from "react";
import MoviesContext from "../../../store/movies-context";

/*
* just a wrapper for our select widget using the context provider/reducer
*/
const SelectLanguageVariant = () => {
    const moviesCtx = useContext(MoviesContext);
    return (
        <SelectVariant items={moviesCtx.languages} 
            onSelectVariant={moviesCtx.selectedLanguageChanged} 
            selectedValue={moviesCtx.selectedLanguage} label="Language" 
        />
    )
}
export default SelectLanguageVariant;