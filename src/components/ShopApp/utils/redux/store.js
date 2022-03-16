import { createStore, combineReducers } from "redux";
import reduxReducer from "./reducer";
const rootReducer = combineReducers({
    reduxReducer,
});
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
