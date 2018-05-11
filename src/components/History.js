import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import styles from '../styles/styles.js'

type Props = {
  history: PropTypes.array
};
export default class History extends Component<Props> {
  _renderRow (row, ind) {
    return (
      <View style={[styles.historyRow, ind % 2 !== 0 && styles.historyRowHighlight]} key={ind}>
        <View style={styles.historyCell}><Text>${row.amount}</Text></View>
        <View style={styles.historyCell}><Text>{row.type}</Text></View>
        <View style={styles.historyCell}><Text>{row.source}</Text></View>
        <View style={styles.historyCell}><Text>{row.dest}</Text></View>
      </View>
    )
  }

  _renderHeader() {
    return (
      <View style={[styles.historyRow, styles.historyRowHeader]}>
        <View style={styles.historyCell}><Text>Amount</Text></View>
        <View style={styles.historyCell}><Text>Type</Text></View>
        <View style={styles.historyCell}><Text>Source</Text></View>
        <View style={styles.historyCell}><Text>Destination</Text></View>
      </View>
    )
  }

  render() {
    const {history} = this.props
    return (
      <ScrollView style={styles.historyScrollView}>
        { this._renderHeader() }
        {
          history && history.length > 0
          && history.map((row, ind) => this._renderRow(row, ind))
        }
      </ScrollView>
    );
  }
}
