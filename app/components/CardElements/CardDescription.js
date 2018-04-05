import React from 'react';
import PropTypes from 'prop-types';

class CardDescription extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <p className="card-description">
                {this.props.children}
            </p>
        );
    }
};

CardDescription.propTypes = {
    children: PropTypes.any
};

export default CardDescription;
