import React from 'react';
//import './Button.css'
const Button=({data})=>{
	return(
		<div>
		<input className="f6  grow no-underline br-pill ba ph4 pv2 mb5 dib white  bg-dark-blue fw9 center" type="button" value="claculate Your age" onClick={data}/>
	</div>)
}
export default Button;