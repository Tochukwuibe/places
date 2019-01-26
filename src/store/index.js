import {createStore, combineReducers, compose} from 'redux';
import { placesReducer } from './reducers/root';
import { authReducer } from './reducers/auth.reducer';


const rootReducer = combineReducers({
    places: placesReducer,
    auth: authReducer
})

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export const store = createStore(rootReducer, composeEnhancers())