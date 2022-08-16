import RangeSlider from "../core/RangeSlider";
import {default as useMovies} from "../../../contexts/useMovies";

/*
* just a wrapper for our slider widget using the customhook and default properties to stop
* the sliders overlapping and to mark the slider points
*/
const RATING_MIN_DISTANCE = 1;

const RATING_MARKS = [{value: 0,label: '0',},{value: 1,label: '1',},{value: 2,label: '2',},
        {value: 3,label: '3',},{value: 4,label: '4',},{value: 5,label: '5',},
        {value: 6,label: '6',},{value:7,label: '7',},{value: 8,label: '8',},
        {value: 9,label: '9',},{value: 10,label: '10',}];

const BudgetRangeSlider = (props) => {
    // get our values from our customhook
    const {selectedRating,handleRatingSelected} = useMovies();
    return (
        <RangeSlider title="Rating" marks={RATING_MARKS} step={1} min={0} max={10} 
            value={selectedRating} setValue={handleRatingSelected} MIN_DISTANCE={RATING_MIN_DISTANCE} 
        />
    );
}

export default BudgetRangeSlider;