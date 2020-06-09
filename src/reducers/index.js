import { combineReducers } from 'redux';


// Initial states

const initialAdditionalPrice = 0;

const initialCar = {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
};

const initialAdditionalFeatures = [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
]


// Reducers

function additionalPrice(state = initialAdditionalPrice, action) {
    return state;
}

function car(state = initialCar, action) {
    return state;
}


function additionalFeatures(state = initialAdditionalFeatures, action) {
    return state;
}


export default combineReducers(
    {
        additionalPrice,
        car,
        additionalFeatures
    }
);