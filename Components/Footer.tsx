import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface ClassProps {
  onDeleteAllCompleted: Function
}

export default class Footer extends Component<ClassProps> {
  constructor(public props: ClassProps) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.onDeleteAllCompleted()}
        >
          <Text style={styles.textStyle}>Supprimer les tâches terminées</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '100%',
    backgroundColor: '#f5f5f5',
  },
  textStyle: {
    fontSize: 16,
    color: 'black',
  },
  button: {
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
