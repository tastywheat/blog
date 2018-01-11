import React from 'react';
import './form.css';

const Form= ({value, onChange, onCreate, onKeyPress}) => {
	return(
		<div className="form">
			<input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
			<div className="create-button" onclick={onCreate}>
				Add
			</div>
		</div>
		);
};

export default Form;