import './index.css';
import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import MovieDetails from "./Pages/MovieDetails"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MovieSearchPropDrilling from './Pages/MovieSearchPropDrilling';
import MovieSearchCustomHook from './Pages/MovieSearchCustomHook';
import MovieSearchReducer from './Pages/MovieSearchReducer';
import 'react-pro-sidebar/dist/css/styles.css';

/*
*   App control now with Routing options
*/
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<MovieSearchCustomHook />}></Route>
        <Route exact path='/custom-hook' element={<MovieSearchCustomHook />}></Route>
        <Route exact path='/prop-drilling' element={<MovieSearchPropDrilling />}></Route>
        <Route exact path='/reducer' element={<MovieSearchReducer />}></Route>
        <Route  path='/DetailedMovie/:id' element={<MovieDetails />}></Route>
      </Routes>
    </div>
  )
}

/*
* Introducing a router for when clicking on the movie card
*/
ReactDOM.render((
    <BrowserRouter> 
      <App /> 
    </BrowserRouter>
  ),
  (document.querySelector("#root"))
);
