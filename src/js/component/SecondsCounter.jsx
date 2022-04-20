import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = (props) => {
	const digits = props.seconds.toString().padStart(6, "0");
	return (
		<div className="MyCounter">
			<div className="clock">clock</div>
			<div className="six">{digits[0]}</div>
			<div className="five">{digits[1]}</div>
			<div className="four">{digits[2]}</div>
			<div className="three">{digits[3]}</div>
			<div className="two">{digits[4]}</div>
			<div className="one">{digits[5]}</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	seconds: PropTypes.number,
};

export default SecondsCounter;
