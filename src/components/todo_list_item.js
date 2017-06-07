import React, { Component } from 'react';

const TodoListItem = (props) => {

	const { isCompleted, task } = props.todo;
	const textClass = (isCompleted ? 'greenTask list-item' : 'redTask list-item');

	return(
		<li className={textClass}>
			<span onClick={props.onCheck.bind(this,task)}>{task}</span>
			<button onClick={props.onDelete.bind(this,task)}>Delete task </button>
		</li>
	);

}

export default TodoListItem;