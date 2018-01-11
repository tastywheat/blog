import React, { Component } from 'react';
import './todo-ltem.css';

class TodoItem extends Component {
	render() {
		const {text, checked, id, onToggle, onRemove} = this.props;

		return (
			<div className="todo-item" onClick={()=>onToggle(id)}>
		        <div className="remove" onClick={(e) => {e.stopPropagation(); 
		          onRemove(id)}
		        }></div>
				<div className={"todo-text" + checked && 'checked'}>
					<div>{text}</div>
				</div>
				{
					checked && (<div className="check-mark"> ✓ </div>)
				}
			</div>
		);
 	}

}

export default TodoItem;