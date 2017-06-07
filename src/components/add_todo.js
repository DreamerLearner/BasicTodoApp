import React, { Component } from 'react';

class AddTodo extends Component{

	render(){
		return(
			<form onSubmit={this.onFormSubmit.bind(this)}>
				<input type="text" placeholder="Add new todo" ref="createtodo" />
				<button type="submit">Add</button>
			</form>
		);
	}

	onFormSubmit(event){
		event.preventDefault();
		this.props.onSubmitCall(this.refs.createtodo.value);
		this.refs.createtodo.value = '';
	}

}

export default AddTodo;