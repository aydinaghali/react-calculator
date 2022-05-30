import React from "react";
import PropTypes from "prop-types"
import "./Screen.css"

class Screen extends React.Component {
	static propTypes = {
		value: PropTypes.string
	}

	render(){
		return (
			<div className="wrapper">
				<div className="screen">{this.props.value}</div>
			</div>
		)
	}
}

export default Screen;
