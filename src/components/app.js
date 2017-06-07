import React, { Component } from 'react';
import _ from 'lodash';

import TodoList from './todo_list';
import Header from './header';
import AddTodo from './add_todo';

export default class App extends Component {

	constructor(props){
		super(props);

		this.state = {todos : [
      {task : 'task 1',isCompleted: true},
      {task : 'task 2',isCompleted: false},
      {task : 'task 3',isCompleted: false}
    ]};
	}

  render() {
    return (
      <div className="wrapper">
        <Header />
        <AddTodo onSubmitCall={this.createTodo.bind(this)} />
      	<TodoList 
      		todos={this.state.todos}
      		onCheck={this.onToggle.bind(this)}
          onDelete={this.deleteTodo.bind(this)} />
      </div>
    );
  }

  onToggle(task){
    const selectedTodo = _.find( this.state.todos , (todo) => todo.task === task );
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    this.setState({todos : this.state.todos});
  }

  createTodo(newTodo){
    const addedTodo = _.find( this.state.todos , (todo) => todo.task === newTodo );

    if(addedTodo){
      alert('todo exits');
    }else{
      this.state.todos.push({
        task : newTodo,
        isCompleted : false
      })
      this.setState({todos:this.state.todos});
    }
  }

  deleteTodo(removeTodo){
    _.remove( this.state.todos, todo => todo.task === removeTodo );
    this.setState({todos:this.state.todos});
  }

}
