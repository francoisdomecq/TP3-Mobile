import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './Header'
import Input from './Input'
import Footer from './Footer'
import TodoList from './TodoList'
import todoServices, { Todo } from '../services/todo.services'

interface ClassState {
  todos: Array<Todo>
}

export default class HomeScreen extends Component<{}, ClassState> {
  constructor(public props: {}) {
    super(props)
    this.state = {
      todos: [],
    }
  }

  removeTodo = (task: string) => {
    todoServices.remove(task)
    this.loadTodos()
  }

  removeAllTodoCompleted = () => {
    todoServices.removeCompleted()
    this.loadTodos()
  }

  toggleTodo = (task: string) => {
    todoServices.toggle(task)
    this.loadTodos()
  }

  addTodo = (task: string) => {
    todoServices.add(task)
    this.loadTodos()
  }

  async loadTodos() {
    const todo = await todoServices.getAll()
    this.setState({ todos: todo })
  }

  componentDidMount() {
    this.loadTodos()
  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Input onSubmitEditing={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          onDelete={this.removeTodo}
          onToggle={this.toggleTodo}
        />
        <Footer onDeleteAllCompleted={this.removeAllTodoCompleted} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
})
