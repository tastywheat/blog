import React from 'react';
import './style.css';

const Template = ({form, children}) => {
	return (
		<main className ="todo-list-template">
			<div className="title">
				To Do List
			</div>
			<section className="form-wrapper">
				{form}
			</section>
			<section className="todos-wrapper">
				{children}
			</section>
		</main>
	);
};

export default Template;