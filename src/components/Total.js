import React from 'react';
import { connect } from 'react-redux';
import { additionalFeaturesReducer } from '../reducers/reducers';

const Total = props => {
    const total = props.car.features.reduce((accumulator, id) => {
        return accumulator + props.additionalFeatures[id].price;
    }, props.car.price);

    return (
        <div className="content">
            <h4>Total Amount: ${total}</h4>
        </div>
    );
};

const mapState = (state) => ({
    car: state.car,
    additionalFeatures: state.additionalFeatures
});

export default connect(mapState, {})(Total);
