import React, {Component} from 'react'
import PageHeader from '../templet/pageheader'
import TodoForm from './tofoForm'
import TodoList from './todoList'

export default class Todo extends Component {
  render(){
      return (
          <div>
              <PageHeader name='Tarefas' small=' Cadastro'></PageHeader>
              <TodoForm/>
              <TodoList/>
           </div>   

      )
  }   
} 