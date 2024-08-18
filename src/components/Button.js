// src/components/Button.js
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick, style }) => {
    return (
        <button className="button" onClick={onClick} style={style}>
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    style: PropTypes.object,
};

Button.defaultProps = {
    onClick: () => { },
    style: {},
};

export default Button;
