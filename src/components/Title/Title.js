import React from "react";
import PropTypes from "prop-types";
import "./Title.scss"

Title.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    subTitle: PropTypes.string,
};

function Title({ title, text, subTitle }) {
    return (
        <div className="wrap-heading">
            <div className="heading">
                <h3 className="heading__sub--title">{text}</h3>
                <h2 className="heading__title">
                    {title}{" "}
                    <span>{subTitle}</span>
                </h2>
            </div>
        </div>
    );
}

export default Title;
