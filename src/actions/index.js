import { ADD_FEATURE, REMOVE_FEATURE } from './actionTypes';

export const addFeature = (id) => ({
    type: ADD_FEATURE,
    id
});

export const removeFeature = (id) => ({
    type: REMOVE_FEATURE,
    id
});