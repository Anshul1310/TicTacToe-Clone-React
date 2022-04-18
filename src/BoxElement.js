import React from "react";

const BoxElement=function(props){
	return(
		  <span onClick={props.onClick} className="square">{props.state}</span>
	);
}

export default BoxElement;