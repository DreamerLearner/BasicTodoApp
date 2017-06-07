import React, { Component } from 'react';
import _ from 'lodash';

import TodoListItem from './todo_list_item';

const TodoList = (props) => {

	const listItems = _.map( props.todos , (todo,index) => <TodoListItem key={index} todo={todo} onCheck={props.onCheck} onDelete={props.onDelete} /> );

	return(
		<div>
			 {listItems}
		</div>
	);

}

export default TodoList;