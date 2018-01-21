import _ from 'lodash';
import React, { Component } from 'react';
import Template from './template';
import Form from './form';
import ItemList from './itemList';

class TodoList extends Component {

	id = 3 // already existing 0,1,2.. so Next is 3

	state={
		input:'',
		todos: [
			{id:0, text:"Study JS", checked:false},
			{id:1, text:"Study React", checked:true},
			{id:2, text:"Practice Pronunciation", checked:false}
		]
	}

handleChange = (e) => {
    this.setState({
      input: e.target.value 
    });
  }

handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', 
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }


handelToggle = (id) => {
	const {todos} = this.state;
	const index = todos.findIndex(todo => todo.id === id);
	const selected = todos[index];
	const nextTodos = [...todos];

	nextTodos[index] = {
		...selected,
		checked: !selected.checked
	};

	this.setState ({
		todos:nextTodos
	});
}
	
handleRemove = (id) => {
	const {todos} = this.state;
	this.setState ({
		todos:todos.filter(todo => todo.id !== id)
	});
}


	render() {
		const {input, todos} = this.state;
		const {
			handleChange,
			handleCreate,
			handleKeyPress,
			handelToggle,
			handleRemove
		} = this;


		return (
			<Template form={(
				<Form
					value = {input}	
					onKeyPress = {handleKeyPress}
					onChange = {handleChange}
					onCreate = {handleCreate}
				/>
				)}>
			<ItemList todos = {todos} onToggle = {handelToggle} onRemove = {handleRemove}/>
			</Template>
			);
	}

}

export default TodoList;