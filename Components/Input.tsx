import React, { Component } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import todoServices from '../services/todo.services'

interface ClassState {
  input: string
}

interface ClassProps {
  onSubmitEditing: Function
}

export default class Input extends Component<ClassProps, ClassState> {
  constructor(public props: ClassProps) {
    super(props)
    this.state = {
      input: '',
    }
  }

  render() {
    return (
      <View> 
        <TextInput
          style={styles.input}
          placeholder="Saisissez une nouvelle tâche"
          onSubmitEditing={(event) =>
            this.props.onSubmitEditing(event.nativeEvent.text)
          }
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
    paddingLeft: 10,
  },
})
