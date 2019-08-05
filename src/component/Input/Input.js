import React from 'react';
const Input=({value})=>{
	return(
		<div>
		<input className="f4 pa2 w-90 db mb2 ba tc"  type="date" placeholder="pleace Enter your D-O-B" onChange={value}/>
	</div>)
}
export default Input;