import { combineReducers } from 'redux';

import {
    additionalPriceReducer,
    carReducer,
    additionalFeaturesReducer
} from './reducers';


export default combineReducers(
    {
        additionalPrice: additionalPriceReducer,
        car: carReducer,
        additionalFeatures: additionalFeaturesReducer
    }
);