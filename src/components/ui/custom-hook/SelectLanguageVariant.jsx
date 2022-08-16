import SelectVariant from "../core/SelectVariant"
import {default as useMovies} from "../../../contexts/useMovies";

/*
* just a wrapper for our select widget using the customhook
*/
const SelectLanguageVariant = () => {
    // get our values from our customhook
    const {languages,handleLanguageSelected,selectedLanguage} = useMovies();
    return (
        <SelectVariant items={languages} onSelectVariant={handleLanguageSelected} selectedValue={selectedLanguage} label="Language" />
    )
}
export default SelectLanguageVariant;