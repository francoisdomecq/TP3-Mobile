import React, { Component } from 'react'
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native'
import { Todo } from '../services/todo.services'

interface ClassProps {
  task: string
  completed: boolean
  onDelete: Function
  onToggle: Function
}

export default class TodoItem extends Component<ClassProps, {}> {
  constructor(public props: ClassProps) {
    super(props)
    this.state = {
      completed: false,
    }
  }

  render() {
    const text = this.props.completed
      ? styles.textCompleted
      : styles.textNotCompleted
    return (
      <View style={styles.container}>
        <Text style={text}>{this.props.task}</Text>
        <View style={styles.containerDone}>
          <Switch
            value={this.props.completed}
            onValueChange={() => this.props.onToggle(this.props.task)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.onDelete(this.props.task)}
          >
            <Text style={{ fontSize: 30 }}>&times;</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
  },
  containerDone: {
    width: '30%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
  },
  textNotCompleted: {
    fontSize: 16,
    color: 'black',
  },
  textCompleted: {
    fontSize: 16,
    color: 'lightgray',
  },
  button: {
    width: 40,
    height: 40,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
