import _ from 'lodash';
import React, { Component } from 'react';
import Template from './template';
import Form from './form';
import ItemList from './item-list';
import './style.css';

class TodoList extends Component {
	render() {
		return (
			<Template form={<Form/>}>
				<ItemList/>
			</Template>
			);
	};

};

export default TodoList;