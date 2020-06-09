import React from 'react';
import { connect } from 'react-redux';

const AddedFeature = props => {
    return (
        <li>
            {/* Add an onClick to run a function to remove a feature */}
            <button className="button">X</button>
            {props.feature.name}
        </li>
    );
};

const mapState = (state) => ({
    car: state.car
});

export default connect(mapState, {})(AddedFeature);
