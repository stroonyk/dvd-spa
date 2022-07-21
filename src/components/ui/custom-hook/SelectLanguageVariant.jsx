import SelectVariant from "../core/SelectVariant"
import {default as useMovies} from "../../../contexts/useMovies";
/*
* just a wrapper for our select widget using the customhook
*/
const SelectLanguageVariant = () => {
    const {languages,handleLanguageSelected,selectedLanguage} = useMovies();
    return (
        <SelectVariant items={languages} onSelectVariant={handleLanguageSelected} selectedValue={selectedLanguage} label="Language" />
    )
}
export default SelectLanguageVariant;