import React from 'react';
import PropTypes from 'prop-types';
import "./Button.scss"

Button.propTypes = {
    text: PropTypes.string,
    buttonStyle: PropTypes.string
};
const STYLES = ["btn--primary", "btn--white", "btn--transparent"]
function Button({ text, onClick, buttonStyle }) {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    return (
        <button onClick={onClick} className={`btn ${checkButtonStyle}`}>
            {text}
        </button>
    );
}

export default Button;