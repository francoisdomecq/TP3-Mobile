import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>TodoNative</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: '100%',
    backgroundColor: 'steelblue',
  },
  textStyle: {
    marginTop: 30,
    fontSize: 24,
    color: 'white',
    fontWeight:'bold'
  },
})
