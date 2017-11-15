/* eslint-disable */
import React, { Component } from 'react';

import TodoItem from './../../components/TodoItem';
import SimpleInput from './../../components/SimpleInput';
import Button from './../../components/Button';

import './style.css';

export default class HomePage extends Component {
 
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todoList: [],
      inputValid: true,
    };
  }

  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
      inputValid: true,
    })
  }

  submitTodo = () => {
    if (this.state.inputValue) {
      const TodoItem = this.state.inputValue;
      const todoList = [...this.state.todoList];
      todoList.push(TodoItem);
      this.setState({ todoList, inputValue: '' })
    } else {
      this.setState({ inputValid: false })
    }
  }

  deleteTodoItem = (name) => {
    const FILTERED_LIST = this.state.todoList.filter(item => item !== name);
    this.setState({
      todoList: FILTERED_LIST
    });
  }

  render() {
    const { inputValue, todoList, inputValid } = this.state;

    return (
      <div className="container">
        <h1 className="pageTitle">Todo List:</h1>
        <div
          className='formWrapper'
        >
          <SimpleInput
            type='text'
            name='todoItem'
            value={inputValue}
            placeholder='Text new todo...'
            onChange={this.handleInputChange}
            isvalid={inputValid}
            errortext='You are triyng to add empty todo item. Please, fill that input.'
          />
          <Button
            label='Add Todo'
            onClick={this.submitTodo}
          />
        </div>
        <div>
          {
            todoList.map((item, index) => 
            <TodoItem
              key={index}
              number={index + 1}
              name={item}
              deleteTodoItem={() => this.deleteTodoItem(item)}
            />
          )
          }
        </div>
      </div>
    );
  }
}
