import React from 'react'
import { ScrollView, StyleSheet, Picker } from 'react-native'
import { connect } from 'react-redux'

import { changeScale, changeTuning, changeKey } from '../redux/bundles/guitar'
import { scales, tunings, notes } from '../constants/stuff'

class ConfigScreen extends React.Component {
  static navigationOptions = {
    title: 'Links'
  }

  onScaleChange = itemValue => {
    this.props.changeScale(itemValue)
  }
  onTuningChange = itemValue => {
    this.props.changeTuning(itemValue)
  }
  onKeyChange = itemValue => {
    this.props.changeKey(itemValue)
  }

  getScales = () => {
    return scales.map((n, i) => (
      <Picker.Item key={i} label={n.name} value={n.name} />
    ))
  }

  getTunings = () => {
    return tunings.map((n, i) => (
      <Picker.Item key={i} label={n.name} value={n.name} />
    ))
  }

  getKeys = () => {
    return notes.map((n, i) => <Picker.Item key={i} label={n} value={n} />)
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Picker
          onValueChange={this.onScaleChange}
          selectedValue={this.props.selectedScale}
        >
          {this.getScales()}
        </Picker>
        <Picker
          onValueChange={this.onTuningChange}
          selectedValue={this.props.selectedTuning}
        >
          {this.getTunings()}
        </Picker>
        <Picker
          onValueChange={this.onKeyChange}
          selectedValue={this.props.selectedKey}
        >
          {this.getKeys()}
        </Picker>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
})

const mapStateToProps = state => {
  return {
    selectedScale: state.guitar.scale.name,
    selectedTuning: state.guitar.tuning.name,
    selectedKey: state.guitar.key
  }
}

const mapDispatchToProps = { changeScale, changeTuning, changeKey }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigScreen)
