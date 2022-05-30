import Row from "./Row";
import Screen from "./Screen"
import calculate from "../util/calculate.js"
import './App.css';
import React from "react";

class App extends React.Component {

	state = {
		value: "0",
		memory: null,
		operation: null,
		didOperation: false
	}

	handleClick = (opname) => {
		this.setState(calculate(this.state, opname));
	};

	render(){
		return (
			<div className="App">
				<Screen value={this.state.value}/>
				<Row buttonNames="AC,+/-,%,/" blues="0,0,0,1" clickHandler={this.handleClick}/>
				<Row buttonNames="7,8,9,*" blues="0,0,0,1" clickHandler={this.handleClick}/>
				<Row buttonNames="4,5,6,-" blues="0,0,0,1" clickHandler={this.handleClick}/>
				<Row buttonNames="1,2,3,+" blues="0,0,0,1" clickHandler={this.handleClick}/>
				<Row buttonNames="0,.,=" blues="0,0,1" lastWide clickHandler={this.handleClick}/>
			</div>
		);
	}
}

export default App;
