import { ProSidebar, SidebarHeader, SidebarContent  } from 'react-pro-sidebar';
import sidebarBg from '../../../assets/bg_propdrilling_sidebar.png';
import BudgetRangeSlider from './BudgetRangeSlider';
import RatingRangeSlider from './RatingRangeSlider';
import RuntimeRangeSlider from './RuntimeRangeSlider';
import SelectVariant from '../core/SelectVariant';
import NumberMoviesFilter from "./NumberMoviesFilter";
import MenuAppBar from '../core/MenuAppBar';
import DateStartFilter from './DateStartFilter';
import DateEndFilter from './DateEndFilter';

/*
* our sidebar component with all the filter components. Nice and messy due to Prop Drilling! :) 
*/
const MoviesFilter = (props) => {
    return (
        <ProSidebar image={sidebarBg}>
          <SidebarHeader>
            <MenuAppBar />
            <div className="sidebar-div">Filters - Prop Drilling</div>
          </SidebarHeader>
          <SidebarContent>
            <NumberMoviesFilter DEFAULT_NUMBER_OF_MOVIES={props.DEFAULT_NUMBER_OF_MOVIES}  uiNumberOfMovies={props.uiNumberOfMovies} setNumberOfMoviesHandler={props.onNumberMoveiesSelected} clearMoviesEventHandler={props.clearMoviesEventHandler}/>
            <DateStartFilter handleDateSelected={props.onStartDateSelected}  />
            <DateEndFilter handleDateSelected={props.onEndDateSelected}  />
            <BudgetRangeSlider value={props.selectedBudget} onSelectSlider={props.onBudgetSelected} />
            <RatingRangeSlider value={props.selectedRating} onSelectSlider={props.onRatingSelected} />
            <RuntimeRangeSlider value={props.selectedRuntime} onSelectSlider={props.onRuntimeSelected} /> 
            <SelectVariant items={props.genres} onSelectVariant={props.onGenreSelected} selectedValue={props.selectedGenre} label="Genre"/>
            <SelectVariant items={props.languages} onSelectVariant={props.onLanguageSelected} selectedValue={props.selectedLanguage} label="Language"/>
            <SelectVariant items={props.status} onSelectVariant={props.onStatusSelected} selectedValue={props.selectedStatus} label="Status"/>
          </SidebarContent>       
        </ProSidebar>       
    );
} 
export default MoviesFilter;