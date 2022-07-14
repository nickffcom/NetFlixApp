import reducerMovies from "./reducerMovies";
import {combineReducers} from 'redux';
import React from 'react'

const rootReducer=combineReducers({
    infoMovies:reducerMovies
});
export default rootReducer;

