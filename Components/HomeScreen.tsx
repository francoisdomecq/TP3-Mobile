import React, { Component } from 'react'
import { View } from 'react-native'
import Header from './Header'
import Input from './Input'

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Header />
        <Input />
      </View>
    )
  }
}
