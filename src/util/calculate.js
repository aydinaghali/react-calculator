function isNumber(s){
	return "1234567890".split("").includes(s);
}

function isOperation(s){
	return "+-*/".split("").includes(s);
}

function operate(state){
	var result;
		switch(state.operation){
			case "+":
				result = parseFloat(state.memory) + parseFloat(state.value);
				break;
			case "-":
				result = parseFloat(state.memory) - parseFloat(state.value);
				break;
			case "*":
				result = parseFloat(state.memory) * parseFloat(state.value);
				break;
			case "/":
				result = parseFloat(state.memory) / parseFloat(state.value);
				break;
		}
	return {
		value: result.toString(),
		memory: null,
		operation: null,
		didOperation: true
	}
}

function calculate(state, opname){
	if(isNumber(opname) && state.didOperation){
		return {
			value: opname,
			memory: state.memory,
			operation: state.operation,
			didOperation: false
		}
	}else if(isNumber(opname)){
		var newValue = state.value==="0" ? opname : state.value + opname;
		return {
			value: newValue,
			memory: state.memory,
			operation: state.operation,
			didOperation: false
		}
	}else if(opname==="." && !state.value.split("").includes(".")){
		return {
			value: state.value + opname,
			memory: state.memory,
			operation: state.operation,
			didOperation: false
		}
	}else if(opname==="AC"){
		return {
			value: "0",
			memory: null,
			operation: null,
			didOperation: false
		}
	}else if(opname==="+/-"){
		return {
			value: (parseFloat(state.value)*-1).toString(),
			memory: state.memory,
			operation: state.operation,
			didOperation: false
		}
	}else if(opname==="%"){
		return {
			value: (parseFloat(state.value)/100).toString(),
			memory: state.memory,
			operation: state.operation,
			didOperation: false
		}
	}else if(isOperation(opname) && state.operation===null){
		return {
			value: state.value,
			memory: state.value,
			operation: opname,
			didOperation: true
		}
	}else if(isOperation(opname) && state.operation!==null){
		var ret = operate(state);
		return {
			value: ret.value,
			memory: ret.value,
			operation: opname,
			didOperation: true
		}
	}else if(opname==="="){
		return operate(state);
	}else{
		return {
			value: state.value,
			memory: state.memory,
			operation: state.operation,
			didOperation: false
		}
	}
}

export default calculate;
