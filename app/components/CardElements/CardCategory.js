import React from 'react';
import PropTypes from 'prop-types';

class CardCategory extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <h5 className="card-category">
                {this.props.children}
            </h5>
        );
    }
};

CardCategory.propTypes = {
    children: PropTypes.any
};

export default CardCategory;
