import React from 'react';
// used for making the prop types of this component
import PropTypes from 'prop-types';

class CardIcon extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className={"card-icon icon-" + this.props.color}>
                <i className={this.props.icon}></i>
            </div>
        );
    }
}

CardIcon.propTypes = {
    color: PropTypes.oneOf(["info", "success", "primary", "warning", "danger", "neutral"]),
    icon: PropTypes.string
}

export default CardIcon;
