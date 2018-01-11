import React, {Component} from 'react';
import TodoItem from './todo-item';

class ItemList extends Component {
	render(){
		const {todos, onToggle, onRemove} = this.props;
		return (

			<div>
				<TodoItem text="JavaScript"/>
				<TodoItem text="React"/>
				<TodoItem text="ENG Didtation"/>
			</div>

			);
	};
};

export default ItemList;