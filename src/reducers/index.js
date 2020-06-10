import { combineReducers } from 'redux';

import {
    carReducer,
    additionalFeaturesReducer
} from './reducers';


export default combineReducers(
    {
        car: carReducer,
        additionalFeatures: additionalFeaturesReducer
    }
);