import React from "react";
import PropTypes from "prop-types"
import "./Button.css"

class Button extends React.Component {
	static propTypes = {
		name: PropTypes.string,
		blue: PropTypes.string,
		wide: PropTypes.string,
		clickHandler: PropTypes.func
	};

	click = () => {
		this.props.clickHandler(this.props.name);
	}

	render(){
		var className = ["button",
			this.props.blue==="true" ? "blue" : "",
			this.props.wide==="true" ? "wide" : "normal",
		]

		return (
			<button className={className.join(" ").trim()} onClick={this.click}>
				{this.props.name}
			</button>
		)
	}
}

export default Button;
