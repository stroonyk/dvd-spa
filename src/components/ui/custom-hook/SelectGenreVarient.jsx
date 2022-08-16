import SelectVariant from "../core/SelectVariant"
import {default as useMovies} from "../../../contexts/useMovies";

/*
* just a wrapper for our select widget using the customhook
*/
const SelectGenreVariant = () => {
    // get our values from our customhook
    const {genres,handleGenreSelected,selectedGenre} = useMovies();
    return (
        <SelectVariant items={genres} onSelectVariant={handleGenreSelected} selectedValue={selectedGenre} label="Genre" />
    )
}
export default SelectGenreVariant;