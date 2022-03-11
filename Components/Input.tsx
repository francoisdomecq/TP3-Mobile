import React, { Component } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export default class Input extends Component {
  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Saisissez une nouvelle tâche"
        ></TextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  input: {
    height: 50,
    width: '100%',
    fontSize: 18,
    justifyContent: 'center',
    color: 'black',
    backgroundColor: '#f5f5f5',
    paddingLeft:10,
  },
})
