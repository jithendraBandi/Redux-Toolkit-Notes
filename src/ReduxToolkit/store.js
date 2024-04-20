import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import CounterReducer from "./CounterReducer";
import FetchDataReducer from "./FetchDataReducer";

const rootReducer = combineReducers({
    fetchData : FetchDataReducer,
    counter: CounterReducer,
});


const store = configureStore({reducer: rootReducer});

export default store;