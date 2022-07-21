import { ProSidebar, SidebarHeader, SidebarContent  } from 'react-pro-sidebar';
import sidebarBg from '../../../assets/bg_reducer_sidebar.png';
// import BudgetRangeSlider from './BudgetRangeSlider';
// import RatingRangeSlider from './RatingRangeSlider';
// import RuntimeRangeSlider from './RuntimeRangeSlider';
// import NumberMoviesFilter from "./NumberMoviesFilter";
// import DateStartFilter from "./DateStartFilter";
// import DateEndFilter from "./DateEndFilter";
// import SelectGenreVariant from './SelectGenreVarient';
// import SelectLanguageVariant from './SelectLanguageVariant';
// import SelectStatusVariant from './SelectStatusVariant';
import MenuAppBar from '../core/MenuAppBar';
/*
* our sidebar component with all the filter components using Context and a custom hook
*/
const MoviesFilter = () => {
    return (
        <ProSidebar image={sidebarBg}>
          <SidebarHeader>
            <MenuAppBar />
            <div className="sidebar-div">Filters - Reducer</div>
          </SidebarHeader>
          <SidebarContent>
            {/* <NumberMoviesFilter />
            <DateStartFilter  />
            <DateEndFilter />
            <BudgetRangeSlider />
            <RatingRangeSlider />
            <RuntimeRangeSlider /> 
            <SelectGenreVariant />
            <SelectLanguageVariant />
            <SelectStatusVariant />  */}
          </SidebarContent>       
        </ProSidebar>       
    );
} 
export default MoviesFilter;