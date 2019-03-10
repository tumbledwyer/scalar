import React from 'react';
import { View, Text } from 'react-native';

export class Fret extends React.Component {  
  render() {

    const isInScale = () => this.props.scale.includes(this.props.note) ? 'red': 'white'

    return (
      <View style={{ backgroundColor: isInScale(), borderColor: 'black', borderWidth: 1, justifyContent: 'center', height: 70 }}>
        <Text style={{textAlign: 'center'}}>{this.props.note}</Text>
      </View>
    )
  }
}