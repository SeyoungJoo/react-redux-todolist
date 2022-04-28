import { createStore, compose } from "redux";
import reducer from "./reducer";

//store: where all of our data is gonna be stored

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers());

export default store;
