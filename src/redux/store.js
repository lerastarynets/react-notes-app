import { applyMiddleware, compose, createStore } from "redux";
import notesReducer from "./notes-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(notesReducer, composeEnhancers(applyMiddleware()));

export default store;
