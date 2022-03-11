import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './Header'
import Input from './Input'
import TodoItem from './TodoItem'

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Input />
        <TodoItem task="maison" completed={false} />
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
