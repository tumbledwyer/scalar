import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { String } from '../components/String'
import { notes } from '../constants/stuff'

const startingFrom = root => {
  const index = notes.indexOf(root)
  return notes.slice(index).concat(notes.slice(0, index))
}

const getScale = (pattern, key) => {
  const allNotes = startingFrom(key)
  let newScale = [allNotes[0]]
  let index = 0

  pattern.forEach(i => {
    index += i
    newScale.push(allNotes[index])
  })
  return newScale
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const board = this.props.tuning.map((s, i) => (
      <String
        key={i}
        notes={startingFrom(s)}
        scale={getScale(this.props.pattern, this.props.rootNote)}
      />
    ))

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.strings}>{board}</View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    paddingTop: 30
  },
  strings: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20
  }
})

const mapStateToProps = state => {
  return {
    pattern: state.guitar.scale.pattern,
    tuning: state.guitar.tuning.notes,
    rootNote: state.guitar.key
  }
}

export default connect(mapStateToProps)(HomeScreen)
