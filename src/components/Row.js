import React from "react";
import PropTypes from "prop-types"
import Button from "./Button"
import "./Row.css"

class Row extends React.Component {
	static propTypes = {
		buttonNames: PropTypes.string,
		blues: PropTypes.string,
		lastWide: PropTypes.bool,
		clickHandler: PropTypes.func
	};

	click = (opname) => {
		this.props.clickHandler(opname);
	}

	render(){
		var namesArray = this.props.buttonNames.split(",");
		var bluesArray = this.props.blues.split(",").map(x => x==="1" ? "true" : "false");
		var buttons = [];
		for(var i=0; i<namesArray.length; ++i){
			if( (i===namesArray.length-1) && this.props.lastWide){
				buttons.push(<Button key={i.toString()} name={namesArray[i]}
								blue={bluesArray[i]} wide="true" clickHandler={this.click}/>);
			}else{
				buttons.push(<Button key={i.toString()} name={namesArray[i]}
								blue={bluesArray[i]} wide="false" clickHandler={this.click}/>);
			}
		}
		
		return (
			<div className="button-row">
				{buttons}
			</div>
		)
	}
}

export default Row;

