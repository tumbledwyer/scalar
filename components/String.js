import React from 'react'
import { View } from 'react-native'

import { Fret } from './Fret'

export class String extends React.Component {
  render() {
    const notes = this.props.notes

    const board = notes.map((n, i) => (
      <Fret key={i} note={n} scale={this.props.scale} />
    ))

    return (
      <View style={{ flex: 0.2, flexDirection: 'column', width: 20 }}>
        {board}
      </View>
    )
  }
}
