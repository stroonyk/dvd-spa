import RangeSlider from "../core/RangeSlider";
import {default as useMovies} from "../../../contexts/useMovies";

/*
* just a wrapper for our slider widget using the customhook and default properties to stop
* the sliders overlapping and to mark the slider points
*/
const RUNTIME_MIN_DISTANCE = 20;

const RUNTIME_MARKS = [{value: 0,label: '0',},{value: 20,label: '20m',},{value: 40,label: '40m',},
    {value: 60,label: '60m',},{value: 80,label: '80m',},{value: 100,label: '100m',},
    {value: 120,label: '120m',},{value:140,label: '140m',},{value: 160,label: '160m',},
    {value: 180,label: '180m',},{value: 200,label: '200m',}];

const RuntimeRangeSlider = (props) => {
    // get our values from our customhook
    const {selectedRuntime,handleRuntimeSelected} = useMovies();
    return (
        <RangeSlider title="Runtime" marks={RUNTIME_MARKS} step={20} min={0} max={200} 
            value={selectedRuntime} setValue={handleRuntimeSelected} MIN_DISTANCE={RUNTIME_MIN_DISTANCE} 
        />
    );
}

export default RuntimeRangeSlider;