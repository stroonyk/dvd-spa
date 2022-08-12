import RangeSlider from "../core/RangeSlider";
import React from "react";
import { useContext } from "react";
import MoviesContext from "../../../store/movies-context";
/*
* just a wrapper for our slider widget using the customhook and default properties to stop
* the sliders overlapping and to mark the slider points
*/
const BUDGET_MIN_DISTANCE = 50;
const BUDGET_MARKS = [{value: 0,label: '0M',},{value: 50,label: '50M',},{value: 100,label: '100M',},
    {value: 150,label: '150M',},{value: 200,label: '200M',},{value: 250,label: '250M',},
    {value:300,label: '300M',},{value: 350,label: '350M',}];

const BudgetRangeSlider = () => {
    const moviesCtx = useContext(MoviesContext);
    //const selectedBudget = [0,350];
    //const handleBudgetSelected = () =>{console.log('bob')};
    //console.log('budget', selectedBudget);
    return (
        <RangeSlider title="Budget" marks={BUDGET_MARKS} step={50} min={0} max={350} 
            value={moviesCtx.selectedBudget} setValue={moviesCtx.selectedBudgetChanged} MIN_DISTANCE={BUDGET_MIN_DISTANCE} 
        />
    );
}
export default BudgetRangeSlider;