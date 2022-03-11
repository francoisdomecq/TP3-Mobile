import React, { Component } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import { Todo } from '../services/todo.services'

export default class TodoItem extends Component<Todo, {}> {
  constructor(public props:Todo){
    super(props)
    this.state={
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyles}>Maison</Text>
        <Switch 
        value={this.props.completed}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    padding:20,
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
  },
  textStyles: {
    fontSize: 16,
    color: 'black',
  },
})
