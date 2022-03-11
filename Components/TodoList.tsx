import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import todoServices, { Todo } from '../services/todo.services'
import TodoItem from './TodoItem'

interface ClassProps {
  todos: Array<Todo>,
  onDelete : Function,
  onToggle:Function
}

export default class TodoList extends Component<ClassProps> {
  constructor(public props: ClassProps) {
    super(props)
  }

  render() {
    return (
      <FlatList<Todo>
        data={this.props.todos}
        keyExtractor={(item) => item.task}
        renderItem={({ item }: { item: Todo }) => (
          <TodoItem task={item.task} completed={item.completed} onDelete={this.props.onDelete} onToggle={this.props.onToggle}/>
        )}
      />
    )
  }
}
