import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/actionTypes';
import { addFeature } from '../actions';

// Initial states

const initialAdditionalPrice = 0;

const initialCar = {
    price: 26395,
    name: '2019 Ford Mustang',
    image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
};

const initialAdditionalFeatures = [
    { id: 0, name: 'V-6 engine', price: 1500 },
    { id: 1, name: 'Racing detail package', price: 1500 },
    { id: 2, name: 'Premium sound system', price: 500 },
    { id: 3, name: 'Rear spoiler', price: 250 }
]


// Reducers

export function additionalPriceReducer(state = initialAdditionalPrice, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export function carReducer(state = initialCar, action) {
    switch (action.type) {

        case ADD_FEATURE:
            // if a feature has not been added yet
            if (!(state.features.includes(action.id))) {
                return {
                    ...state,
                    features: [
                        ...state.features,
                        action.id
                    ]
                }
            }
            // if that feature is already present
            return state;

        case REMOVE_FEATURE:
            return {
                ...state,
                features: state.features.filter((item) => {
                    if (item !== action.id) {
                        return true;
                    }
                })
            }
        default:
            return state;
    }
}


export function additionalFeaturesReducer(state = initialAdditionalFeatures, action) {
    switch (action.type) {
        default:
            return state;
    }
}