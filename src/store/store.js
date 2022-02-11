import { createStore, combineReducers, compose } from "redux"
import carruselReducer from "../reducers/carruselReducer";
import uiReducer from "../reducers/uiReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    UI: uiReducer,
    Carrusel: carruselReducer
});

export const store = createStore(
    reducers, 
    composeEnhancers()
);