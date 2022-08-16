import RangeSlider from "../core/RangeSlider";
import React from "react";
import {default as useMovies} from "../../../contexts/useMovies";

/*
* just a wrapper for our slider widget using the customhook and default properties to stop
* the sliders overlapping and to mark the slider points
*/
const BUDGET_MIN_DISTANCE = 50;
const BUDGET_MARKS = [{value: 0,label: '0M',},{value: 50,label: '50M',},{value: 100,label: '100M',},
    {value: 150,label: '150M',},{value: 200,label: '200M',},{value: 250,label: '250M',},
    {value:300,label: '300M',},{value: 350,label: '350M',}];

const BudgetRangeSlider = () => {
    // get our values from our customhook
    const {selectedBudget,handleBudgetSelected} = useMovies();
    return (
        <RangeSlider title="Budget" marks={BUDGET_MARKS} step={50} min={0} max={350} 
            value={selectedBudget} setValue={handleBudgetSelected} MIN_DISTANCE={BUDGET_MIN_DISTANCE} 
        />
    );
}
export default BudgetRangeSlider;