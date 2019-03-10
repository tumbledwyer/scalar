import React from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'

import { String } from '../components/String'

const notes = ["Ab", "A", "Bb", "B", "C", "C#", "D", "Eb", "E", "F", "F#", "G"]
const tuning = ['D', 'A', 'D', 'G', 'A', 'D']

const key = 'D'

const scales = [
  { name: "Major", pattern: [2, 2, 1, 2, 2, 2, 1] },
  { name: "Natural Minor", pattern: [2, 1, 2, 2, 1, 2, 2] },
  { name: "Harmonic Minor", pattern: [2, 1, 2, 2, 1, 3, 1] },
  { name: "Melodic Minor", pattern: [2, 1, 2, 2, 2, 2, 1] },
  { name: "Melodic Minor Descending", pattern: [2, 1, 2, 2, 1, 2, 2] },
  { name: "Blues", pattern: [3, 2, 1, 1, 3, 2] },
]

const startingFrom = (root) => {
  const index = notes.indexOf(root)
  return notes.slice(index)
    .concat(notes.slice(0, index))
}

const getScale = () => {
  const allNotes = startingFrom(key)
  let newScale = [allNotes[0]]
  let index = 0

  scales[2].pattern.forEach(i => {
    index+=i
    newScale.push(allNotes[index])
  })
  return newScale
}

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      scale: []
    }
  }

  static navigationOptions = {
    header: null,
  }

  componentDidMount() {
    this.setState({ scale: getScale() })
  }

  render() {

    const board = tuning.map((s, i) => <String key={i} notes={startingFrom(s)} scale={this.state.scale} />)

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.strings}>
            {board}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  strings: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20
  }
})
